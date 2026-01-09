import type { PluginOption } from 'vite'
import fs from 'node:fs/promises'
import { normalizePath } from 'vite'
import { parse } from 'vue/compiler-sfc'
import { createMarkdown, loadBaseMd, loadShiki } from '../markdown'

/**
 * 将绝对路径转换为相对于项目根目录的路径
 * @param absolutePath 绝对路径
 * @param root 项目根目录
 * @returns 相对路径
 */
export function toRelativePath(absolutePath: string, root: string): string {
  const normalizedPath = normalizePath(absolutePath)
  const normalizedRoot = normalizePath(root)
  return normalizedPath.startsWith(normalizedRoot)
    ? normalizedPath.slice(normalizedRoot.length)
    : normalizedPath
}

export function demoPlugin(): PluginOption {
  const md = createMarkdown()({
    withPlugin: false,
    config(md) {
      loadBaseMd(md)
      loadShiki(md)
    },
  })
  const VIRTUAL_MODULE_ID = 'virtual:demos'
  const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
  const DEMO_SUFFIX = 'demo=true'
  const DEMO_GLOB = ['/src/pages/**/demo/*.vue']
  return {
    name: 'vite:demo',
    enforce: 'pre',
    async resolveId(id, importer) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID
      }
      if (id.includes(DEMO_SUFFIX)) {
        const resolved = await this.resolve(id, importer, { skipSelf: true })
        if (resolved) {
          return `\0${resolved.id}`
        }
      }
    },
    async load(id) {
      const [, query] = id.split('?')
      const params = new URLSearchParams(query)
      if (params.get('vue') !== null && params.get('type') === 'docs') {
        return 'export default {}'
      }
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `const rawDemos = import.meta.glob(${JSON.stringify(DEMO_GLOB)},{
            query: {demo:'true'},
            eager: true,
            import: 'default'
        })
        export default rawDemos
        `
      }
      if (id.startsWith('\0') && id.includes(DEMO_SUFFIX)) {
        const virtualId = id.slice(1)
        const [filePath] = virtualId.split('?')
        const code = await fs.readFile(filePath, 'utf-8')

        const { descriptor } = parse(code, {
          filename: filePath,
          sourceMap: false,
        })
        const locales: Record<string, any> = {}
        // 提取docsBlock的部分
        const docsBlock = descriptor.customBlocks.filter(block => block.type === 'docs')
        await Promise.all(docsBlock?.map(async (block) => {
          // 获取标签的内容
          const lang = block.attrs.lang as string || 'zh-CN'
          const env: any = {}
          const content = block.content.trim()
          const html = await md.renderAsync(content, env)
          // 提取标题内容
          const title = env.formatters?.title ?? env?.title ?? ''
          locales[lang] = {
            html,
            title,
          }
        }))
        const sourceCode = code.replace(/<docs[^>]*>[\s\S]*?<\/docs>/g, '').trim()
        const sourceHtml = await md.renderAsync(`\`\`\`vue\n${sourceCode}\n\`\`\``)
        return {
          code: `export default { 
  component: () => import('${filePath}'),
  locales: ${JSON.stringify(locales)},
  source: ${JSON.stringify(sourceCode)},
  html: ${JSON.stringify(sourceHtml)}
}`,
          map: null,
        }
      }
    },
    // handleHotUpdate(ctx) {
    //   const relativePath = toRelativePath(ctx.file, ctx.server.config.root)
    //   const isDemo = DEMO_GLOB.some(pattern => pm.isMatch(relativePath, pattern))
    //   if (isDemo) {
    //     const normalizedFile = normalizePath(ctx.file)
    //     const server = ctx.server
    //     // const virtualModule = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
    //     // if (virtualModule) {
    //     //   server.moduleGraph.invalidateModule(virtualModule)
    //     //   return [virtualModule]
    //     // }
    //     const mods = Array.from(server.moduleGraph.urlToModuleMap.values())
    //       .filter(m => m.id?.includes(normalizedFile) && m.id?.includes(DEMO_SUFFIX))
    //
    //     if (mods.length > 0) {
    //       mods.forEach(m => server.moduleGraph.invalidateModule(m))
    //       return mods
    //     }
    //   }
    // },
  }
}

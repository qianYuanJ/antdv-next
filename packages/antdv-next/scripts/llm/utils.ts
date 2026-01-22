import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getRepoRoot() {
  return fileURLToPath(new URL('../../../../', import.meta.url))
}

export function normalizePath(value: string) {
  return value.split(path.sep).join('/')
}

export function stripFrontmatter(content: string) {
  return content.replace(/^---[\s\S]*?---\s*/m, '').trim()
}

function unquote(value: string) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\'')))
    return value.slice(1, -1)
  return value
}

export function extractTitle(content: string) {
  const frontmatter = content.match(/^---[\s\S]*?---/m)?.[0]
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const frontTitle = frontmatter?.match(/^\s*title\s*:\s*(.+)$/m)?.[1]?.trim()
  if (frontTitle)
    return unquote(frontTitle)

  const body = stripFrontmatter(content)
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim()
  return heading ? unquote(heading) : ''
}

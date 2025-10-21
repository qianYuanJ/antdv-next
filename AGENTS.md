# Repository Guidelines

## 🧭 Core Objective

1. **Faithful Implementation:**
   All components must match the original [Ant Design](https://github.com/ant-design/ant-design) API, interaction behavior, and visual semantics as closely as possible.

2. **Vue-first Design:**
   Adapt the React codebase to idiomatic **Vue 3 Composition API + TSX** patterns while keeping logical consistency.

3. **Typed Contracts:**
   Every component must define explicit `Props`, `Emits`, and `SlotsType` using the pattern:
   ```ts
   defineComponent<Props, Emits, string, SlotsType<Slots>>(...)
   ```

## 🏗 Project Architecture

| Layer | Module | Description |
|-------|---------|-------------|
| **Core** | `Vue3 + TypeScript + Vite` | Development environment and runtime |
| **Styling** | `@antdv-next/cssinjs` | CSS-in-JS runtime matching Ant Design v5 |
| **Utilities** | `_util/`, `config-provider/`, `hooks/` | Shared helpers and context providers |
| **Components** | `packages/antdv-next/src/` | Main component source |
| **Playground** | `playground/` | Vite demo environment for live validation |
| **Tooling** | `tsdown`, `vitest`, `eslint`, `pnpm` | Build and test infrastructure |

## 🧩 Props / Attrs / Class Mapping

| Ant Design (React) | Vue Adaptation | Description |
|--------------------|----------------|--------------|
| `className` | from `attrs.class` | Not exposed in props |
| `style` | from `attrs.style` | Not exposed in props |
| `rootClassName` | `rootClass` | Root container class |
| `classNames` | `classes` | Sub-element class collection |
| `children` | `slots.default` | Replaced by Vue slots |
| `on*` props | `emits` | All events defined in emits only |
| render-type props | `RenderNodeFn` + slot dual-mode | Standardized render function contract |

> ✅ **Attrs precedence:**
> Always merge `attrs.class` and `attrs.style` last to preserve user overrides.

## 🎨 Render Function (RenderNodeFn) Convention

- Import definition:
  ```ts
  import type { RenderNodeFn } from '../_util/type.ts'
  ```
- Generate a rendering function using:
  ```ts
  import { getSlotPropFn } from '../_util/tools.ts'

  const iconFn = getSlotPropFn(slots, props, 'icon')
  const iconVNode = filterEmpty(iconFn?.({ size: 16 }) ?? [])
  ```
- **Slot takes priority** → fallback to prop → fallback to `null`.
- Clean null / empty vnode using:
  ```ts
  import { filterEmpty } from '@v-c/util/dist/props-util'
  ```

## ⚙️ Emits and Event Handling

- All events must be explicitly declared under `emits`.
- No props beginning with `on` are allowed.
- Example:
  ```ts
  export interface ButtonEmits {
    (e: 'click', ev: MouseEvent): void
    (e: 'update:loading', v: boolean): void
  }
  ```
- In `setup()`:
  ```ts
  function handleClick(e: MouseEvent) {
    if (!props.disabled)
      emit('click', e)
  }
  ```

## 🧱 Component Structure Template

```ts
import { defineComponent, computed } from 'vue'
import { filterEmpty, getSlotPropFn } from '../_util'
import type { RenderNodeFn } from '../_util/type'

export interface ButtonProps {
  type?: 'default' | 'primary'
  disabled?: boolean
  rootClass?: string
  classes?: Record<string, string>
  icon?: RenderNodeFn<{ size?: number }>
}

export type ButtonEmits = {
  (e: 'click', ev: MouseEvent): void
}

export interface ButtonSlots {
  default?: () => any
  icon?: (ctx?: { size?: number }) => any
}

export default defineComponent<ButtonProps, ButtonEmits, string, SlotsType<ButtonSlots>>({
  name: 'AButton',
  inheritAttrs: false,
  props: { type: String, disabled: Boolean, rootClass: String, classes: Object },
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    const iconFn = getSlotPropFn(slots, props, 'icon')
    const prefixCls = 'ant-btn'
    const rootCls = computed(() => [
      prefixCls,
      props.rootClass,
      props.classes?.root,
      attrs.class,
    ])

    const onClick = (e: MouseEvent) => {
      if (!props.disabled) emit('click', e)
    }

    return () => (
      <button class={rootCls.value} style={attrs.style} onClick={onClick}>
        {filterEmpty(iconFn?.({ size: 16 }) ?? [])}
        {filterEmpty(slots.default?.() ?? [])}
      </button>
    )
  },
})
```

## 🧰 Utility Imports

| Utility | Source | Purpose |
|----------|---------|---------|
| `filterEmpty` | `@v-c/util/dist/props-util` | Remove empty vnode/fragments |
| `getSlotPropFn` | `../_util/tools.ts` | Generate unified render function |
| `classNames` | `@v-c/util` | Class merging utility |
| `toArray` | `es-toolkit/compat` | Normalize child nodes |
| `useConfig`, `useComponentConfig` | `config-provider/context.ts` | Access global component config |
| `useSize`, `useDisabledContext` | `config-provider/hooks` | Context utilities for sizing/disabled state |

## 🔠 Naming & Styling Conventions

- Components, types, and enums follow **PascalCase**.
- Class prefixes always begin with `ant-` (e.g., `ant-btn`).
- Scoped CSS variables handled via `useStyle(prefixCls)`.
- Avoid global CSS side-effects.

## 🧪 Testing & Playground Validation

### Unit Tests (Vitest)
- Test file suffix: `.test.ts`
- Required coverage:
    - Props and emits validation
    - Class/style passthrough via attrs
    - Slot vs prop rendering priority
    - Loading delay behavior
    - href switching behavior
- Directory: `packages/*/tests/`

### Playground Demos
Each component must include a demo under `playground/src/demos/`:

| Case | Required Demo |
|-------|----------------|
| Base usage | `<AButton @click="...">Text</AButton>` |
| rootClass / classes | Props-based styling override |
| Slot rendering | `#icon` slot example |
| Props rendering | `:icon="..."` example |
| Loading | Boolean & object delay cases |
| href | `<AButton href="...">` link case |

## 🚫 Deprecated / Removed React Props

| React Prop | Vue Equivalent |
|-------------|----------------|
| `children` | removed → `slots.default` |
| `rootClassName` | `rootClass` |
| `classNames` | `classes` |
| `on*` handlers | removed → use emits |
| Deprecated legacy props | completely dropped |
| `Fragment` wrappers | cleaned by `filterEmpty()` |

## 🚀 Commit & Release Process

### Conventional Commit Types
- `feat:` — New feature
- `fix:` — Bug fix
- `refactor:` — Code refactor
- `docs:` — Documentation only
- `test:` — Test updates
- `chore:` — Build / infra maintenance

### Example Workflow
```bash
pnpm lint
pnpm -F antdv-next test
# test specific file
pnpm -F antdv-next test button.test.ts
pnpm -F @antdv-next/cssinjs build
git commit -m "feat(button): add slot-based icon rendering"
git push
```

### Publishing
```bash
pnpm -r build
pnpm -F antdv-next publish --access public
```

## 🤝 Agent Collaboration Guidelines

### Responsibilities
1. Maintain API parity with Ant Design.
2. Follow all conventions defined in this document.
3. Validate visual and behavioral parity via Playground.
4. Review naming consistency and prop-event separation.
5. Reject any new `on*` props or deprecated attributes.
6. Prefer type-safe, composable implementations.

### Recommended Tools
- **IDE:** VSCode / WebStorm (Volar + TS Plugin)
- **Formatter:** `@antfu/eslint-config`
- **Test Runner:** `vitest --watch`
- **Playground:** `pnpm dev`

## 📘 Reference Links

- [Ant Design (React)](https://github.com/ant-design/ant-design)
- [React-Component Libraries](https://github.com/react-component)
- [Antdv-Next Project Docs](https://github.com/antdv-next)

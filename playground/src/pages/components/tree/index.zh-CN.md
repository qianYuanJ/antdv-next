---
category: Components
group: 数据展示
title: Tree
subtitle: 树形控件
description: 多层次的结构列表。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*zYIWT52S4UMAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_9MMRpWoOcYAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### DirectoryTree

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rootClass | - | string | - | - |
| showLine | 是否展示连接线 | boolean \| \{ showLeafIcon: boolean \| TreeLeafIcon \} | false | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TreeClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TreeStylesType | - | - |
| multiple | 支持点选多个节点（节点本身） | boolean | false | - |
| autoExpandParent | 是否自动展开父节点 | boolean | false | - |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false | - |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false | - |
| disabled | 将树禁用 | boolean | false | - |
| defaultExpandAll | 默认展开所有树节点 | boolean | false | - |
| defaultExpandParent | 默认展开父节点 | boolean | true | - |
| defaultExpandedKeys | 默认展开指定的树节点 | Key[] | \[] | - |
| expandedKeys | （受控）展开指定的树节点 | Key[] | \[] | - |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 `checkable` 和 `checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | Key[] \| \{ checked: Key[], halfChecked: Key[] \} | \[] | - |
| defaultCheckedKeys | 默认选中复选框的树节点 | Key[] | \[] | - |
| selectedKeys | （受控）设置选中的树节点，多选需设置 `multiple` 为 true | Key[] | - | - |
| defaultSelectedKeys | 默认选中的树节点 | Key[] | \[] | - |
| selectable | 是否可选中 | boolean | true | - |
| filterAntTreeNode | Click on the tree node to trigger | (node: AntTreeNode) =&gt; boolean | - | - |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | Key[] | \[] | - |
| draggable | 设置节点可拖拽，可以通过 `icon: false` 关闭拖拽提示图标 | DraggableFn \| boolean \| DraggableConfig | false | `config`: 4.17.0 |
| showIcon | 控制是否展示 `icon` 节点，没有默认样式 | boolean | false | - |
| icon | 在标题之前插入自定义图标。需要设置 `showIcon` 为 true | TreeIcon | - | - |
| switcherIcon | 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式） | SwitcherIcon | - | renderProps: 4.20.0 |
| switcherLoadingIcon | 自定义树节点的加载图标 | VueNode | - | 5.20.0 |
| prefixCls | - | string | - | - |
| blockNode | 是否节点占据一行 | boolean | false | - |
| tabindex | - | number | - | - |
| expandAction | - | ExpandAction | - | - |

#### AntTreeNode

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | - | string | - | - |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false | - |
| disabled | 将树禁用 | boolean | false | - |
| disableCheckbox | - | boolean | - | - |
| title | - | any \| ((data: DataNode) =&gt; any) | - | - |
| key | - | Key | - | - |
| eventKey | - | Key | - | - |
| isLeaf | - | boolean | - | - |
| checked | - | boolean | - | - |
| expanded | - | boolean | - | - |
| loading | - | boolean | - | - |
| selected | - | boolean | - | - |
| selectable | 是否可选中 | boolean | true | - |
| icon | 在标题之前插入自定义图标。需要设置 `showIcon` 为 true | TreeIcon | - | - |
| children | - | VueNode | - | - |

#### Tree

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| rootClass | - | string | - | - |
| showLine | 是否展示连接线 | boolean \| \{ showLeafIcon: boolean \| TreeLeafIcon \} | false | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TreeClassNamesType | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TreeStylesType | - | - |
| multiple | 支持点选多个节点（节点本身） | boolean | false | - |
| autoExpandParent | 是否自动展开父节点 | boolean | false | - |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false | - |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false | - |
| disabled | 将树禁用 | boolean | false | - |
| defaultExpandAll | 默认展开所有树节点 | boolean | false | - |
| defaultExpandParent | 默认展开父节点 | boolean | true | - |
| defaultExpandedKeys | 默认展开指定的树节点 | Key[] | \[] | - |
| expandedKeys | （受控）展开指定的树节点 | Key[] | \[] | - |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 `checkable` 和 `checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | Key[] \| \{ checked: Key[], halfChecked: Key[] \} | \[] | - |
| defaultCheckedKeys | 默认选中复选框的树节点 | Key[] | \[] | - |
| selectedKeys | （受控）设置选中的树节点，多选需设置 `multiple` 为 true | Key[] | - | - |
| defaultSelectedKeys | 默认选中的树节点 | Key[] | \[] | - |
| selectable | 是否可选中 | boolean | true | - |
| filterAntTreeNode | Click on the tree node to trigger | (node: AntTreeNode) =&gt; boolean | - | - |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | Key[] | \[] | - |
| draggable | 设置节点可拖拽，可以通过 `icon: false` 关闭拖拽提示图标 | DraggableFn \| boolean \| DraggableConfig | false | `config`: 4.17.0 |
| showIcon | 控制是否展示 `icon` 节点，没有默认样式 | boolean | false | - |
| icon | 在标题之前插入自定义图标。需要设置 `showIcon` 为 true | TreeIcon | - | - |
| switcherIcon | 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式） | SwitcherIcon | - | renderProps: 4.20.0 |
| switcherLoadingIcon | 自定义树节点的加载图标 | VueNode | - | 5.20.0 |
| prefixCls | - | string | - | - |
| blockNode | 是否节点占据一行 | boolean | false | - |
| tabindex | - | number | - | - |

### 事件 {#events}

#### DirectoryTree

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | - | NonNullable&lt;VcTreeProps['onClick']&gt; | - |
| check | 点击复选框触发 | NonNullable&lt;VcTreeProps['onCheck']&gt; | - |
| expand | 展开/收起节点时触发 | NonNullable&lt;VcTreeProps['onExpand']&gt; | - |
| select | 点击树节点触发 | NonNullable&lt;VcTreeProps['onSelect']&gt; | - |
| blur | - | NonNullable&lt;VcTreeProps['onBlur']&gt; | - |
| focus | - | NonNullable&lt;VcTreeProps['onFocus']&gt; | - |
| rightClick | 响应右键点击 | NonNullable&lt;VcTreeProps['onRightClick']&gt; | - |
| dblclick | - | NonNullable&lt;VcTreeProps['onDoubleClick']&gt; | - |
| doubleClick | - | NonNullable&lt;VcTreeProps['onDoubleClick']&gt; | - |
| contextmenu | - | NonNullable&lt;VcTreeProps['onContextMenu']&gt; | - |
| dragstart | - | NonNullable&lt;VcTreeProps['onDragStart']&gt; | - |
| dragenter | - | NonNullable&lt;VcTreeProps['onDragEnter']&gt; | - |
| dragover | - | NonNullable&lt;VcTreeProps['onDragOver']&gt; | - |
| dragleave | - | NonNullable&lt;VcTreeProps['onDragLeave']&gt; | - |
| drop | drop 触发时调用 | NonNullable&lt;VcTreeProps['onDrop']&gt; | - |
| dragend | - | NonNullable&lt;VcTreeProps['onDragEnd']&gt; | - |
| load | 节点加载完毕时触发 | NonNullable&lt;VcTreeProps['onLoad']&gt; | - |
| mouseleave | - | NonNullable&lt;VcTreeProps['onMouseLeave']&gt; | - |
| mouseenter | - | NonNullable&lt;VcTreeProps['onMouseEnter']&gt; | - |
| scroll | - | NonNullable&lt;VcTreeProps['onScroll']&gt; | - |
| activeChange | - | NonNullable&lt;VcTreeProps['onActiveChange']&gt; | - |
| update:expandedKeys | - | (keys: Key[]) =&gt; void | - |
| update:checkedKeys | - | (keys: Key[] \| \{ checked: Key[], halfChecked: Key[] \}) =&gt; void | - |
| update:selectedKeys | - | (keys: Key[]) =&gt; void | - |
| update:activeKey | - | (key: Key) =&gt; void | - |

#### Tree

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | - | NonNullable&lt;VcTreeProps['onClick']&gt; | - |
| check | 点击复选框触发 | NonNullable&lt;VcTreeProps['onCheck']&gt; | - |
| expand | 展开/收起节点时触发 | NonNullable&lt;VcTreeProps['onExpand']&gt; | - |
| select | 点击树节点触发 | NonNullable&lt;VcTreeProps['onSelect']&gt; | - |
| blur | - | NonNullable&lt;VcTreeProps['onBlur']&gt; | - |
| focus | - | NonNullable&lt;VcTreeProps['onFocus']&gt; | - |
| rightClick | 响应右键点击 | NonNullable&lt;VcTreeProps['onRightClick']&gt; | - |
| dblclick | - | NonNullable&lt;VcTreeProps['onDoubleClick']&gt; | - |
| doubleClick | - | NonNullable&lt;VcTreeProps['onDoubleClick']&gt; | - |
| contextmenu | - | NonNullable&lt;VcTreeProps['onContextMenu']&gt; | - |
| dragstart | - | NonNullable&lt;VcTreeProps['onDragStart']&gt; | - |
| dragenter | - | NonNullable&lt;VcTreeProps['onDragEnter']&gt; | - |
| dragover | - | NonNullable&lt;VcTreeProps['onDragOver']&gt; | - |
| dragleave | - | NonNullable&lt;VcTreeProps['onDragLeave']&gt; | - |
| drop | drop 触发时调用 | NonNullable&lt;VcTreeProps['onDrop']&gt; | - |
| dragend | - | NonNullable&lt;VcTreeProps['onDragEnd']&gt; | - |
| load | 节点加载完毕时触发 | NonNullable&lt;VcTreeProps['onLoad']&gt; | - |
| mouseleave | - | NonNullable&lt;VcTreeProps['onMouseLeave']&gt; | - |
| mouseenter | - | NonNullable&lt;VcTreeProps['onMouseEnter']&gt; | - |
| scroll | - | NonNullable&lt;VcTreeProps['onScroll']&gt; | - |
| activeChange | - | NonNullable&lt;VcTreeProps['onActiveChange']&gt; | - |
| update:expandedKeys | - | (keys: Key[]) =&gt; void | - |
| update:checkedKeys | - | (keys: Key[] \| \{ checked: Key[], halfChecked: Key[] \}) =&gt; void | - |
| update:selectedKeys | - | (keys: Key[]) =&gt; void | - |
| update:activeKey | - | (key: Key) =&gt; void | - |

### 插槽 {#slots}

#### DirectoryTree

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| switcherLoadingIcon | 自定义树节点的加载图标 | () =&gt; any | 5.20.0 |
| switcherIcon | 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式） | (props: AntTreeNodeProps) =&gt; any | renderProps: 4.20.0 |
| draggableIcon | - | () =&gt; any | - |
| icon | 在标题之前插入自定义图标。需要设置 `showIcon` 为 true | (props: AntdTreeNodeAttribute) =&gt; any | - |
| titleRender | 自定义渲染节点 | VcTreeProps['titleRender'] | 4.5.0 |

#### Tree

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| switcherLoadingIcon | 自定义树节点的加载图标 | () =&gt; any | 5.20.0 |
| switcherIcon | 自定义树节点的展开/折叠图标（带有默认 rotate 角度样式） | (props: AntTreeNodeProps) =&gt; any | renderProps: 4.20.0 |
| draggableIcon | - | () =&gt; any | - |
| icon | 在标题之前插入自定义图标。需要设置 `showIcon` 为 true | (props: AntdTreeNodeAttribute) =&gt; any | - |
| titleRender | 自定义渲染节点 | VcTreeProps['titleRender'] | 4.5.0 |
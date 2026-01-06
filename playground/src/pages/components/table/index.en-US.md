---
category: Components
group: Data Display
title: Table
description: A table displays rows of data.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3yz3QqMlShYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Sv8XQ50NB40AAAAAAAAAAAAADrJ8AQ/original
---

<DocHeading></DocHeading>

## Examples {#examples}

<demo-group>
  <demo src="./demo/basic.vue">Basic</demo>
  <demo src="./demo/bordered.vue">Bordered</demo>
  <demo src="./demo/ajax.vue">Ajax</demo>
  <demo src="./demo/pagination.vue">Pagination</demo>
  <demo src="./demo/size.vue">Size</demo>
  <demo src="./demo/sticky.vue">Sticky Header</demo>
  <demo src="./demo/fixed-header.vue">Fixed Header</demo>
  <demo src="./demo/fixed-columns.vue">Fixed Columns</demo>
  <demo src="./demo/fixed-columns-header.vue">Fixed Columns & Header</demo>
  <demo src="./demo/fixed-gapped-columns.vue">Wide Fixed Columns</demo>
  <demo src="./demo/narrow.vue">Narrow Table</demo>
  <demo src="./demo/responsive.vue">Responsive</demo>
  <demo src="./demo/grouping-columns.vue">Grouped Columns</demo>
  <demo src="./demo/colspan-rowspan.vue">Rowspan & Colspan</demo>
  <demo src="./demo/summary.vue">Summary</demo>
  <demo src="./demo/custom-empty.vue">Custom Empty</demo>
  <demo src="./demo/custom-filter-panel.vue">Custom Filter Panel</demo>
  <demo src="./demo/filter-search.vue">Filter Search</demo>
  <demo src="./demo/filter-in-tree.vue">Tree Filter</demo>
  <demo src="./demo/head.vue">Sorting & Filtering</demo>
  <demo src="./demo/multiple-sorter.vue">Multiple Sorter</demo>
  <demo src="./demo/order-column.vue">Order Columns</demo>
  <demo src="./demo/hidden-columns.vue">Hidden Columns</demo>
  <demo src="./demo/drag-sorting.vue">Drag Row Sorting</demo>
  <demo src="./demo/drag-sorting-handler.vue">Drag Handle Sorting</demo>
  <demo src="./demo/resizable-column.vue">Resizable Column</demo>
  <demo src="./demo/edit-row.vue">Edit Row</demo>
  <demo src="./demo/edit-cell.vue">Edit Cell</demo>
  <demo src="./demo/ellipsis.vue">Ellipsis</demo>
  <demo src="./demo/ellipsis-custom-tooltip.vue">Custom Ellipsis Tooltip</demo>
  <demo src="./demo/expand.vue">Expand</demo>
  <demo src="./demo/expand-sticky.vue">Expand Sticky</demo>
  <demo src="./demo/nested-table.vue">Nested Table</demo>
  <demo src="./demo/tree-data.vue">Tree Data</demo>
  <demo src="./demo/tree-table-ellipsis.vue">Tree Ellipsis</demo>
  <demo src="./demo/tree-table-preserveSelectedRowKeys.vue">Preserve Selection</demo>
  <demo src="./demo/row-selection.vue">Row Selection</demo>
  <demo src="./demo/row-selection-custom.vue">Custom Selection</demo>
  <demo src="./demo/row-selection-and-operation.vue">Selection Operations</demo>
  <demo src="./demo/reset-filter.vue">Reset Filter</demo>
  <demo src="./demo/virtual-list.vue">Virtual List</demo>
  <demo src="./demo/style-class.vue">Style & Class</demo>
  <demo src="./demo/dynamic-settings.vue">Dynamic Settings</demo>
  <demo src="./demo/cell-slot.vue">Header & Body Cell Slots</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TableClassNamesType&lt;RecordType&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TableStylesType&lt;RecordType&gt; | - | - |
| dropdownPrefixCls | - | string | - | - |
| dataSource | Data record array to be displayed | VcTableProps&lt;RecordType&gt;['data'] | - | - |
| columns | Columns of table | ColumnsType&lt;RecordType&gt; | - | - |
| pagination | Config of pagination. You can ref table pagination [config](#pagination) or full [`pagination`](/components/pagination/) document, hide it by setting it to `false` | false \| TablePaginationConfig | - | - |
| loading | Loading status of table | boolean \| SpinProps | false | - |
| size | Size of table | SizeType | `large` | - |
| bordered | Whether to show all table borders | boolean | false | - |
| locale | The i18n text including filter, sort, empty text, etc | TableLocale | [Default Value](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/en_US.tsx#L19-L37) | - |
| rowSelection | Row selection [config](#rowselection) | TableRowSelection&lt;RecordType&gt; | - | - |
| getPopupContainer | The render container of dropdowns in table | GetPopupContainer | () =&gt; TableHtmlElement | - |
| scroll | Whether the table can be scrollable, [config](#scroll) | VcTableProps&lt;RecordType&gt;['scroll'] & \{ scrollToFirstRowOnChange?: boolean \} | - | - |
| sortDirections | Supported sort way, could be `ascend`, `descend` | SortOrder[] | \[`ascend`, `descend`] | - |
| showSorterTooltip | The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object | boolean \| SorterTooltipProps | { target: 'full-header' } | 5.16.0 |
| virtual | Support virtual list | boolean | - | 5.9.0 |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback executed when pagination, filters or sorter is changed | (     pagination: TablePaginationConfig,     filters: Record&lt;string, FilterValue \| null&gt;,     sorter: SorterResult&lt;RecordType&gt; \| SorterResult&lt;RecordType&gt;[],     extra: TableCurrentDataSource&lt;RecordType&gt;,   ) =&gt; void | - |
| update:expandedRowKeys | - | (keys: readonly Key[]) =&gt; void | - |
| scroll | Whether the table can be scrollable, [config](#scroll) | NonNullable&lt;VcTableProps['onScroll']&gt; | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | Table title renderer | (data: readonly RecordType[]) =&gt; any | - |
| footer | Table footer renderer | (data: readonly RecordType[]) =&gt; any | - |
| summary | Summary content | (data: readonly RecordType[]) =&gt; any | - |
| emptyText | - | () =&gt; any | - |
| expandIcon | - | (info: any) =&gt; any | - |
| expandedRowRender | - | (ctx: \{ record: RecordType, index: number, indent: number, expanded: boolean \}) =&gt; any | - |
| headerCell | - | (ctx: \{ column: ColumnType&lt;RecordType&gt;, index: number, text: any \}) =&gt; any | - |
| bodyCell | - | (ctx: \{ column: ColumnType&lt;RecordType&gt;, index: number, text: any, record: RecordType \}) =&gt; any | - |
| filterDropdown | - | (ctx: FilterDropdownProps & \{ column: ColumnType&lt;RecordType&gt; \}) =&gt; any | - |
| filterIcon | - | (ctx: \{ column: ColumnType&lt;RecordType&gt;, filtered: boolean \}) =&gt; any | - |
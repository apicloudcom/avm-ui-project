# Checkbox 勾选框

<code src="./demos/index.tsx"></code>

## 属性

### CheckboxGroup

| 参数         | 说明           | 类型                               | 默认值  |
| ------------ | -------------- | ---------------------------------- | ------- |
| defaultValue | 默认选中的选项 | `CheckboxValue[]`                  | `[]`    |
| disabled     | 整组失效       | `boolean`                          | `false` |
| value        | 指定选中的选项 | `CheckboxValue[]`                  | `[]`    |
| onChange     | 变化时回调函数 | `(value: CheckboxValue[]) => void` | -       |
| iconSize | 勾选图标的大小      | -                                  | `22px` |
| fontSize | 右侧文字描述的大小   | -                                 | `17px` |
| gap       | 图标和文字描述之间的间距 | -                             | `8px`  |

### Checkbox

| 参数           | 说明                                         | 类型                 | 默认值  |
|----------------|---------------------------------------------|----------------------|---------|
| checked        | 指定当前是否选中                             | `boolean`             | `false` |
| defaultChecked | 初始是否选中                                 | `boolean`             | `false` |
| disabled       | 失效状态                                     | `boolean`             | `false` |
| onChange       | 变化时回调函数                               | `(val: boolean) => void`| -       |
| value          | 携带的标识值，用于 `Group` 模式              | `CheckboxValue`          | -       |
| indeterminate  | 设置 `indeterminate` 状态，只负责样式控制    | `boolean`                | `false` |
| block          | 是否渲染为块级元素                           | `boolean`                | `false` |
| icon           | 未选中图标                                  | `ReactNode`                | - |
| selectedIcon   | 选中图标                                    | `ReactNode`                | - |
| description    | 辅助说明描述                                    | `string`                | - |
| descIsOneLineShow    | 辅助说明描述是否跟label文本在一行            | `boolean`                | `false` |
| isTwoHeadArrange    | 复选icon是否跟文本分布两头展示                | `boolean`                | `false` |

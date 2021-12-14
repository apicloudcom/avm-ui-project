# Selector 选择组

<code src="./demos/index.tsx"></code>

## 属性

```ts | pure
type SelectorValue = string | number
```

## Selector

| 属性         | 说明             | 类型                                                                    | 默认值  |
| ------------ | ---------------- | ----------------------------------------------------------------------- | ------- |
| value        | 选中项           | `SelectorValue[]`                                                       | -       |
| defaultValue | 默认项           | `SelectorValue[]`                                                       | `[]`    |
| columns      | 行展示数         | `number`                                                                | -       |
| options      | 可选项           | `SelectorOption[]`                                                      | -       |
| multiple     | 是否允许多选     | `boolean`                                                               | `false` |
| disabled     | 是否全局禁止选中 | `boolean`                                                               | `false` |
| onChange     | 选项改变时触发   | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |
| checkedColor | 选中填充背景颜色 | - |`#e7f1ff` |
| color | 选中字体颜色 | - |`#333` |

## SelectorOption

| 属性     | 说明     | 类型            | 默认值  |
| -------- | -------- | --------------- | ------- |
| label    | 文字     | `string`        | -       |
| value    | 选项的值 | `SelectorValue` | -       |
| disabled | 是否禁用 | `boolean`       | `false` |



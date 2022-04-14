# Radio 单选框

<code src="./demos/index.tsx"></code>

## API

```ts | pure
type RadioValue = string | number
```

### Radio

| 参数           | 说明                                         | 类型                                    | 默认值  |
| -------------- | -------------------------------------------- | --------------------------------------- | ------- |
| checked        | 指定当前是否选中                             | `boolean`                               | `false` |
| defaultChecked | 初始是否选中                                 | `boolean`                               | `false` |
| disabled       | 失效状态                                     | `boolean`                               | `false` |
| radioChange       | 变化时回调函数                               | `(val: boolean) => void`                | -       |
| value          | 携带的标识值，用于 `Group` 模式              | `RadioValue`                            | -       |
| block          | 是否渲染为块级元素                           | `boolean`                               | `false` |
| id             | `input` 元素的 `id`，常用来配合 `label` 使用 | `string`                                | -       |
| icon           | 自定义 `icon` 图标                           | `(checked: boolean) => React.ReactNode` | -       |
| iconSize | 勾选图标的大小          | - | `22px` |
| fontSize | 右侧文字描述的大小       | - | `17px` |
| gap       | 图标和文字描述之间的间距 | - | `8px`  |
| description    | 辅助说明描述                                    | `string`                | - |
| descIsOneLineShow    | 辅助说明描述是否跟label文本在一行            | `boolean`                | `false` |
| isTwoHeadArrange    | 复选icon是否跟文本分布两头展示                | `boolean`                | `false` |

### Radio.Group

| 参数         | 说明           | 类型                          | 默认值  |
| ------------ | -------------- | ----------------------------- | ------- |
| defaultValue | 默认选中的选项 | `RadioValue`                  | -       |
| disabled     | 整组失效       | `boolean`                     | `false` |
| value        | 指定选中的选项 | `RadioValue`                  | -       |
| groupChange     | 变化时回调函数 | `(value: RadioValue) => void` | -       |


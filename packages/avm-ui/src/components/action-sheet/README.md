# ActionSheet 动作面板

<code src="./demos/index.tsx"></code>

### 属性

| 属性             | 说明                                                                        | 类型                                       | 默认值          |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| visible          | 显示隐藏                                                                    | `boolean`                                  | `false`         |
| actions          | 面板选项列表                                                                | `Action[]`                                 | `[]`            |
| extra            | 顶部的额外区域                                                              | `ReactNode`                                | -               |
| extraDesc         | 顶部的额外区域描述信息                                                    | `string`                         | -               |
| cancelText       | 取消按钮文字，如果设置为空则不显示取消按钮                                  | `string`                                | -               |
| handleAction         | 点击选项时触发，禁用或加载状态下不会触发                                    | `(action: Action, index: number) => void`  | -               |
| handleClose          | 关闭时触发                                                                  | `() => void`                               | -               |
| maskClick      | 点击遮罩层时触发                                                            | `() => void`                               | -               |
| closeOnAction    | 点击选项后是否关闭                                                          | `boolean`                                  | `false`         |
| closeOnMaskClick | 点击遮罩层后是否关闭                                                        | `boolean`                                  | `true`          |

### actions选项列表属性

| 属性        | 说明           | 类型               | 默认值  |
| ----------- | -------------- | ------------------ | ------- |
| key         | 唯一标记       | `string` `number` | -       |
| text        | 标题           | `string`           | -       |
| disabled    | 是否为禁用状态 | `boolean`          | `false` |
| danger      | 是否为危险状态 | `boolean`          | `false` |
| description | 描述           | `string`           | -       |
| handleClick     | 点击时触发     | `() => void`       | -       |

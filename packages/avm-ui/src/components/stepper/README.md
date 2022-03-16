# Stepper 步进器

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx" debug></code>

### 属性

| 参数         | 说明                                                  | 类型                                              | 默认值  |
| ------------ | ----------------------------------------------------- | ------------------------------------------------- | ------- |
| value        | 当前数，受控值                                        | `number`                                          | -       |
| onChange     | 变化时的回调                                          | `(value: number) => void`                         | -       |
| defaultValue | 默认值                                                | `number`                                          | `0`     |
| min          | 最小值                                                | `number`                                          | -       |
| max          | 最大值                                                | `number`                                          | -       |
| step         | 每次改变步数，可以为小数                              | `number`                                          | `1`     |
| digits       | 格式化到小数点后固定位数，设置为 `0` 表示格式化到整数 | `number`                                          | -       |
| disabled     | 是否禁用步进器                                        | `boolean`                                         | `false` |
| onFocus      | 输入框获得焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur       | 输入框失去焦点时触发                                  | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| height                  | 组件整体高度              | -        | `28px`                      |
| inputWidth             | 仅输入框的宽度          | -             | `32px`                      |
| inputFontSize         | 输入框文字大小            | -           | `14px` |
| borderRadius           | 组件整体的圆角           | -            | `4px`                       |
| border                  | 组件四周边框的样式        | -           | `1px solid #e5e5e5`         |
| borderInner            | 组件内部边框的样式         | -          | `1px solid #e5e5e5`             |
| activeBorder           | 输入框 Focus 状态下，四周边框样式  | -  | `1px solid #e5e5e5`             |
| btnFontSize        | 左右两侧按钮文字大小         | -        | `16px`                      |
| btnBgColor | 左右两侧按钮背景颜色           | -      | `#f0f0f0`               |
| btnWidth            | 左右两侧按钮的宽度     | -              | `28px`                      |
| inputFontColor        | 输入框文字颜色        | -               | `#333`     |
| btnTextColor      | 左右两侧按钮文字颜色       | -          | `#333`  |


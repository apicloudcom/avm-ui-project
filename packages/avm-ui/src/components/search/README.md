# Search 搜索

<code src="./demos/index.tsx"></code>

## API

| 属性             | 说明                                         | 类型                                                      | 默认值   |
| ---------------- | -------------------------------------------- | --------------------------------------------------------- | -------- |
| value            | 输入值                                       | `string`                                                  | -        |
| placeholder      | 提示文本                                     | `string`                                                  | -        |
| maxLength        | 输入的最大字符数                             | `number`                                                  | `500`       |
| clearable        | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean`                                                 | `true`   |
| showCancelButton | 是否在搜索框右侧显示取消按钮                 | `boolean \| ((focus: boolean, value: string) => boolean)` | `false`  |
| cancelText       | 取消按钮的文案                               | `string`                                                  | `'取消'` |
| clearOnCancel    | 点击取消按钮后是否清空输入框                 | `boolean`                                                 | `true`   |
| handleSearch         | 输入框回车时触发                             | `(value: string) => void`                                 | -        |
| handleChange         | 输入框内容变化时触发                         | `(value: string) => void`                                 | -        |
| inputFocus          | 输入框获得焦点时触发                         | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -        |
| inputBlur           | 输入框失去焦点时触发                         | `(e: React.FocusEvent<HTMLInputElement>) => void`         | -        |
| inputClear          | 点击清除按钮后触发                           | `() => void`                                              | -        |
| handleCancel         | 点击取消按钮时触发                           | `() => void`                                              | -        |
| background        | 背景色           | -      | `#f5f5f5`               |
| borderRadius     | 圆角               | -    | `4px`                   |
| placeholderColor | `placeholder` 文字颜色  | - | `var(--adm-color-weak)` |
| cancelTextColor  |  取消按钮文案字体颜色  |   `string`   |   `#333`   |


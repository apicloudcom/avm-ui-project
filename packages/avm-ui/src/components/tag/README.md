# Tag 标签

<code src="./demos/index.tsx">

## API

| 属性    | 说明         | 类型                                                                     | 默认值      |
| ------- | ------------ | ------------------------------------------------------------------------ | ----------- |
| color   | 标签色       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill    | 填充模式     | `'solid' \| 'outline'`                                                   | `'solid'`   |
| round   | 是否圆角     | `boolean`                                                                | `false`     |
| handleClick | 标签点击事件 | `(event) => void`         | -           |
| textColor | 文字颜色   | -                                                                        | -           |
| bgColor | 背景颜色     | -                                                                         | -           |
| borderColor | 边框颜色 | -                                                                         | -           |
| borderRadius | round=false时的圆角大小 | -                                                         | `2px`           |
| isDelete | 是否可删除 | `boolean`                                                        | `false`           |
| isDisabled | 是否禁用 | `boolean`                                                         | `false`           |
| size | 尺寸 | `small` `middle`  `large`                                                         | `middle`           |
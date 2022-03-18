# NoticeBar 通告栏

<code src="./demos/index.tsx"></code>

## 属性

| 属性      | 说明                             | 类型                                        | 默认值              |
| --------- | -------------------------------- | ------------------------------------------- | ------------------- |
| color     | 通告栏的类型                     | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'`         |
| content   | 公告内容                         | `React.ReactNode`                           | -                   |
| closeable | 是否可关闭                       | `boolean`                                   | `false`             |
| extra | 额外操作区域，显示在关闭按钮左侧         | `string`                                   | `-`             |
| onClose   | 关闭时的回调                     | `() => void`                                | -                   |
| icon      | 左侧广播图标                     | `React.ReactNode`                           | `<SoundOutlined />` |
| bgColor   | 背景色                          | `string`                                    | `#f4f8e5` |
| borderColor | 边框颜色                 | `string`                           | `#f4f8e5` |
| textColor   | 文字颜色                     | `string`                           | `#9AC200` |
| size      | 通告栏size                     | `small`  `default`                         | `default` |
| isShowLeftIcon      | 是否显示左侧提示icon, 为false时,icon属性设置则无效                     | `boolean`                        | `false` |
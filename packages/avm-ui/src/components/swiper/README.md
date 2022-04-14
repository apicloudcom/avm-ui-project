# Swiper 走马灯

<code src="./demos/index.tsx"></code>
## Swiper

### 属性

| 属性             | 说明                                                                            | 类型                                                                       | 默认值         |
| ---------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------| -------------- |
| defaultIndex     | 初始位置                                                                        | `number`                                                                  | `0`            |
| autoplay         | 是否自动切换                                                                    | `boolean`                                                                 | `false`        |
| autoplayInterval | 自动切换的间隔，单位为 `ms`                                                     | `number`                                             | `3000`         |
| loop             | 是否循环                                                                        | `boolean`                                           | `true` `安卓暂不支持该属性`  |
| direction        | 方向，默认是水平方向                                                            | `'horizontal' \| 'vertical'`                                               | `'horizontal'` |
| indexChange    | 切换时触发                                                                      | `(index: number) => void`                                                 | -              |
| indicatorProps   | 指示器的相关属性                                                                | 支持 [PageIndicator](./page-indicator) 的 `color` `style` `className` 属性  | -              |
| indicator        | 自定义指示器                                                                    | `(total: number, current: number) => ReactNode`                            | -              |
| height           | 高度                                                                           | -                                                                          | `120px`        |
| width            | 宽度                                                                           | -                                                                          | `100%`         |
| borderRadius     | 整体组件的圆角                                                                  | -                                                                         | `0`             |
| title     | 标题文本设置                                                                  | -                                                                         | `string`             |
## Swiper.Item

| 属性    | 说明           | 类型                                                        | 默认值 |
| ------- | -------------- | ----------------------------------------------------------- | ------ |
| handleClick | 点击滑块时触发  | -                                                           | -      |

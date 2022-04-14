# Popup 弹出层

<code src="./demos/index.tsx"></code>

### 属性

| 属性            | 说明                                                                        | 类型                                                               | 默认值          |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible         | 是否可见                                                                    | `boolean`                                                          | `false`         |
| maskClick     | 点击蒙层触发                                                                | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| position        | 指定弹出的位置                                                              | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| className       | 容器类名                                                                    | `string`                                                           | -               |
| style           | 容器样式                                                                    | `React.CSSProperties`                                              | -               |
| bodyClassName   | 内容区域类名                                                                | `string`                                                           | -               |
| bodyStyle       | 内容区域样式                                                                | `React.CSSProperties`                                              | -               |
| maskClassName   | 遮罩类名                                                                    | `string`                                                           | -               |
| maskStyle       | 遮罩样式                                                                    | `React.CSSProperties`                                              | -               |
| handleClick         | 点击时触发                                             | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| handleClose         | 点击关闭icon触发                                             | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| handleBack         | 点击返回时触发                                             | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| zIndex | 元素的 `z-index` | `Number` | `1000`  |


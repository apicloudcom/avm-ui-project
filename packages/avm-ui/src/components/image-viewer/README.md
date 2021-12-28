# ImageViewer 图片查看器

<code src="./demos/index.tsx"></code>

## API

### ImageViewer

| 属性         | 说明                                                                      | 类型                                       | 默认值          |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| image        | 图片资源的 `url`                                                          | `string`                                   | -               |
| maxZoom      | 最大缩放比例                                                              | `number`                                   | `3`             |
| getContainer | 指定挂载的 HTML 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| visible      | 是否显示                                                                  | `boolean`                                  | `false`         |
| onClose      | 关闭时触发                                                                | `boolean`                                  | -               |
| afterClose   | 完全关闭后触发                                                            | `() => void`                               | -               |

### ImageViewer.Multi

在 `ImageViewer` 的基础上，增加了以下属性：

| 属性          | 说明                | 类型                      | 默认值 |
| ------------- | ------------------- | ------------------------- | ------ |
| images        | 图片资源的 url 列表 | `string[]`             | `0`    |
| onIndexChange | 切换图片时触发      | `(index: number) => void` | -      |

同时，去掉了 `image` 属性。

### 指令式

相比于上文中组件式的使用方式，指令式更加方便也更加常用，在大多数情况下，都推荐使用这种方式：

暂不支持

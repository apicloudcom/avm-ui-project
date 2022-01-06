# FloatingPanel 浮动面板

<code src="./demos/index.tsx"></code>

### 属性

| 属性    | 说明                          | 类型       | 默认值 |
| ------- | ----------------------------- | ---------- | ------ |
| anchors | 可拖拽至哪些高度，单位为 `px` | `number[]` | -      |
| background | 背景颜色                 | `string`  | #fff      | 
| height | 面板总高度，单位为 `px` | `number` | 300      |

[comment]: <> (### Ref)

[comment]: <> (FloatingPanel 的 ref 上提供了 `setHeight` 方法，你可以通过它来指令式地控制 `FloatingPanel` 的高度：)

[comment]: <> (```ts)

[comment]: <> (type FloatingPanelRef = {)

[comment]: <> (  setHeight: &#40;)

[comment]: <> (    height: number,)

[comment]: <> (    options?: {)

[comment]: <> (      immediate?: boolean // 是否跳过动画)

[comment]: <> (    })

[comment]: <> (  &#41; => void)

[comment]: <> (})

[comment]: <> (```)

[comment]: <> (```jsx)

[comment]: <> (<FloatingPanel ref={ref}>...</FloatingPanel>)

[comment]: <> (ref.current.setHeight&#40;100&#41;)

[comment]: <> (```)

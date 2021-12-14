# Grid 栅格

<code src="./demos/index.tsx"></code>

## Grid

### 属性

| 属性    | 说明           | 类型                                                       | 默认值 |
| ------- | -------------- | ---------------------------------------------------------- | ------ |
| columns | 列数           | `number`                                                   | -      |
| gap     | 格子之间的间距 | `number \| string \| [number \| string, number \| string]` | `0`    |
| gapVertical   | 垂直方向的间距大小 | `number \| string \| [number \| string, number \| string]`        |`0` | 
| gapHorizontal | 水平方向的间距大小 | `number \| string \| [number \| string, number \| string]`       |`0` | -        |

## Grid.Item

### 属性

| 属性    | 说明     | 类型                                                            | 默认值 |
| ------- | -------- | --------------------------------------------------------------- | ------ |
| span    | 跨度     | `number`                                                        | `1`    |
| onClick | 点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -      |

## FAQ

### Grid 组件的兼容性说明

Grid 组件依赖了 CSS Grid 特性，所以兼容性标准是 iOS Safari >= 10.3 和 Chrome >= 57。

由于avm中暂时不支持 CSS Grid特性，所以暂时在avm中不能使用

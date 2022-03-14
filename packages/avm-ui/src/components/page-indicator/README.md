# PageIndicator 页码指示器

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性      | 说明                      | 类型                         | 默认值         |
| --------- | ------------------------- | ---------------------------- | -------------- |
| total     | 总页数                    | `number`                     | -              |
| current   | 当前页（从 `0` 开始计数） | `number`                     | -              |
| color     | 颜色                      | `primary` `white`       | `primary`    |
| direction | 方向，默认是水平方向      | `horizontal`  `vertical` | `horizontal` |
| dotColor                | 非当前页的颜色  | `-`          | `#ddd`       |
| activeDotColor         | 当前页的颜色   | `-`            | `#9AC200` |
| dotSize                | 非当前页的大小 | `-`            | `6px`                      |
| activeDotSize          | 当前页的大小  | `-`             | `6px`                     |
| dotBorderRadius        | 非当前页的圆角大小 | `-`        | `3px`                      |
| activeDotBorderRadius | 当前页的圆角大小   | `-`        | `3px` |
| dotSpacing              | 页码指示器小圆点之间的间距 | `-` | `8px`                      |

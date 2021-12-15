# InfiniteScroll 无限滚动

当 `hasMore` 属性为 `true` 时，用户页面滚动到底部 `threshold` (默认为 250px)时无限滚动组件会调用定义的 `loadMore` 函数。

<code src="./demos/index.tsx"></code>

### 属性

| 属性      | 说明                                       | 类型                  | 默认值 |
| --------- | ------------------------------------------ | --------------------- | ------ |
| loadMore  | 加载更多的回调函数                         | `() => Promise<void>` | -      |
| hasMore   | 是否还有更多内容                           | `boolean`             | -      |
| threshold | 触发加载事件的滚动触底距离阈值，单位为像素 | `number`              | `250`  |
| hasMoreText |加载中文字提示 | `string`              | `加载中`  |
| notHasMoreText |没有更多数据时下方文字提示 | `string`              | `没有更多了`  |

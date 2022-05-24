const classPrefix = `adm-infinite-scroll`
class InfiniteScrollContent extends Component {
  render = props => {
    return (
      <view className={`${classPrefix}-tip`}>
        {props.hasMore ? (
          <view>
            <span className={`${classPrefix}-tip-text`}>{props.hasMoreText || '上拉立即刷新'}</span>
            {/* <Loading /> */}
          </view>
        ) : (
          <span className={`${classPrefix}-tip-text`}>{props.notHasMoreText || '没有更多了'}</span>
        )}
      </view>
    )
  }
}

export class InfiniteScroll extends Component {


  render = props => {
    props = Object.assign({}, { threshold: 250 }, props)

    const doLoadMore = () => {
      props.hasMore && props.loadMore()
    }

    return (
      <scroll-view scroll-y show-scrollbar={false} bounces className={classPrefix} lower-threshold={props.threshold} onscrolltolower={doLoadMore}>
        {props.children}
        <InfiniteScrollContent hasMore={props.hasMore} {...props}/>
      </scroll-view>
    )
  }
  css = () => {
    return `
      .adm-infinite-scroll {
        width: 100%;
        height: 100%;
        display: flex;
      }
      .adm-infinite-scroll-tip {
        width: 100%;
        text-align: center;
        background: #f2f2f2;
      }
      .adm-infinite-scroll-tip-text {
        width: 100%;
        text-align: center;
        color: #999;
        font-size: 12px;
        line-height: 14px;
        padding: 6px 0;
      }
    `
  }
}

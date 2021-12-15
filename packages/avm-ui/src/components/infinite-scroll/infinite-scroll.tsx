import { mergeProps } from '../../utils/with-default-props'
// import Loading from '../loading'

const classPrefix = `adm-infinite-scroll`

class InfiniteScrollContent extends Component {
  render = props => {
    return (
      <view className={`${classPrefix}-tip`}>
        {props.hasMore ? (
          <view>
            <span className={`${classPrefix}-tip-text`}>{props.hasMoreText || '加载中'}</span>
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
  install = () => {
    console.log('InfiniteScroll!')
  }

  render = props => {
    props = mergeProps({ threshold: 250 }, props)

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
}

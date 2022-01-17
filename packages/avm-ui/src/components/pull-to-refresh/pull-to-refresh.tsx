import {mergeProps} from '../../utils/with-default-props'
import { sleep } from '../../utils/sleep'

const classPrefix = `adm-pull-to-refresh`

export type PullStatus = 'pulling' | 'canRelease' | 'refreshing' | 'complete'

export type PullToRefreshProps = {
  onRefresh?: () => Promise<any>
  pullingText?: HTMLElement
  canReleaseText?: HTMLElement
  refreshingText?: HTMLElement
  completeText?: HTMLElement
  completeDelay?: number
  headHeight?: number
  threshold?: number
  renderText?: (status: PullStatus) => HTMLElement
}

export const defaultProps = {
  pullingText: '下拉刷新',
  canReleaseText: '释放立即刷新',
  refreshingText: '加载中……',
  completeText: '刷新成功',
  completeDelay: 500,
  onRefresh: () => {
  },
}

export class PullToRefresh extends Component {
  data = {
    moveY: 0,
    startY: 0,
    status: 'pulling'
  }

  async doRefresh() {
    const props = mergeProps(defaultProps, this.props)
    this.data.status = 'refreshing'
    try {
      await props.onRefresh()
      this.data.status = 'complete'
    } catch (e) {
      this.data.status = 'pulling'
      throw e
    }
    if (props.completeDelay > 0) {
      await sleep(props.completeDelay)
    }
    this.data.moveY = 0
  }

  touchMove(e) {
    const threshold = this.props.threshold ?? 60
    if (this.data.moveY > threshold) {
      this.data.status = 'canRelease'
      this.data.moveY = this.data.moveY + (e.touches[0].clientY - this.data.startY) * 0.08
    } else {
      this.data.moveY = this.data.moveY + e.touches[0].clientY - this.data.startY
    }
    this.data.startY = e.touches[0].clientY
  }
  
  touchEnd() {
    const headHeight = this.props.headHeight ?? 40
    if (this.data.moveY > headHeight) {
      this.data.moveY = headHeight
      this.doRefresh()
    }
  }

  render = (p) => {
    const props = mergeProps(defaultProps, p)
    const headHeight = props.headHeight ?? 40
    const renderStatusText = () => {
      if (props.renderText) {
        return props.renderText?.(this.data.status)
      }

      if (this.data.status === 'pulling') return props.pullingText
      if (this.data.status === 'canRelease') return props.canReleaseText
      if (this.data.status === 'refreshing') return props.refreshingText
      if (this.data.status === 'complete') return props.completeText
    }
    return (
      <div
        className={classPrefix}
        ontouchstart={e => {
          this.data.startY = e.touches[0].clientY
        }}
        ontouchmove={this.touchMove.bind(this)}
        ontouchend={this.touchEnd.bind(this)}
      >
        <div
          className={`${classPrefix}-head`}
          style={{height: this.data.moveY + 'px'}}>
          <div
            className={`${classPrefix}-head-content`}
            style={{height: headHeight + 'px'}}
          >
            {renderStatusText()}
          </div>
        </div>
        <div className={`${classPrefix}-content`}>{props.children}</div>
      </div>
    )
  }
}

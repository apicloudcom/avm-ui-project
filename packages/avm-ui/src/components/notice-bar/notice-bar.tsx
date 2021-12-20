import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { formatLabel } from '../../utils/format-label'

const classPrefix = `adm-notice-bar`

export type NoticeBarProps = {
  /** 通告栏的类型 */
  color?: 'default' | 'alert' | 'error' | 'info'
  /** 公告内容 */
  content: HTMLElement
  /** 是否可关闭 */
  closeable?: boolean
  /** 关闭时的回调 */
  onClose?: () => void
  /** 额外操作区域，显示在关闭按钮左侧 */
  extra?: HTMLElement
  /** 左侧广播图标 */
  icon?: HTMLElement
} & NativeProps<'--background-color' | '--border-color' | '--text-color'>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
}

export class NoticeBar extends Component {
  install = () => {
    console.log('notice-bar!')
  }

  data = {
    visible: true
  }

  setVisible = status => {
    this.data.visible = status
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    if (!this.data.visible) return null

    return <div className={classNames(classPrefix, `${classPrefix}-${props.color}`)}>
      {formatLabel('icon' in props ? props.icon : '默认icon', classNames(`${classPrefix}-left`, `${classPrefix}-left-${props.color}`))}
      <view className={`${classPrefix}-content`}>
        {formatLabel(props.content, classNames(`${classPrefix}-content-inner`, `${classPrefix}-content-inner-${props.color}`))}
      </view>
      {(props.closeable || props.extra) && (
        <view className={`${classPrefix}-right`}>
          {props.extra && formatLabel(props.extra, `${classPrefix}-right-${props.color}`)}
          {props.closeable && (
            <text onClick={() => {
              this.setVisible(false)
              props.onClose?.()
            }}>X</text>
          )}
        </view>
      )}
  </div>
  }
}

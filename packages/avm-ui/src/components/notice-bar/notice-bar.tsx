import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { formatLabel } from '../../utils/format-label'

import defaultIcon from './img/default.png'
import alertIcon from './img/alert.png'
import infoIcon from './img/info.png'

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

const colorsObj = {
  default: {
    bgColor: '#b2b2b2',
    borderColor: '#a0a0a0',
    textColor: '#fff'
  },
  alert: {
    bgColor: '#fff9ed',
    borderColor: '#fff3e9',
    textColor: '#ff6010'
  },
  error: {
    bgColor: '#ff3b30',
    borderColor: '#d9281e',
    textColor: '#fff'
  },
  info: {
    bgColor: '#d0e4ff',
    borderColor: '#bcd8ff',
    textColor: '#1677ff'
  }
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

    const curTheme = colorsObj[props.color];

    const bgColor = props.bgColor || curTheme.bgColor
    const textColor = props.textColor || curTheme.textColor
    const borderColor = props.borderColor || curTheme.borderColor

    const leftCls = classNames(`${classPrefix}-left`, `${classPrefix}-left-${props.color}`)

    const leftIcon = {
      default: defaultIcon,
      error: defaultIcon,
      info: infoIcon,
      alert: alertIcon
    }

    const leftEle = 'icon' in props
      ? props.icon
      : (<img src={!props.bgColor ? leftIcon[props.color] : defaultIcon} alt="icon"/>)

    const contentInnerCls = classNames(`${classPrefix}-content-inner`, `${classPrefix}-content-inner-${props.color}`)

    const textStyle = {
      color: textColor
    }

    const boxStyle = {
      background: bgColor,
      borderColor: borderColor
    }

    return (
      <div className={classNames(classPrefix, `${classPrefix}-${props.color}`)} style={boxStyle}>
        {/* left */}
        {formatLabel(leftEle, leftCls, textStyle)}

        {/* content */}
        <view className={`${classPrefix}-content`}>
          {formatLabel(props.content, contentInnerCls, textStyle)}
        </view>

        {/* right */}
        {(props.closeable || props.extra) && (
          <view className={`${classPrefix}-right`}>
            {props.extra && formatLabel(props.extra, `${classPrefix}-right-${props.color}`, textStyle)}
            {props.closeable && (
              <text onClick={() => {
                this.setVisible(false)
                props.onClose?.()
              }}
              style={textStyle}>X</text>
            )}
          </view>
        )}
      </div>
    )
  }
}

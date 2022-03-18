import classNames from '../../utils/classnames'
import { NativeProps } from '../../utils/native-props'
import { formatLabel } from '../../utils/format-label'

// import defaultIcon from './img/default.png'
// import alertIcon from './img/alert.png'
// import infoIcon from './img/info.png'

import {SoundOutline, CloseOutline} from '../icon/icon'

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
  size: 'default',
  isShowLeftIcon: false
}

const colorsObj = {
  default: {
    bgColor: '#f4f8e5',
    borderColor: '#f4f8e5',
    textColor: '#9AC200'
  },
  alert: {
    bgColor: '#FFFBE8',
    borderColor: '#FFFBE8',
    textColor: '#FA6400'
  },
  error: {
    bgColor: '#FBE7E7',
    borderColor: '#FBE7E7',
    textColor: '#E02020'
  },
  info: {
    bgColor: '#E8EFFA',
    borderColor: '#E8EFFA',
    textColor: '#1677FF'
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
    props = Object.assign({}, defaultProps, props)

    if (!this.data.visible) return null

    const curTheme = colorsObj[props.color];

    const bgColor = props.bgColor || curTheme.bgColor
    const textColor = props.textColor || curTheme.textColor
    const borderColor = props.borderColor || curTheme.borderColor

    const leftCls = classNames(`${classPrefix}-left`, `${classPrefix}-left-${props.color}`, `${classPrefix}-left-${props.size}`)

    const leftIcon = {
      default: '#9AC200',
      error: '#E02020',
      info: '#1677FF',
      alert: '#FA6400'
    }

    // const leftEle = 'icon' in props
    //   ? props.icon
    //   : (<img src={!props.bgColor ? leftIcon[props.color] : defaultIcon} alt="icon"/>)

    const leftEle = 'icon' in props
      ? props.icon
      : (<SoundOutline {...{color: leftIcon[props.color]}}/>)

    const contentInnerCls = classNames(`${classPrefix}-content-inner`, `${classPrefix}-content-inner-${props.size}`, `${classPrefix}-content-inner-${props.color}`)

    const textStyle = {
      color: textColor,
      paddingRight: '4px'
    }

    const boxStyle = {
      background: bgColor,
      borderColor: borderColor
    }

    return (
      <div className={classNames(classPrefix, `${classPrefix}-${props.color}`, `${classPrefix}-${props.size}`)} style={boxStyle}>
        {/* left */}
        {props.isShowLeftIcon && formatLabel(leftEle, leftCls, textStyle)}

        {/* content */}
        <view className={`${classPrefix}-content`}>
          {formatLabel(props.content, contentInnerCls, textStyle)}
        </view>

        {/* right */}
        {(props.closeable || props.extra) && (
          <view className={`${classPrefix}-right`}>
            {props.extra && formatLabel(props.extra, `${classPrefix}-right-${props.color} ${classPrefix}-right-${props.size}`, textStyle)}
            {props.closeable && (
              <view onClick={() => {
                this.setVisible(false)
                props.onClose?.()
              }}
              style={textStyle}><CloseOutline/></view>
            )}
          </view>
        )}
      </div>
    )
  }

  css = () => {
    return `
    .adm-notice-bar {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
    }
    .adm-notice-bar-default {
      height: 40px;
      line-height: 40px;
    }
    .adm-notice-bar-small {
      height: 32px;
      line-height: 32px;
    }
    .adm-notice-bar-left {
      flex-shrink: 0;
      margin-right: 8px;
    }
    .adm-notice-bar-left-default {
      font-size: 14px;
    }
    .adm-notice-bar-left-small {
      font-size: 13px;
    }
    .adm-notice-bar-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-notice-bar-content-inner {
      width: 100%;
      transition-timing-function: linear;
      position: absolute;
      padding: 0 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .adm-notice-bar-content-inner-default {
      font-size: 14px;
    }
    .adm-notice-bar-content-inner-small {
      font-size: 13px;
    }
    .adm-notice-bar-right {
      flex-shrink: 0;
      margin-left: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-notice-bar-right-default {
      font-size: 14px;
    }
    .adm-notice-bar-right-small {
      font-size: 13px;
    }
    `
  }
}

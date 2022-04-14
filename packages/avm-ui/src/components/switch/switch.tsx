import classNames from '../../utils/classnames'
import {formatLabel} from '../../utils/format-label'
// import SpinIcon from './spin.png'

import Icon from "../icon";

const classPrefix = `adm-switch`

const formatPx = (str) => {
  return Number(str.replace('px', ''))
}

const defaultProps = {
  defaultChecked: false,
  checkedColor: '#9AC200',
  width: '44px',
  height: '26px',
  borderWidth: '2px'
}

export class Switch extends Component {
  install = () => {
    console.log('Switch!');
    this.props = Object.assign({}, defaultProps, this.props)
  }

  data = {
    changing: false,
    checked: this.props.checked || this.props.defaultChecked
  }

  setChanging = state => {
    this.data.changing = state
  }

  setChecked = check => {
    this.data.checked = check
    this.props.handleChange && this.props.handleChange(this.data.checked)
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)

    const {checkedColor, width, height, borderWidth} = props

    const disabled = props.disabled || props.loading || false


    const onClick = () => {
      if (disabled || props.loading || this.data.changing) {
        return
      }
      this.setChanging(true)
      if (props.beforeChange) {
        try {
          const nextChecked = !this.data.checked
          props.beforeChange(nextChecked)
          setTimeout(() => {
            this.setChecked(nextChecked)
            this.setChanging(false)
          }, 500)
        } catch (e) {
          this.setChanging(false)
          throw e
        }
      } else {
        this.setChecked(!this.data.checked)
        this.setChanging(false)
      }
    }

    const checkboxStyle = {
      width,
      height,
      lineHeight: height,
      background: this.data.checked ? checkedColor : '#e8e8e8'
    }

    const handleSize = `${formatPx(props.height) - (formatPx(borderWidth) * 2)}px`
    const handleStyle = {
      width: handleSize,
      height: handleSize,
      borderRadius: handleSize,
      top: borderWidth,
      left: this.data.checked ? `${formatPx(width) - formatPx(handleSize)}px` : borderWidth
    }

    const marginSize = `${formatPx(height) - formatPx(borderWidth) + 5}px`
    const innerStyle = {
      lineHeight: height,
      margin: this.data.checked ? `0 ${marginSize} 0 10px` : `0 10px 0 ${marginSize}`
    }

    const innerCls = classNames(`${classPrefix}-inner`, {
      [`${classPrefix}-checked-inner`]: this.data.checked
    })

    return (
      <div
        onClick={onClick}
        className={classNames(classPrefix, {
          [`${classPrefix}-checked`]: this.data.checked,
          [`${classPrefix}-disabled`]: disabled || this.data.changing,
        })}
      >
        <div
          className={classNames(`${classPrefix}-checkbox`, {
            [`${classPrefix}-checked-checkbox`]: this.data.checked
          })}
          style={checkboxStyle}
        >
          <div
            className={classNames(`${classPrefix}-handle`, {
              [`${classPrefix}-checked-handle`]: this.data.checked
            })}
            style={handleStyle}>
            {(props.loading || this.data.changing) && (
              // <img
              //   src={SpinIcon}
              //   className={`${classPrefix}-icon`}
              //   alt='switch-handle'
              // />
              <Icon code={60045} className={`${classPrefix}-icon`} color="#9AC200"/>
            )}
          </div>
          {formatLabel(this.data.checked ? props.checkedText : props.uncheckedText, innerCls, innerStyle)}
        </div>
      </div>
    )
  }
  css = () => {
    return `
    @keyframes loading-rotate {
      100% {
        transform: translateX(10);
      }
    }
    .adm-switch {
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      align-self: center;
      cursor: pointer;
      opacity: 1;
    }
    .adm-switch input {
      display: none;
    }
    .adm-switch-checkbox {
      min-width: 45px;
      box-sizing: border-box;
      border-radius: 31px;
      z-index: 0;
      overflow: hidden;
    }
    .adm-switch-handle {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fff;
      position: absolute;
      z-index: 0;
      box-shadow:
        0 0 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 11.5px 0 rgba(0, 0, 0, 0.08),
        -1px 2px 2px 0 rgba(0, 0, 0, 0.1);
      transition: left 200ms;
    }
    .adm-switch-inner {
      position: relative;
      z-index: 1;
      color: #999;
      transition: margin 200ms;
    }
    .adm-switch-checked-inner {
      color: #FFF;
    }
    .adm-switch-disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
    .adm-switch-icon {
      width: 14px;
      height: 14px;
      transition: loading-rotate 1s linear infinite;
    }
    `
  }
}

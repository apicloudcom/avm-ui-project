import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { formatLabel } from '../../utils/format-label'
import SpinIcon from './spin.png'

const classPrefix = `adm-switch`

const formatPx = (str) => {
  return Number(str.replace('px', ''))
}

const defaultProps = {
  defaultChecked: false,
  checkedColor: '#1677ff',
  width: '50px',
  height: '30px',
  borderWidth: '2px'
}

export class Switch extends Component {
  install = () => {
    console.log('Switch!');
    this.props = mergeProps(defaultProps, this.props)
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
    this.props.onChange && this.props.onChange(this.data.checked)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

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
      background: this.data.checked ? checkedColor : '#e5e5e5'
    }

    const handleSize = `${formatPx(props.height)-(formatPx(borderWidth) * 2)}px`
    const handleStyle = {
      width: handleSize,
      height: handleSize,
      borderRadius: handleSize,
      top: borderWidth,
      left: this.data.checked ? `${formatPx(width)-formatPx(handleSize)}px` : borderWidth
    }

    const marginSize =`${formatPx(height) - formatPx(borderWidth) + 5}px`
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
              <img
                src={SpinIcon}
                className={`${classPrefix}-icon`}
                alt='switch-handle'
              />
            )}
          </div>
          {formatLabel(this.data.checked ? props.checkedText : props.uncheckedText, innerCls, innerStyle)}
        </div>
      </div>
    )
  }
}

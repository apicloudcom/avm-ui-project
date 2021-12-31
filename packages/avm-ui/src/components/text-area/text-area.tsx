import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-text-area'

const defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: '',
  fontSize: '17px',
  color: '#333',
  placeholderColor: '#ccc',
  disabledColor: '#999'
}

export class TextArea extends Component {
  install = () => {
    console.log('TextArea!')
  }

  data = {
    value: this.props.value || this.props.defaultValue
  }

  setValue = val => {
    this.data.value = val
  }

  render = props => {
    this.props = mergeProps(defaultProps, props)

    const {
      className,
      style,
      rows,
      autoSize,
      showCount,
      disabled,
      readOnly,
      fontSize,
      color,
      placeholder,
      autoComplete='on',
      placeholderColor,
      disabledColor,
      maxLength
    } = this.props

    // 字数说明
    let count
    if (typeof showCount === 'function') {
      count = showCount(this.data.value.length, maxLength)
    } else if (showCount) {
      count = (
        <span className={`${classPrefix}-count`}>
          {maxLength === undefined
            ? this.data.value.length
            : this.data.value.length + '/' + maxLength}
        </span>
      )
    }

    const textareaStyle = {
      fontSize,
      color: !disabled ? color : disabledColor,
      height: autoSize ? 'auto' : `${26 * rows}px`,
      lineHeight: '26px'
    }

    const textareaCls = classNames(classPrefix, {
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-readonly`]: readOnly
    })

    return (
      <div
        className={classNames(`${classPrefix}-wrapper`, className)}
        style={style}
      >
        <textarea
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={!!(disabled || readOnly)}
          className={textareaCls}
          style={textareaStyle}
          maxlength={maxLength}
          value={this.data.value}
          placeholder-style={`color: ${placeholderColor}`}
          auto-height={autoSize}
          onInput={e => {
            this.setValue(e.detail.value)
          }}
          onFocus={e => {
            props.onFocus?.(e)
          }}
          onBlur={e => {
            props.onChange && props.onChange(e.detail.value)
            props.onBlur?.(e)
          }}
        />
        {count}
      </div>
    )
  }
}

import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-radio`

const defaultProps = {
  defaultChecked: false,
}

export class Radio extends Component {
  install = () => {
    console.log('Radio!')
  }

  data = {
    checked: this.props.checked || this.props.defaultChecked
  }

  setChecked = check => {
    this.data.checked = check

    this.props.onChange && this.props.onChange(this.props.value)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const groupContext = props.RadioGroupContext

    let disabled = props.disabled

    const { value } = props
    if (groupContext && value !== undefined) {
      this.data.checked = groupContext.value.includes(value)
      this.setChecked = (checked: boolean) => {
        if (checked) {
          groupContext.check(value)
        } else {
          groupContext.uncheck(value)
        }
        props.onChange?.(checked)
      }
      disabled = disabled || groupContext.disabled
    }

    const renderIcon = () => {
      const iconCls = classNames(`${classPrefix}-icon`, {
        [`${classPrefix}-checked-icon`]: this.data.checked,
        [`${classPrefix}-disabled-icon`]: disabled
      })

      const radioSizeStyle = {}
      const iconSize = props.iconSize || '22px'
      radioSizeStyle['width'] = iconSize
      radioSizeStyle['height'] = iconSize
      radioSizeStyle['borderRadius'] = iconSize

      if (props.icon) {
        return (
          <div style={{fontSize: iconSize}}>
            {props.icon(this.data.checked)}
          </div>
        )
      }
      return (
        <div className={iconCls} style={radioSizeStyle}>
          {this.data.checked && <text className={classNames(`${classPrefix}-icon-checked`, {
            [`${classPrefix}-icon-checked-disabled`]: disabled
          })}>√</text>}
        </div>
      )
    }

    const contentCls = classNames(`${classPrefix}-content`, {
      [`${classPrefix}-disabled-content`]: disabled
    })

    const contentStyles = {}
    contentStyles['fontSize'] = props.fontSize || '17px'
    contentStyles['paddingLeft'] = props.gap || '8px'

    return (
      <label
        className={classNames(classPrefix, props.className, {
          [`${classPrefix}-checked`]: this.data.checked,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-block`]: props.block,
        })}
        style={props.style}>
        <radio
          className={`${classPrefix}-input`}
          type='radio'
          checked={this.data.checked}
          onChange={e => {
            !disabled && this.setChecked(e.detail.value)
          }}
          disabled={disabled}
          id={props.id}
        />
        {renderIcon()}
        {props.children && (
          formatLabel(props.children, contentCls, contentStyles)
        )}
      </label>
    )
  }
}


import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-checkbox`

import checkIcon from './img/check.png'
import disabledcheckIcon from './img/disabledcheckIcon.png'

export type CheckboxValue = string | number

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: CheckboxValue
  indeterminate?: boolean
  block?: boolean
  id?: string
  icon?: any
}

const defaultProps = {
  defaultChecked: false,
  indeterminate: false,
}

export class Checkbox extends Component {
  install = () => {
    console.log('Checkbox!')
  }

  data = {
    checked: false,
    hasChecked: false
  }

  setChecked = (props) => {
    this.data.hasChecked = true
    this.data.checked = !this.data.checked
    if (this.data.checked) {
      props.check?.(props.value)
    } else {
      props.uncheck?.(props.value)
    }
    props.onChange?.(this.data.checked)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const {
      defaultChecked,
      defaultValue,
      disabled,
      icon,
      indeterminate,
      block,
      id,
      value} = props
    
    const usageWarning = () => {
      if (props.checked !== undefined) {
        const message = 'When used with `CheckboxGroup`, the `checked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.'
        console.warn(`[antd-mobile: Checkbox] ${message}`)
      }
      if (props.defaultChecked !== undefined) {
        const message = 'When used with `CheckboxGroup`, the `defaultChecked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.'
        console.warn(`[antd-mobile: Checkbox] ${message}`)
      }
    }

    if (props.checkedList !== undefined && value === undefined) {
      usageWarning()
    }

    // 设置默认值
    if (!this.data.hasChecked) {
      if (defaultChecked) {
        this.data.checked = defaultChecked
      }
      if (props.checked) {
        this.data.checked = props.checked
      }
      if (defaultValue &&　defaultValue.length) {
        this.data.checked = defaultValue.includes(value);
      }
    }

    const renderIcon = () => {
      if (icon) {
        return (
          <div className={`${classPrefix}-custom-icon`}>
            {icon(this.data.checked, indeterminate)}
          </div>
        )
      }

      return (
        <div className={classNames(`${classPrefix}-icon`, {
          [`${classPrefix}-checked-icon`]: this.data.checked,
          [`${classPrefix}-indeterminate-icon`]: indeterminate,
          [`${classPrefix}-disabled-icon`]: disabled,
          [`${classPrefix}-block-icon`]: block,
          [`${classPrefix}-disabled-indeterminate-icon`]: disabled && indeterminate,
          [`${classPrefix}-disabled-checked-icon`]: disabled && this.data.checked
        })}>
          {indeterminate ? (
            <div className={`${classPrefix}-indeterminate-checked`} />
          ) : (
            this.data.checked && <img src={!disabled ? checkIcon : disabledcheckIcon} alt="check" className={`${classPrefix}-checked-icon`}/>
          )}
        </div>
      )
    }
    return (
      <label
        className={classNames(classPrefix, {
          [`${classPrefix}-checked`]: this.data.checked,
          [`${classPrefix}-indeterminate`]: indeterminate,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-disabled-indeterminate`]: disabled && indeterminate,
          [`${classPrefix}-disabled-checked`]: disabled && this.data.checked,
          [`${classPrefix}-block`]: block,
        })}
      >
        <input
          className={`${classPrefix}-input`}
          type='checkbox'
          checked={this.data.checked}
          onChange={() => {
            this.setChecked(props)
          }}
          onClick={e => {
            e.stopPropagation()
          }}
          disabled={disabled}
          id={id}
        />
        {renderIcon()}
        {props.children && (
          <div className={classNames(`${classPrefix}-content`, {
            [`${classPrefix}-checked-content`]: this.data.checked,
            [`${classPrefix}-indeterminate-content`]: indeterminate,
            [`${classPrefix}-disabled-content`]: disabled,
            [`${classPrefix}-block-content`]: block,
          })}>{props.children}</div>
        )}
      </label>
    )
  }
}

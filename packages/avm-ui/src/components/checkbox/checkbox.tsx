
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { CheckIcon } from './check-icon'

const classPrefix = `adm-checkbox`

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
        <div className={`${classPrefix}-icon`}>
          {indeterminate ? (
            <div className={`${classPrefix}-indeterminate-checked`} />
          ) : (
            this.data.checked && <CheckIcon className={`${classPrefix}-icon-checked`} />
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
          [`${classPrefix}-block`]: block,
        })}
      >
        <input
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
          <div className={`${classPrefix}-content`}>{props.children}</div>
        )}
      </label>
    )
  }
}

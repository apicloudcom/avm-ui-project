
import { MyCheckbox } from './myCheckbox'

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
export class Checkbox extends Component {
  install = () => {
    console.log('Checkbox!')
  }

  data = {
    checked: !!(this.props.defaultChecked || this.props.checked || (this.props.defaultValue && this.props.defaultValue.includes(this.props.value))),
  }

  setChecked = val => {
    if (!!!this.props.indeterminate) {
      this.data.checked = val
      if (this.data.checked) {
        this.props.check?.(this.props.value)
      } else {
        this.props.uncheck?.(this.props.value)
      }
      this.props.onChange?.(this.data.checked)
    }
  }

  render = props => {
    const {
      disabled,
      block,
      icon,
      selectedIcon,
      value,
      id,
      iconSize,
      fontSize,
      gap,
      indeterminate,
      isLastEle=false,
      isGroup=false
    } = props
    

    return (
      <MyCheckbox
        indeterminate={indeterminate}
        isLastEle={isLastEle}
        isGroup={isGroup}
        icon={icon}
        selectedIcon={selectedIcon}
        checked={this.data.checked}
        value={value}
        onChange={checked => this.setChecked(checked)}
        disabled={disabled}
        id={id}
        iconSize={iconSize}
        fontSize={fontSize}
        gap={gap}
        block={block}
      >{props.children}</MyCheckbox>
    )
  }
  css = () => {
    return `
    .adm-checkbox {
      display: inline-flex;
      vertical-align: text-bottom;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }
    .adm-checkbox-icon {
      border-radius: 2px;
      border: 1px solid #ddd;
      color: #fff;
      font-size: 12px;
      background: #fff;
      text-align: center;
    }
    .adm-checkbox-icon-checked {
      background: #9AC200;
      border-color: #9AC200;
    }
    .adm-checkbox-icon-disabled {
      background: #f2f2f2;
    }
    .adm-checkbox-icon-disabled-checked {
      background: #ddd;
      color: #fefefe;
    }
    .adm-checkbox-icon-indeterminate {
      border-color: #9AC200;
      color: #9AC200;
    }
    .adm-checkbox-block {
      display: flex;
    }
    .adm-checkbox-content {
      flex: none;
    }
    .adm-checkbox-text {
      flex: 1;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .adm-checkbox-text-has-bottomborder {
      border-bottom: 1px solid #e8e8e8;
    }
    `
  }
}

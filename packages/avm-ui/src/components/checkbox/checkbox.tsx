
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
      indeterminate
    } = props
    

    return (
      <MyCheckbox
      indeterminate={indeterminate}
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
}

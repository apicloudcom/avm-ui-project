import { mergeProps } from '../../utils/with-default-props'
import { MyRadio } from './myRadio'

const defaultProps = {
  defaultChecked: false,
}

export class Radio extends Component {
  install = () => {
    console.log('Radio!')
  }

  data = {
    checked: this.props.checked || this.props.defaultChecked || false
  }

  setChecked = check => {
    this.data.checked = check
    this.props.onChange?.(this.props.value)
  }

  render = props => {
    this.props = mergeProps(defaultProps, props)

    const {
      RadioGroupContext,
      style,
      id,
      fontSize,
      gap,
      iconSize,
      value,
      onChange,
      icon,
      selectedIcon
    } = this.props;

    const groupContext = RadioGroupContext
    let disabled = this.props.disabled || (groupContext ? groupContext.disabled : false)

    if (groupContext && value !== undefined) {
      this.data.checked = groupContext.value.includes(value)
      this.setChecked = (checked: boolean) => {
        if (checked) {
          groupContext.check(value)
        } else {
          groupContext.uncheck(value)
        }
        onChange?.(checked)
      }
    }

    return (
      <MyRadio
        style={style}
        checked={this.data.checked}
        icon={icon}
        selectedIcon={selectedIcon}
        value={value}
        onChange={checked => this.setChecked(checked)}
        disabled={disabled}
        id={id}
        fontSize={fontSize}
        iconSize={iconSize}
        gap={gap}
      >{props.children}</MyRadio>
    )
  }
}

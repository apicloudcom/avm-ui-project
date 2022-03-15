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
    this.props = Object.assign({}, defaultProps, props)

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
  css = () => {
    return `
      .adm-radio {
        display: inline-flex;
        vertical-align: text-bottom;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
      }
      .adm-radio-content {
        flex: none;
      }
      .adm-radio-block {
        display: flex;
      }
      .adm-radio-icon {
        border-radius: 50%;
        border: 1px solid #ddd;
        align-items: center;
        justify-content: center;
      }
      .adm-radio-icon-inner {
        width: 70%;
        height: 70%;
        border-radius: 50%;
        background: #9AC200;
      }
      .adm-radio-icon-inner-disabled {
        background: #ddd;
      }
      .adm-radio-icon-checked {
        border-color: #9AC200;
      }
      .adm-radio-icon-disabled {
        background: #f2f2f2;
        border-color: #ddd;
      }
      .adm-radio-labeltext {
        color: #333;
      }
      .adm-radio-labeltext-disabled {
        color: #bbb;
      }
    `
  }
}

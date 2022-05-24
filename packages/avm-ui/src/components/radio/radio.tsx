import { MyRadio } from './myRadio'

const defaultProps = {
  defaultChecked: false,
}

export class Radio extends Component {
 

  data = {
    checked: this.props.checked || this.props.defaultChecked || false
  }

  setChecked = check => {
    this.data.checked = check
    this.props.radioChange?.(this.props.value)
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
      radioChange,
      icon,
      selectedIcon,
      description,
      isGroup,
      isLastEle,
      descIsOneLineShow=false, // 描述信息是否一行展示
      isTwoHeadArrange=false // 是否两头分布
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
        radioChange?.(checked)
      }
    }

    return (
      <MyRadio
        isGroup={isGroup}
        isLastEle={isLastEle}
        descIsOneLineShow={descIsOneLineShow}
        isTwoHeadArrange={isTwoHeadArrange}
        description={description}
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
      .adm-radio-two-headarrange {
        justify-content: space-between;
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
      .adm-radio-block {
        display: flex;
      }
      .adm-radio-content {
        flex: none;
      }
      .adm-radio-text {
        flex: 1;
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
      }
      .adm-radio-text-has-bottomborder {
        border-bottom: 1px solid #e8e8e8;
      }
      .adm-radio-text-content {
        flex: 1;
        flex-wrap: wrap;
      }
      .adm-radio-text-description {
        flex: 1;
        flex-wrap: wrap;
        font-size: 12px;
        color: #999;
        padding-top: 8px;
      }
      .adm-radio-text-disabled {
        color: #bbb;
      }
      .adm-radio-desc-onelineshow {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .adm-radio-desc-onelineshow-content {
        flex: 1;
      }
      .adm-radio-desc-onelineshow-desc {
        flex: none;
        padding-top: 0;
        font-size: 14px;
        max-width: 100px;
        text-align: right;
      }
    `
  }
}

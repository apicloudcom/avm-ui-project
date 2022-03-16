import classNames from '../../utils/classnames'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-radio`

export class MyRadio extends Component {

  data = {
    checked: this.props.checked || false
  }

  setChecked = () => {
    if(!this.data.checked) {
        this.data.checked = !this.data.checked
        this.props.onChange?.(this.data.checked)
    }
  }

  render = props => {
    const {
      fontSize='16px',
      gap='8px',
      iconSize='18px',
      disabled=false,
      block=false,
      icon,
      selectedIcon
    } = this.props;

    const boxCls = classNames(classPrefix, props.className, {
        [`${classPrefix}-checked`]: this.data.checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: block,
    })

    const iconStyles = {
        width: iconSize,
        height: iconSize
    }

    const childStyles = {
        fontSize,
        paddingLeft: gap
    }

    const labelTextCls = classNames(`${classPrefix}-labeltext`, {
      [`${classPrefix}-labeltext-disabled`]: disabled
    })

    const defaultIconsEle = (
      <view className={classNames(`${classPrefix}-icon`, {
        [`${classPrefix}-icon-checked`]: this.data.checked,
        [`${classPrefix}-icon-disabled`]: disabled,
      })} style={iconStyles}>
        {this.data.checked && <text className={classNames(`${classPrefix}-icon-inner`, {
          [`${classPrefix}-icon-inner-disabled`]: disabled
        })}></text>}
      </view>
    )

    const iconEles = icon && selectedIcon
      ? (this.data.checked ? selectedIcon : icon)
      : (defaultIconsEle)

    return (
      <label
        className={boxCls}
        style={{...props.style, marginBottom: gap}}
        onClick={() => {
            !disabled && this.setChecked()
        }}>
        {iconEles}
        {props.children && formatLabel(props.children, labelTextCls, childStyles)}
      </label>
    )
  }
}

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
      selectedIcon,
      isGroup,
      isLastEle,
      descIsOneLineShow,
      isTwoHeadArrange
    } = this.props;

    const boxCls = classNames(classPrefix, props.className, {
        [`${classPrefix}-checked`]: this.data.checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: block,
        [`${classPrefix}-two-headarrange`]: isTwoHeadArrange,
        [`${classPrefix}-text-has-bottomborder`]: isTwoHeadArrange,
    })

    const iconStyles = {
        width: iconSize,
        height: iconSize
    }

    const childStyles = {
        fontSize,
        paddingLeft: isTwoHeadArrange ? 0 : gap
    }

    const defaultEleIcons = (
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
      : (defaultEleIcons)

    const textCls = classNames(`${classPrefix}-text`, {
      [`${classPrefix}-text-disabled`]: disabled,
      [`${classPrefix}-text-has-bottomborder`]: !isTwoHeadArrange && isGroup && !isLastEle,
      [`${classPrefix}-desc-onelineshow`]: descIsOneLineShow
    })

    const labelContent = (
      <view className={textCls}>
        {formatLabel(props.children, classNames(`${classPrefix}-text-content`, {
          [`${classPrefix}-desc-onelineshow-content`]: descIsOneLineShow
        }), childStyles)}
        {props.description && <span className={classNames(`${classPrefix}-text-description`, {
          [`${classPrefix}-desc-onelineshow-desc`]: descIsOneLineShow
        })} style={{paddingLeft: isTwoHeadArrange ? 0 : gap}}>{props.description}</span>}
      </view>
    )

    

    return (
      <label
        className={boxCls}
        style={{...props.style}}
        onClick={() => {
            !disabled && this.setChecked()
        }}>
        {!isTwoHeadArrange && iconEles}
        {props.children && labelContent}
        {isTwoHeadArrange && iconEles}
      </label>
    )
  }
}

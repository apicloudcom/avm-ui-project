
import classNames from '../../utils/classnames'
import { formatLabel } from '../../utils/format-label'

const classPrefix = `adm-checkbox`


export class MyCheckbox extends Component {
  data = {
    checked: this.props.checked,
  }

  setChecked = () => {
    if (!this.props.indeterminate) {
      this.data.checked = !this.data.checked
      this.props.onChange?.(this.data.checked)
    }
  }

  render = props => {
    const {
        iconSize='17px',
        fontSize="16px",
        gap="8px",
        disabled=false,
        id,
        block=false,
        isLastEle,
        isGroup,
        descIsOneLineShow,
        isTwoHeadArrange
    } = this.props

    // 外层class
    const boxCls = classNames(classPrefix, {
        [`${classPrefix}-checked`]: this.data.checked && !disabled,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: block,
        [`${classPrefix}-two-headarrange`]: isTwoHeadArrange,
        [`${classPrefix}-text-has-bottomborder`]: isTwoHeadArrange,
    })
  
    const iconStyle = {
        width: iconSize,
        height: iconSize,
        lineHeight: iconSize
    }
  
    const childStyles = {
      fontSize,
      paddingLeft: isTwoHeadArrange ? 0 : gap,
    }

    const defaultEleIcons = (
      <text
        style={{...iconStyle, fontSize: `${Number(iconSize.replace('px', ''))-5}px`, marginLeft: (isTwoHeadArrange && descIsOneLineShow ? '8px' : 0)}}
        className={classNames(`${classPrefix}-icon`, {
          [`${classPrefix}-icon-checked`]: this.data.checked && !disabled,
          [`${classPrefix}-icon-indeterminate`]: props.indeterminate,
          [`${classPrefix}-icon-disabled`]: disabled,
          [`${classPrefix}-icon-disabled-checked`]: disabled && this.data.checked
        })}>{this.data.checked ? '√' : (props.indeterminate ? '-' : '')}</text>
    );

    const iconEles = props.icon && props.selectedIcon
      ? (this.data.checked ? props.selectedIcon : props.icon)
      : (defaultEleIcons)
    
    const textCls = classNames(`${classPrefix}-text`, {
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
            }}
            id={id}>
            {!isTwoHeadArrange && iconEles}
            {props.children && labelContent}
            {isTwoHeadArrange && iconEles}
        </label>
    )
  }
}
 

import classNames from 'classnames'
import { formatLabel } from '../../utils/format-label'

import selectedIcon from './img/selected.png'
import unselectedIcon from './img/unselected.png'
import indeterminateIcon from './img/indeterminate.png'

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
        iconSize='22px',
        fontSize="17px",
        gap="8px",
        disabled=false,
        id,
        block=false
    } = this.props
    

    const selectedIcons = props.indeterminate ? indeterminateIcon : (props.selectedIcon ?? selectedIcon)
    const unSelectedIcons = props.indeterminate ? indeterminateIcon : (props.icon ?? unselectedIcon)

    // 外层class
    const boxCls = classNames(classPrefix, {
        [`${classPrefix}-checked`]: this.data.checked && !disabled,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: block
    })
  
    const iconStyle = {
        width: iconSize,
        height: iconSize
    }
  
    const childStyles = {
    fontSize,
    paddingLeft: gap
    }
  
    return (
        <label
            className={boxCls}
            style={{...props.style, marginBottom: gap}}
            onClick={() => {
              !disabled && this.setChecked()
            }}
            id={id}>
            <img src={this.data.checked ? selectedIcons : unSelectedIcons} alt="check" style={iconStyle}/>
            {props.children && formatLabel(props.children, '', childStyles)}
        </label>
    )
  }
}

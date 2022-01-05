
import classNames from 'classnames'

import selectedIcon from './img/selected.png'
import unselectedIcon from './img/unselected.png'
import indeterminateIcon from './img/indeterminate.png'
import { formatLabel } from '../../utils/format-label'

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
    const {disabled=false, block=false} = props
    // 外层class
    const boxCls = classNames(classPrefix, {
      [`${classPrefix}-checked`]: this.data.checked && !disabled,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-block`]: block
    })

    const iconSize = props.iconSize || '22px'
    const iconSizeStyle = {}
    iconSizeStyle['width'] = iconSize
    iconSizeStyle['height'] = iconSize

    const selectedIcons = props.indeterminate
      ? indeterminateIcon
      : (props.selectedIcon ?? selectedIcon)
    const unSelectedIcons = props.indeterminate
      ? indeterminateIcon
      : (props.icon ?? unselectedIcon)
    
    const childStyles = {
      fontSize: props.fontSize || '17px',
      paddingLeft: props.gap || '8px'
    }

    return (
      <label
        className={boxCls}
        style={{...props.style, marginBottom: props.gap || '8px'}}>
        <checkbox
          style={iconSizeStyle}
          checked={this.data.checked}
          icon={unSelectedIcons}
          selectedIcon={selectedIcons}
          value={props.value}
          onChange={e => {
            !disabled && this.setChecked(e.detail.checked)
          }}
          disabled={disabled}
          id={props.id}/>
        {props.children && formatLabel(props.children, `${classPrefix}-content`, childStyles)}
      </label>
    )
  }
}

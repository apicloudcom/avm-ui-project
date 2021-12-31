import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import {formatLabel} from '../../utils/format-label'

import selectedIcon from './img/selected.png'
import unselectedIcon from './img/unselected.png'
import disabledSelectedIcon from './img/disabled_selected.png'
import disabledUnSelectedIcon from './img/disabled_unselected.png'

const classPrefix = `adm-radio`

const defaultProps = {
  defaultChecked: false,
}

export class Radio extends Component {
  install = () => {
    console.log('Radio!')
  }

  data = {
    checked: this.props.checked || this.props.defaultChecked
  }

  setChecked = check => {
    this.data.checked = check

    this.props.onChange && this.props.onChange(this.props.value)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const groupContext = props.RadioGroupContext

    let disabled = props.disabled || (groupContext ? groupContext.disabled : false)

    const { value } = props
    if (groupContext && value !== undefined) {
      this.data.checked = groupContext.value.includes(value)
      this.setChecked = (checked: boolean) => {
        if (checked) {
          groupContext.check(value)
        } else {
          groupContext.uncheck(value)
        }
        props.onChange?.(checked)
      }
    }

    const contentCls = classNames(`${classPrefix}-content`, {
      [`${classPrefix}-disabled-content`]: disabled
    })

    const contentStyles = {}
    contentStyles['fontSize'] = props.fontSize || '17px'
    contentStyles['paddingLeft'] = props.gap || '8px'

      const radioSizeStyle = {}
      const iconSize = props.iconSize || '22px'
      radioSizeStyle['width'] = iconSize
      radioSizeStyle['height'] = iconSize

    return (
      <label
        className={classNames(classPrefix, props.className, {
          [`${classPrefix}-checked`]: this.data.checked,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-block`]: props.block,
        })}
        style={{...props.style, marginBottom: props.gap || '8px'}}>
        <radio
          style={radioSizeStyle}
          checked={this.data.checked}
          icon={props.unselectedIcon ?? (disabled == true ? disabledUnSelectedIcon : unselectedIcon)}
          selectedIcon={props.selectedIcon ?? (disabled == true ? disabledSelectedIcon : selectedIcon)}
          value={props.value}
          onChange={e => {
            if (disabled == true) return;
            this.setChecked(e.detail.checked)
          }}
          disabled={disabled}
          id={props.id}
        />
        {props.children && (
          formatLabel(props.children, contentCls, contentStyles)
        )}
      </label>
    )
  }
}

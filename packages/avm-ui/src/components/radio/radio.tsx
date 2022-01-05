import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import {formatLabel} from '../../utils/format-label'

import defaultSelectIcon from './img/selected.png'
import defaultUnSelectIcon from './img/unselected.png'
// import disabledSelectedIcon from './img/disabled_selected.png'
// import disabledUnSelectedIcon from './img/disabled_unselected.png'

const classPrefix = `adm-radio`

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
    this.props.onChange && this.props.onChange(this.props.value)
  }

  render = props => {
    this.props = mergeProps(defaultProps, props)

    const {
      RadioGroupContext,
      fontSize='17px',
      gap='8px',
      iconSize='22px',
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
      <label
        className={classNames(classPrefix, props.className, {
          [`${classPrefix}-checked`]: this.data.checked,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-block`]: props.block,
        })}
        style={{...props.style, marginBottom: props.gap || '8px'}}>
        <radio
          style={{width: iconSize, height: iconSize}}
          checked={this.data.checked}
          icon={icon ?? defaultUnSelectIcon}
          selectedIcon={selectedIcon ?? defaultSelectIcon}
          value={this.props.value}
          onChange={e => {
            !disabled && this.setChecked(e.detail.checked)
          }}
          disabled={disabled}
          id={props.id}
        />
        {props.children && formatLabel(props.children, `${classPrefix}-content`, {fontSize, paddingLeft: gap})}
      </label>
    )
  }
}

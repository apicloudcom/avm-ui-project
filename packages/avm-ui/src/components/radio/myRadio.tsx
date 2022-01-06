import classNames from 'classnames'
import {formatLabel} from '../../utils/format-label'

import defaultSelectIcon from './img/selected.png'
import defaultUnSelectIcon from './img/unselected.png'

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
      fontSize='17px',
      gap='8px',
      iconSize='22px',
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

    const selectIcons = selectedIcon ?? defaultSelectIcon
    const unSelectIcons = icon ?? defaultUnSelectIcon

    const iconStyles = {
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
        }}>
        <img src={this.data.checked ?  selectIcons : unSelectIcons} alt="radio-icon" style={iconStyles}/>
        {props.children && formatLabel(props.children, '', childStyles)}
      </label>
    )
  }
}

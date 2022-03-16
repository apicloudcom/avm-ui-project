import List from '../list'
import {CheckListItem} from './check-list-item'


const defaultProps = {
  multiple: false,
  defaultValue: [],
  disabled: false,
  readOnly: false
}

export class CheckList extends Component {
  install = () => {
    console.log('CheckList!')
  }

  data = {
    checked: this.props.defaultValue || []
  }

  setChecked = val => {
    this.data.checked = val
  }

  check = (val, props) => {
    if (props.multiple) {
      this.setChecked([...this.data.checked, val])
    } else {
      this.setChecked([val])
    }
    props.onChange && props.onChange(this.data.checked)
  }

  uncheck = (val, props) => {
    this.setChecked(this.data.checked.filter(item => item !== val))
    props.onChange && props.onChange(this.data.checked)
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)
    const {list=[]} = props

    const childEle = list.map(item => {
      const disabled = item.disabled ?? props.disabled
      const readOnly = item.readOnly ?? props.readOnly
      return (
        <CheckListItem
          {...item}
          disabled={disabled}
          readOnly={readOnly}
          checked={this.data.checked}
          activeIcon={props.activeIcon}
          check={() => this.check(item.value, props)}
          uncheck={() => this.uncheck(item.value, props)}
        />
      )
    })

    return (
      <List mode={props.mode}>{childEle}</List>
    )
  }

  css = () => {
    return `
      .adm-check-list-item-extra {
        font-size: 16px;
        color: #9AC200;
      }
      .adm-check-list-item-readonly {
        cursor: unset;
      }
      .adm-check-list-item-active {
        color: #9AC200;
      }
    `
  }
}

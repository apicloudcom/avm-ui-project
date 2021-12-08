import { mergeProps } from '../../utils/with-default-props'
import {Checkbox} from './checkbox'

const defaultProps = {
  disabled: false,
  list: []
}

export class CheckboxGroup extends Component {
  install = () => {
    console.log('Group!')
  }

  data = {
    checkList: [],
    hasChecked: false
  }

  setCheckList = (val, props) => {
    this.data.checkList = val
    this.data.hasChecked = true
    props.onChange?.(val)
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const {defaultValue, list, disabled} = props

    if (defaultValue && !this.data.hasChecked) {
      this.data.checkList = defaultValue
    }
    const listEle = list.map(item => {
      return (
        <Checkbox
          {...item}
          defaultValue={defaultValue}
          checkedList={this.data.checkList}
          disabled={item.disabled || disabled}
          check={val => {
            this.setCheckList([...this.data.checkList, val], props)
          }}
          uncheck={val => {
            this.setCheckList(this.data.checkList.filter(v => v !== val), props)
          }}
        >{item.label}</Checkbox>
      )
    })
    return (
      <div>{listEle}</div>
    )
  }
}

import {Checkbox} from './checkbox'

const defaultProps = {
  disabled: false
}

export class CheckboxGroup extends Component {
  
  data = {
    checkList: [],
    hasChecked: false
  }

  setCheckList = (val, props) => {
    this.data.checkList = val
    this.data.hasChecked = true
    props.handleChange?.(val)
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)
    const {defaultValue, disabled} = props

    const list = props.children.map(item => {
      return {
        ...item.attributes,
        children: item.children
      }
    })

    if (defaultValue && !this.data.hasChecked) {
      this.data.checkList = defaultValue
    }
    const listEle = list.map((item, index) => {
      return (
        <Checkbox
          {...item}
          isGroup={true}
          isLastEle={index === (list.length - 1)}
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

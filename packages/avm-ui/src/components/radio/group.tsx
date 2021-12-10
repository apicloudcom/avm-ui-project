import { mergeProps } from '../../utils/with-default-props'
import { RadioValue } from '.'
// import { RadioGroupContext } from './group-context'
// import { usePropsValue } from '../../utils/use-props-value'
import {Radio} from './radio'

export interface RadioGroupProps {
  value?: RadioValue | null
  onChange?: (val: RadioValue) => void
  defaultValue?: RadioValue | null
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
  defaultValue: null,
}

export class Group extends Component {
  install = () => {
    console.log('radioGroup!')
  }

  data = {
    value: null,
    isInit: true
  }

  radioChange = (val, props) => {
    this.data.value = val;
    this.data.isInit = false;
    props.change?.(this.data.value)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    // 初始化
    this.data.isInit && (this.data.value = props.defaultValue)

    const groupContext = {
      checkVal: this.data.value,
      disabled: props.disabled
    }
    const itemList = props.children
    return (
      itemList.map(item => {
        return (
          <Radio
            {...item.attributes}
            checked={item.attributes.value === this.data.value}
            groupContext={groupContext}
            onChange={val => this.radioChange(val, props)}>
            {item.children}
          </Radio>
        )
      })
    )
  }
}

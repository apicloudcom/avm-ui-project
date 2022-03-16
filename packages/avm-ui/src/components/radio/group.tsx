import {Radio} from './radio'

const defaultProps = {
  disabled: false,
  defaultValue: null,
}

export class Group extends Component {
  install = () => {
    console.log('RadioGroup!')
  }

  data = {
    value: this.props.value || this.props.defaultValue
  }

  setValue = val => {
    this.data.value = val;
    this.props.onChange && this.props.onChange(val)
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)

    const RadioGroupContext = {
      value: this.data.value === null ? [] : [this.data.value],
      check: v => {
        this.setValue(v)
      },
      uncheck: () => {},
      disabled: props.disabled
    }

    const eles = props.children.map(ele => (
      <Radio {...ele.attributes} RadioGroupContext={RadioGroupContext}>{ele.children}</Radio>
    ))

    return (
      <div>{eles}</div>
    )
  }
}

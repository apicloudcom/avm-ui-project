import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { EyeInvisibleOutline, EyeOutline } from '../icon/icon'

const classPrefix = 'adm-desense-text'

export type DesenseTextProps = {
  desense?: boolean
  defaultDesense?: boolean
  text?: HTMLElement
  desenseText?: HTMLElement
  onChange?: (v: boolean) => void
} & NativeProps

const defaultProps = {
  defaultDesense: true,
}

export class DesenseText extends Component {
  install = () => {
    console.log('DesenseText!')
  }
  data = {
    desense: this.props.desence || this.props.defaultDesense
  }

  render = props => {
    this.props = mergeProps(defaultProps, props)
    const { text, desenseText } = props
    return (
      <div className={classPrefix}>
        <text>
          {this.data.desense ? desenseText : text}
        </text>
        <div 
          onClick={() => {
            this.data.desense = !this.data.desense
            props.onChange && props.onChange(this.data.desense)
          }}
          className={`${classPrefix}-icon-wrap`}
        >
          {this.data.desense ? < EyeInvisibleOutline /> : < EyeOutline />}
        </div>
      </div>
    )
  }
}


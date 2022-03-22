import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Icon from '../icon'

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
          {this.data.desense ? < Icon code={59963} /> : < Icon code={59964} />}
        </div>
      </div>
    )
  }
  css=()=>{
    return `
    .adm-desense-text {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
    }
    .adm-desense-text-icon-wrap {
      margin-left: 5px;
      padding: 0 0.1em;
      color: var(--adm-color-weak);
      width: 20px;
      height: 20px;
      background-color: #9ac200;
    }`
  }
}


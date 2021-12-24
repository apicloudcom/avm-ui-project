import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-circle`

export type ProgressCircleProps = {
  percent?: number
  children?: Element
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color'>

const defaultProps = {
  'size': '50px',
  'track-width': '50px',
  'track-color': '50px',
  'fill-color': '#1677ff',
  percent: 0,
  strokeColor: '#1677ff'
}

export class ProgressCircle extends Component {
  install = () => {
    console.log('progress-circle')
  }

  render = props => {debugger
    props = mergeProps(defaultProps, props)
    const {percent} = props
    // const style = {
    //   "--percent": percent, strokeColor: strokeColor
    // }
    const style = `--percent: ${percent}`
      
    return (
      <div className={`${classPrefix}`} style={style}>
        <div className={`${classPrefix}-content`}>
          <svg className={`${classPrefix}-svg`}>
            <circle className={`${classPrefix}-track`} fill='transparent' />
            <circle className={`${classPrefix}-fill`} fill='transparent' />
          </svg>
          <div className={`${classPrefix}-info`}>{props.children}</div>
        </div>
      </div>
    )
  }

 
}

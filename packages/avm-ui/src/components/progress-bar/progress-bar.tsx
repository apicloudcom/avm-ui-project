import { NativeProps } from '../../utils/native-props'
import { toCSSLength } from '../../utils/to-css-length'

const classPrefix = `adm-progress-bar`

export type ProgressBarProps = {
  percent?: number
} & NativeProps<'--fill-color'>

export class ProgressBar extends Component {

  install = () => {
    console.log('progress-bar!')
  }

  render = props => {

    const back = {}
    back['height'] = toCSSLength(props.strokeWidth) || '3px'
    back['borderRadius'] = toCSSLength(props.strokeWidth) ||'3px'


    const styles = {}
    styles['width'] = `${props.percent}%`
    styles['background'] = props.strokeColor || '#1677ff'
    styles['borderRadius'] = toCSSLength(props.strokeWidth) || '3px'

    return (
      <div className={classPrefix}  >
        <div className={`${classPrefix}-trail`} style={back}>
          <div className={`${classPrefix}-fill`} style={styles} />
        </div>
      </div>
    )
  }

}

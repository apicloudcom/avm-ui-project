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
    back['height'] = toCSSLength(props.trackWidth) || '3px'
    back['borderRadius'] = toCSSLength(props.borderRadius) || '3px'
    back['backgroundColor'] =props.fillColor || '#E5E5E5'  

    const styles = {}
    styles['width'] = `${props.percent}%`
    styles['width'] = props.percent ? `${props.percent}%` : '0%'
    styles['background'] = props.trackColor || '#1677ff'
    styles['borderRadius'] = toCSSLength(props.borderRadius) || '3px'

    return (
      <div className={classPrefix}  >
        <div className={`${classPrefix}-trail`} style={back}>
          <div className={`${classPrefix}-fill`} style={styles} />
        </div>
      </div>
    )
  }
  css=()=>{
    return `
:root {
  --adm-color-primary: #9AC200;
  --adm-color-success: #7FA000;
  --adm-color-warning: #FFA600;
  --adm-color-danger: #FA6400;
  --adm-color-white: #ffffff;
  --adm-color-weak: #999999;
  --adm-color-light: #cccccc;
  --adm-border-color: #eeeeee;
  --adm-font-size-main: 13px;
  --adm-color-text: #333333;
  --adm-font-family:
    -apple-system,
    blinkmacsystemfont,
    "Helvetica Neue",
    helvetica,
    segoe ui,
    arial,
    roboto,
    "PingFang SC",
    "miui",
    "Hiragino Sans GB",
    "Microsoft Yahei",
    sans-serif;
}
.adm-progress-bar {
  width: 100%;
}
.adm-progress-bar-trail {
  width: 100%;
}
.adm-progress-bar-fill {
  transition: width 0.3s;
  height: 100%;
}
`
  }
}

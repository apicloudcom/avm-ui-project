import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'

const classPrefix = `adm-tag`

const colorRecord: Record<string, string> = {
  default: '#666666',
  primary: '#1677ff',
  success: '#00b578',
  warning: '#ff8f1f',
  danger: '#ff3141',
}

export type TagProps = {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | (string & {})
  fill?: 'solid' | 'outline'
  round?: boolean
  onClick?: (e: any) => void
}

const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false,
}

export class Tag extends Component {
  install = () => {
    console.log('Tag!')
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const color = colorRecord[props.color] ?? props.color

    const styles = {}
    styles['border'] = `1px solid ${props.borderColor ?? color}`

    if (props.fill === 'outline') {
      styles['color'] = props.textColor ?? color
    } else {
      styles['background'] = props.bgColor ?? color
      styles['color'] = props.textColor ?? '#fff'
    }

    if (props.borderRadius && !props.round) {
      styles['borderRadius'] = props.borderRadius
    }

    return (
      <span
        style={styles}
        onClick={props.onClick}
        className={classNames(classPrefix, {
          [`${classPrefix}-round`]: props.round
        })}
      >
        {props.children}
      </span>
    )
  }
}

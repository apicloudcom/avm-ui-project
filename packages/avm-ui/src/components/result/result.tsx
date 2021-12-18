import classNames from 'classnames'
import { CheckCircleFill, CloseCircleFill, InformationCircleOutline, ClockCircleOutline, ExclamationCircleFill } from '../icon/icon'
import './result.less'
const classPrefix = `adm-result`

const iconDefalutProps = {
  success: {
    fontSize: 52,
    color: '#1677ff'
  },
  error: {
    fontSize: 52,
    color: '#ff3141'
  },
  info: {
    fontSize: 52,
    color: '#1677ff'
  },
  waiting: {
    fontSize: 52,
    color: '#00b578'
  },
  warning: {
    fontSize: 52,
    color: '#ff8f1f'
  }
}

const iconRecord = {
  'success': <CheckCircleFill {...iconDefalutProps['success']}/>,
  'error': <CloseCircleFill {...iconDefalutProps['error']}/>,
  'info': <InformationCircleOutline {...iconDefalutProps['info']}/>,
  'waiting': <ClockCircleOutline {...iconDefalutProps['waiting']}/>,
  'warning': <ExclamationCircleFill {...iconDefalutProps['warning']}/>,
}


export type ResultProps = {
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: string
  description?: string
  icon?: HTMLElement
}

export class Result extends Component {
  render = props => {
    const { status, title, description, children } = props
    if (!status) return null
    const resultIcon = children && Boolean(children.length) ? children : iconRecord[status]
    return (
      <div className={classNames(classPrefix, `${classPrefix}-${status}`)}>
        <div className={`${classPrefix}-icon`}>{resultIcon}</div>
        <text className={`${classPrefix}-title`}>{title}</text>
        {description ? (
          <text className={`${classPrefix}-description`}>{description}</text>
        ) : null}
      </div>
    )
  }
}

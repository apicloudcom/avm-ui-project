import classNames from '../../utils/classnames'
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
  'success': <CheckCircleFill {...iconDefalutProps['success']} />,
  'error': <CloseCircleFill {...iconDefalutProps['error']} />,
  'info': <InformationCircleOutline {...iconDefalutProps['info']} />,
  'waiting': <ClockCircleOutline {...iconDefalutProps['waiting']} />,
  'warning': <ExclamationCircleFill {...iconDefalutProps['warning']} />,
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
  css = () => {
    return `
    .adm-result {
      --bg-color: #ffffff;
      --color: #333333;
      --adm-color-weak: #999999;
      padding: 32px 12px;
      background-color: #ffffff;
    }
    .adm-result-icon {
      box-sizing: border-box;
      width: 64px;
      height: 64px;
      margin: 0 auto 20px auto;
      padding: 6px;
      text-align: center;
    }
  
    .adm-result-title {
      color: #333333;
      font-size: 18px;
      line-height: 1.4;
      text-align: center;
    }
  
    .adm-result-description {
      margin-top: 8px;
      color: #999999;
      font-size: 13px;
      line-height: 1.4;
      text-align: center;
    }
    
    .adm-result-success .antd-mobile-icon .adm-result-icon{
      color: #9AC200;
    }
    
    .adm-result-error .adm-result-icon .antd-mobile-icon {
      color: #FA6400;
    }
    
    .adm-result-info .adm-result-icon .antd-mobile-icon {
      color: #9AC200;
    }
    
    .adm-result-waiting .adm-result-icon .antd-mobile-icon {
      color: #7FA000;
    }
    
    .adm-result-warning .adm-result-icon .antd-mobile-icon {
      color: #FFA600;
    }
    `
  }
}


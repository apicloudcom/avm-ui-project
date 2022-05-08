import classNames from '../../utils/classnames'
// import { CheckCircleFill, CloseCircleFill, InformationCircleOutline, ClockCircleOutline, ExclamationCircleFill } from '../icon/icon'
import {Icon} from "../icon";


const classPrefix = `adm-result`

const iconDefalutProps = {
  success: {
    fontSize: 75,
    color: '#859F30'
  },
  error: {
    fontSize: 75,
    color: '#ff3141'
  },
  info: {
    fontSize: 75,
    color: '#1677ff'
  },
  waiting: {
    fontSize: 75,
    color: '#00b578'
  },
  warning: {
    fontSize: 75,
    color: '#ff8f1f'
  }
}

const iconRecord = {
  'success': <Icon code={59931} {...iconDefalutProps['success']} />,
  'error': <Icon code={59938} {...iconDefalutProps['error']} />,
  'info': <Icon code={59984} {...iconDefalutProps['info']} />,
  'waiting': <Icon code={59937} {...iconDefalutProps['waiting']} />,
  'warning': <Icon code={59955} {...iconDefalutProps['warning']} />,
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
      text-align: center;
    }
  
    .adm-result-title {
      color: #111;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
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


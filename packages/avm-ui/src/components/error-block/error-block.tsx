import classNames from '../../utils/classnames'
// import { iconRecord } from './error'
import { formatLabel } from '../../utils/format-label'
import {FrownOutline} from '../icon/icon'
const classPrefix = `adm-error-block`

const ErrorBlockText = {
  default: {
    title: '页面遇到一些小问题',
    description: '待会来试试',
  },
  busy: {
    title: '前方拥堵',
    description: '刷新试试',
  },
  disconnected: {
    title: '网络有点忙',
    description: '动动手指帮忙修复',
  },
  empty: {
    title: '没有找到你需要的东西',
    description: '找找其他的吧',
  },
}

export type ErrorBlockProps = {
  status?: 'default' | 'disconnected' | 'empty' | 'busy'
  title?: Element
  image?: string | Element
  description?: Element
  fullPage?: boolean
}

const defaultProps = {
  status: 'default',
  imageWidth: 'auto',
  imageHeight: '100px',
  imageWidthFullPage: 'auto',
  imageHeightFullPage: '200px'
}

export class ErrorBlock extends Component {
  install = () => {
    console.log('ErrorBlock!')
  }

  render = props => {
    this.props = Object.assign({}, defaultProps, props)
    const {
      status, description, title, image, fullPage, children,
      imageWidth, imageHeight, imageHeightFullPage, imageWidthFullPage,
    } = this.props;
    // const icon = iconRecord[status]
    const contentPack = ErrorBlockText[status]

    const des = 'description' in this.props ? description : contentPack.description
    const errTitle = 'title' in props ? title : contentPack.title

    // let imageNode = <img src={icon} className={`${classPrefix}-image-img`}/>
    let imageNode = <FrownOutline width="100px" height="100px" className={`${classPrefix}-image-img`}/>
    if (image) {
      if (typeof image === 'string') {
        imageNode = <img src={image} className={`${classPrefix}-image-img`}/>
      } else {
        imageNode = image
      }
    }

    const imageStyles = {
      width: fullPage ? imageWidthFullPage : imageWidth,
      height: fullPage ? imageHeightFullPage : imageHeight
    }

    const errTitleCls = classNames(`${classPrefix}-description-title`, {
      [`${classPrefix}-full-page-description-title`]: fullPage
    })

    return (
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-full-page`]: fullPage,
        })}
        style={{}}
      >
        <div className={`${classPrefix}-image`} style={imageStyles}>{imageNode}</div>
        <div className={classNames(`${classPrefix}-description`, {
          [`${classPrefix}-full-page-description`]: fullPage
        })}>
          {formatLabel(errTitle, errTitleCls)}
          {formatLabel(des, `${classPrefix}-description-subtitle`)}
        </div>
        {children && formatLabel(children, `${classPrefix}-content`)}
      </div>
    )
  }
  css = () => {
    return `
      .adm-error-block {
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .adm-error-block-image {
        max-width: 100%;
      }
      .adm-error-block-image-img {
        height: 100%;
      }
      .adm-error-block-description {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .adm-error-block-description-title {
        line-height: 1.4;
        font-size: 15px;
        color: #999;
      }
      .adm-error-block-description-subtitle {
        line-height: 1.4;
        font-size: 12px;
        color: #999;
        margin-top: 8px;
      }
      .adm-error-block-content {
        margin-top: 12px;
      }
      .adm-error-block-full-page {
        margin-top: 45%;
      }
      .adm-error-block-full-page-description {
        margin-top: 20px;
        font-size: 13px;
      }
      .adm-error-block-full-page-description-title {
        font-size: 20px;
        color: #333;
      }
    `
  }
}

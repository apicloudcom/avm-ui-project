import classNames from 'classnames'
import { iconRecord } from './error'
import { mergeProps } from '../../utils/with-default-props'
import { formatLabel } from '../../utils/format-label'

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
    this.props = mergeProps(defaultProps, props)
    const {
      status, description, title, image, fullPage, children,
      imageWidth, imageHeight, imageHeightFullPage, imageWidthFullPage,
    } = this.props;
    const icon = iconRecord[status]
    const contentPack = ErrorBlockText[status]

    const des = 'description' in this.props ? description : contentPack.description
    const errTitle = 'title' in props ? title : contentPack.title

    let imageNode = <img src={icon} className={`${classPrefix}-image-img`}/>
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
}

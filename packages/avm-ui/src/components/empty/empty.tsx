// import classNames from '../../utils/classnames'
import Icon from '../icon'


const classPrefix = `adm-empty`

export type EmptyProps = {
  image?: string
  imageStyle?: Object
  description?: string
}
const defaultProps = {
  fontSize: 64,
  color: '#999999'
}

export class Empty extends Component {
  install = () => {
    console.log('Empty!')
  }

  render = props => {
    props = Object.assign({},defaultProps, props)
    const { children, imageStyle, fontSize, color} = props
    const imageWidth = (imageStyle && imageStyle.width) ?? fontSize
    const imageColor = (imageStyle && imageStyle.color) ?? color
    const imageNode = () => {
      if(children && Boolean(children.length)) {
        return (
         children
        )
      }else {
        return (
        <Icon code={60057}
          fontSize={imageWidth}
          color={imageColor}
        />)
      }
    }
    return (
      <div className={classPrefix}>
        <div className={`${classPrefix}-image-container`}>{imageNode()}</div>
        {props.description && (
          // <span className={`adm-empty-description`}>
          <span style="color:#ccc;font-size:14px;margin-top:8px">
            {props.description}
          </span>
        )}
      </div>
    )
  }

  css = () => {
    return `
    .adm-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 0;
    }
    .adm-empty-image-container {
      display: flex;
      justify-content: center;
    }
    .adm-empty-image-container-image {
      width: 64px;
    }
    .adm-empty-description {
      margin-top: 8px;
      font-size: 14px;
      color: #cccccc;
    }
    `
  }
}


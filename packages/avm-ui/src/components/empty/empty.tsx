import Icon from '../icon'


const classPrefix = `adm-empty`

export type EmptyProps = {
  image?: string
  imageStyle?: Object
  description?: string
}
const defaultProps = {
  fontSize: 64,
  color: '#999999',
  description: "暂无数据"
}

export class Empty extends Component {
  render = props => {
    props = Object.assign({}, defaultProps, props)
    let {children, imageStyle, fontSize, color} = props
    const imageWidth = (imageStyle && imageStyle.width) ?? fontSize
    const imageColor = (imageStyle && imageStyle.color) ?? color
    const imageNode = () => {
      if (children.length === 1) {
        if (typeof children[0] === 'string' && children[0].includes('.')) {
          return <img style={`width: ${fontSize}px; height: ${fontSize}px;`} src={children[0]}/>
        } else {
          return children
        }
      } else {
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


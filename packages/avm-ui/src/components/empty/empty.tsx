import classNames from 'classnames'
import {UiwInbox} from '../icon/icon'
import { mergeProps } from '../../utils/with-default-props'


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

  render = props => {debugger
    props = mergeProps(defaultProps, props)
    const { children, imageStyle, fontSize, color} = props
    const imageWidth = (imageStyle && imageStyle.width) ?? fontSize
    const imageColor = (imageStyle && imageStyle.color) ?? color
    console.log(imageWidth,'imagewidth')
    const imageNode = () => {
      if(children && Boolean(children.length)) {
        return (
         children
        )
      }else {
        return (
        <UiwInbox
          fontSize={imageWidth}
          color={imageColor}
        />)
      }
    }
    return (
      <div className={classPrefix}>
        <div className={`${classPrefix}-image-container`}>{imageNode()}</div>
        {props.description && (
          <text className={classNames(`${classPrefix}-description`)}>
            {props.description}
          </text>
        )}
      </div>
    )
  }
}


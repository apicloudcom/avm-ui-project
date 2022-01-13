import classNames from 'classnames'
import Image from '../image'
import Loading from '../loading'

import deleteIcon from './img/delete.png'

const classPrefix = `adm-image-uploader`

export class PreviewItem extends Component {
  render = props => {
    const { url, deletable, onDelete, cellSizeStyle } = props

    const renderLoading = () => {
      return (
        props.status === 'pending' && (
          <div className={`${classPrefix}-cell-mask`}>
            <span className={`${classPrefix}-cell-loading`}>
              <Loading color='#fff'/>
              <span className={`${classPrefix}-cell-mask-message`}>上传中</span>
            </span>
          </div>
        )
      )
    }

    const renderDelete = () => {
      return (
        deletable && (
          <span className={`${classPrefix}-cell-delete`} onClick={onDelete}>
            <img src={deleteIcon} alt="delete" className={`${classPrefix}-cell-delete-img`}/>
          </span>
        )
      )
    }

    return (
      <div
        className={classNames(`${classPrefix}-cell`, {
          [`${classPrefix}-cell-fail`]: props.status === 'fail'
        })}
        style={cellSizeStyle}>
        <Image
          width={cellSizeStyle.width}
          height={cellSizeStyle.height}
          className={`${classPrefix}-cell-image`}
          src={url}
          onClick={props.onClick}
        />
        {renderLoading()}
        {renderDelete()}
      </div>
    )
  }
}

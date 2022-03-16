import ImageViewer from '../image-viewer'
import {PreviewItem} from './preview-item'
import {cloneDeep} from 'lodash'
import Space from '../space'
import classNames from '../../utils/classnames'

import {CameraOutline} from '../icon/icon'

export interface FileItem {
  url: string
}

const classPrefix = `adm-image-uploader`

const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  defaultValue: [] as FileItem[],
  accept: 'jpg',
  capture: 'library'
}

export class ImageUploader extends Component {
  data = {
    imgList: this.props.value || this.props.defaultValue || [],
    previewUrls: null,
    defaultPreviewIndex: 0,
    imageViewvisible: false
  }

  setValue = v => {
    this.data.imgList = cloneDeep(v)
    this.props.onChange?.(this.data.imgList)
  }

  saveImg = imgSrc => {
    const {maxCount} = this.props
    const {imgList} = this.data

    if (!maxCount || (maxCount && imgList.length <= maxCount)) {
      const newData = [...this.data.imgList, {url: imgSrc}]
      this.setValue(newData)
    } else {
      this.props.onCountExceed?.()
    }
  }

  // 选择图片
  selectPicture = () => {
    try{
      api.getPicture({
        sourceType: this.props.capture,
        encodingType: this.props.accept,
        mediaValue: 'pic',
        destinationType: 'url',
        quality: 50,
        targetWidth: 100,
        targetHeight: 100,
      }, (ret, err) => {
          if (ret) {
            if (this.props.beforeUpload) {
              new Promise((resolve, reject) => {
                const status = this.props.beforeUpload(ret.data)
                if (status) {
                  resolve(status)
                } else {
                  reject(status)
                }
              }).then(res => {
                if (res) {
                  ret.data && ret.data !== '' && this.saveImg(ret.data)
                }
              })
            } else {
              ret.data && ret.data !== '' && this.saveImg(ret.data)
            }
            
          } else {
              api.toast({
                msg: '上传失败'+err
              });
          }
      });
    } catch(err) {
      api.toast({
        msg: JSON.stringify(err)
      })
    }
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)

    this.data.previewUrls = this.data.imgList.map(fileItem => fileItem.url)

    const {maxCount, onPreview, cellSize='109px'} = props

    const cellSizeStyle = {
      width: cellSize,
      height: cellSize
    }

    // 预览
    const previewImage = (index: number) => {
      this.data.defaultPreviewIndex = index
      // this.data.imageViewvisible = true
      onPreview?.(index)
    }

    const showUpload = props.showUpload && (!maxCount || (maxCount && this.data.imgList.length < maxCount))
    return (
      <div className={classPrefix}>
        <Space className={`${classPrefix}-space`} direction="horizontal" style={cellSizeStyle} wrap gap={props.gap || '8px'}>
          {this.data.imgList.map((fileItem, index) => (
            <PreviewItem
              cellSizeStyle={cellSizeStyle}
              url={fileItem.url}
              deletable={props.deletable}
              onClick={() => previewImage(index)}
              onDelete={() => {
                const canDelete = props.onDelete?.(fileItem)
                if (canDelete === false) return
                this.setValue(this.data.imgList.filter(x => x.url !== fileItem.url))
              }}
            />
          ))}
          {showUpload && (
            <div
              className={classNames(`${classPrefix}-cell ${classPrefix}-btn-wrap`, {
                [`${classPrefix}-btn-wrap-disabled`]: props.disableUpload
              })}
              style={cellSizeStyle}
              onClick={() => {
                !props.disableUpload && this.selectPicture()
              }}>
              {props.uploadIcon ?? <CameraOutline color="#ddd" width="22px" height="22px"/>}
          </div>
          )}
        </Space>
        <ImageViewer.Multi
          images={this.data.previewUrls}
          visible={this.data.imageViewvisible}
          onClose={ () => (this.data.imageViewvisible = false)}
        />
        <text className={`${classPrefix}-tip-desc`}>{props.tipDesc}</text>
      </div>
    )
  }
  css = () => {
    return `
    .adm-image-uploader-cell {
      border-radius: 4px;
      overflow: hidden;
    }
    .adm-image-uploader-cell-fail {
      border: 1px solid #f00;
      box-sizing: border-box;
    }
    .adm-image-uploader-cell-delete-wrap {
      width: 14.5px;
      height: 14.5px;
      position: absolute;
      top: 4.8px;
      right: 4.8px;
      z-index: 7;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-cell-delete-wrap-inner {
      font-size: 8px;
      color: #fff;
    }
    .adm-image-uploader-cell-mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: #fff;
      background-color: rgba(50, 50, 51, 0.88);
    }
    .adm-image-uploader-cell-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 16px;
    }
    .adm-image-uploader-cell-mask-message {
      display: inline-block;
      padding: 6px 4px;
      font-size: 12px;
    }
    .adm-image-uploader-btn-wrap {
      background-color: #f6f6f6;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-btn-wrap-img {
      width: 32px;
      height: 32px;
    }
    .adm-image-uploader-btn-wrap-disabled {
      opacity: 0.6;
    }
    .adm-image-uploader-tip-desc {
      font-size: 12px;
      color: #999;
      padding-top: 16px;
    }
    `
  }
}

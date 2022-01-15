import { mergeProps } from '../../utils/with-default-props'
import ImageViewer from '../image-viewer'
import {PreviewItem} from './preview-item'
import {cloneDeep} from 'lodash'
import Space from '../space'

import addIcon from './img/add.png'
import classNames from 'classnames'

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
    props = mergeProps(defaultProps, props)

    this.data.previewUrls = this.data.imgList.map(fileItem => fileItem.url)

    const {maxCount, onPreview, cellSize='80px'} = props

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
        <Space className={`${classPrefix}-space`} wrap gap={props.gap}>
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
              {props.uploadIcon ?? <img src={addIcon} alt="add" className={`${classPrefix}-btn-wrap-img`}/>}
          </div>
          )}
        </Space>
        <ImageViewer.Multi
          images={this.data.previewUrls}
          visible={this.data.imageViewvisible}
          onClose={ () => (this.data.imageViewvisible = false)}
        />
      </div>
    )
  }
}

import { ImageUploader } from './image-uploader'
import './image-uploader.less'

export type { FileItem } from './image-uploader'

export default ImageUploader

avm.define('avm-image-uploader', ImageUploader)

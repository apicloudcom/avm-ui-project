import './image-viewer.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import {
  ImageViewer,
  showImageViewer
} from './image-viewer'

export type { ImageViewerProps } from './image-viewer'

// const Multi = attachPropertiesToComponent(MultiImageViewer, {
//   show: showMultiImageViewer,
// })

export default attachPropertiesToComponent(ImageViewer, {
  show: showImageViewer,
})
// export default ImageViewer
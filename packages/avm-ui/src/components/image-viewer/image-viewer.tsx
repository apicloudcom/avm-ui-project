import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import { Slide } from './slide'
import { Slides } from './slides'

// import { renderToBody } from '../../utils/render-to-body'

const classPrefix = `adm-image-viewer`

export type ImageViewerProps = {
  image?: string
  maxZoom?: number
  getContainer?: GetContainer
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false,
}

export class ImageViewer extends Component {
  data = {
    visible: this.props.visible || defaultProps.visible
  }
  render = p => {
    const props = mergeProps(defaultProps, p)
    const node = (
      <Mask
        visible={props.visible}
        disableBodyScroll={false}
        opacity='1'
      >
        <div className={`${classPrefix}-content`}>
          {props.image && (
            <Slide
              image={props.image}
              onTap={() => {
                props.onClose?.()
                props.afterClose?.()
              }}
              maxZoom={props.maxZoom}
            />
          )}
        </div>
      </Mask>
    )
    return renderToContainer(props.getContainer, node)
  }
  
  css = () => {
    return `.adm-image-viewer-container {
      height: 100%;
      width: 100%;
      position: absolute;
    }
    .adm-image-viewer-content {
      width: 100%;
      height: 100%;
      max-height: -webkit-fill-available;
      touch-action: none;
      user-select: none;
    }
    .adm-image-viewer-slides {
      height: 100%;
      position: relative;
      z-index: 1;
      cursor: grab;
    }
    .adm-image-viewer-slides-inner {
      height: 100%;
      white-space: nowrap;
    }
    .adm-image-viewer-slide {
      position: relative;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .adm-image-viewer-control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: grab;
    }
    .adm-image-viewer-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-image-wrapper img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .adm-image-viewer-indicator {
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 12px;
      transform: translateX(-50%);
      color: #e6e6e6;
      font-size: 14px;
    }
    .adm-image-viewer-swiper {
      display: flex !important;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-swiper-item {
      display: flex !important;
      height: 100%;
      justify-content: center;
      align-items: center;
    }`
  }
}

export type MultiImageViewerProps = Omit<ImageViewerProps, 'image'> & {
  images?: string[]
  defaultIndex?: number
  onIndexChange?: (index: number) => void
}

const multiDefaultProps = {
  ...defaultProps,
  defaultIndex: 0,
}
export class MultiImageViewer extends Component {
  render = (p: MultiImageViewerProps) => {
    const props = mergeProps(multiDefaultProps, p)
    const node = (
      <Mask
        visible={props.visible}
        disableBodyScroll={false}
        opacity='thick'
        afterClose={props.afterClose}
      >
        <div className={`${classPrefix}-content`}>
          {props.images && (
            <Slides
              images={props.images}
              onTap={() => {
                props.onClose?.()
              }}
              onIndexChange={(e) => {props.onIndexChange?.(e)}}
              maxZoom={props.maxZoom}
            />
          )}
        </div>
      </Mask>
    )
    return renderToContainer(props.getContainer, node)
  }
  
  css = () => {
    return `.adm-image-viewer-container {
      height: 100%;
      width: 100%;
      position: absolute;
    }
    .adm-image-viewer-content {
      width: 100%;
      height: 100%;
      max-height: -webkit-fill-available;
      touch-action: none;
      user-select: none;
    }
    .adm-image-viewer-slides {
      height: 100%;
      position: relative;
      z-index: 1;
      cursor: grab;
    }
    .adm-image-viewer-slides-inner {
      height: 100%;
      white-space: nowrap;
    }
    .adm-image-viewer-slide {
      position: relative;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .adm-image-viewer-control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: grab;
    }
    .adm-image-viewer-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-image-wrapper img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .adm-image-viewer-indicator {
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 12px;
      transform: translateX(-50%);
      color: #e6e6e6;
      font-size: 14px;
    }
    .adm-image-viewer-swiper {
      display: flex !important;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-swiper-item {
      display: flex !important;
      height: 100%;
      justify-content: center;
      align-items: center;
    }`
  }
}

class Wrapper extends Component {
  data = {
    visible: true
  }
  render = props => {
    const node = (
      <ImageViewer
        {...props}
        visible={this.data.visible}
        onClose={() => {
          props.onClose?.()
          this.data.visible = false
        }}
      />
    )
    return node
  }
}

export function showImageViewer(props) {
  // renderToContainer(document.body, <Wrapper {...props} />)
  avm.render(<Wrapper {...props} />, "#toast-box")
}

class MultiWrapper extends Component {
  data = {
    visible: true
  }
  render = props => {
    const node = (
      <MultiImageViewer
        {...props}
        visible={this.data.visible}
        onClose={() => {
          props.onClose?.()
          this.data.visible = false
        }}
        onChange={(e) => {
          console.log(e)
        }}
      />
    )
    return node
  }
}

export function showMultiImageViewer(props) {
  // renderToContainer(document.body, <MultiWrapper {...props} />)
  const imageViewerContainer = document.getElementById('image-viewer-container')
  
  if (!imageViewerContainer) {
    const  node = (
      <div id="image-viewer-container" className={`${classPrefix}-container`}></div>
    )
    avm.render(node, 'body')
  }
  
  avm.render(<MultiWrapper {...props} />, "#image-viewer-container")
}

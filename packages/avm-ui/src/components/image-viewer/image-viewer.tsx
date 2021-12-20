import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import {
  GetContainer,
  renderToContainer,
} from '../../utils/render-to-container'
import { Slide } from './slide'
// import { Slides } from './slides'

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
  getContainer: document.body,
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
        opacity='thick'
      >
        <div className={`${classPrefix}-content`}>
          {props.image && (
            <Slide
              image={props.image}
              onTap={() => {
                console.log(1)
                props.onClose?.()
              }}
              maxZoom={props.maxZoom}
            />
          )}
        </div>
      </Mask>
    )
    return renderToContainer(props.getContainer, node)
  }
}

// export function showImageViewer(props) {
//   const Wrapper = forwardRef()
// }

// export type MultiImageViewerProps = Omit<ImageViewerProps, 'image'> & {
//   images?: string[]
//   defaultIndex?: number
//   onIndexChange?: (index: number) => void
// }
//
// const multiDefaultProps = {
//   ...defaultProps,
//   defaultIndex: 0,
// }
//
// export class MultiImageViewer extends Component {
//   render = p => {
//     const props = mergeProps(multiDefaultProps, p)
//
//     const node = (
//       <Mask
//         visible={props.visible}
//         disableBodyScroll={false}
//         opacity='thick'
//         afterClose={props.afterClose}
//       >
//         <div className={`${classPrefix}-content`}>
//           {props.images && (
//             <Slides
//               defaultIndex={props.defaultIndex}
//               onIndexChange={props.onIndexChange}
//               images={props.images}
//               onTap={() => {
//                 props.onClose?.()
//               }}
//               maxZoom={props.maxZoom}
//             />
//           )}
//         </div>
//       </Mask>
//     )
//     return renderToContainer(props.getContainer, node)
//   }
// }
//
// export function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
//   type Ref = {
//     close: () => void
//   }
//   const Wrapper = forwardRef<Ref>((_, ref) => {
//     const [visible, setVisible] = useState(false)
//     useEffect(() => {
//       setVisible(true)
//     }, [])
//     useImperativeHandle(ref, () => ({
//       close: () => {
//         setVisible(false)
//       },
//     }))
//     return (
//       <ImageViewer
//         {...props}
//         visible={visible}
//         onClose={() => {
//           props.onClose?.()
//           setVisible(false)
//         }}
//         afterClose={() => {
//           props.afterClose?.()
//           unmount()
//         }}
//       />
//     )
//   })
//   const ref = createRef<Ref>()
//   const unmount = renderToBody(<Wrapper ref={ref} />)
//   return {
//     close: () => {
//       ref.current?.close()
//     },
//   }
// }
//
// export function showMultiImageViewer(
//   props: Omit<MultiImageViewerProps, 'visible'>
// ) {
//   type Ref = {
//     close: () => void
//   }
//   const Wrapper = forwardRef<Ref>((_, ref) => {
//     const [visible, setVisible] = useState(false)
//     useEffect(() => {
//       setVisible(true)
//     }, [])
//     useImperativeHandle(ref, () => ({
//       close: () => {
//         setVisible(false)
//       },
//     }))
//     return (
//       <MultiImageViewer
//         {...props}
//         visible={visible}
//         onClose={() => {
//           props.onClose?.()
//           setVisible(false)
//         }}
//         afterClose={() => {
//           props.afterClose?.()
//           unmount()
//         }}
//       />
//     )
//   })
//   const ref = createRef<Ref>()
//   const unmount = renderToBody(<Wrapper ref={ref} />)
//   return {
//     close: () => {
//       ref.current?.close()
//     },
//   }
// }

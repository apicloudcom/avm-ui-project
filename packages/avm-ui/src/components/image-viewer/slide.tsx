const classPrefix = `adm-image-viewer`

// type Props = {
//   image: string
//   maxZoom: number
//   onTap: () => void
//   onZoomChange?: (zoom: number) => void
//   dragLockRef?: MutableRefObject<boolean>
// }

export class Slide extends Component {
  data = {
    zoom: this.props.zoom || 1
  }
  render = props => {
    const { zoom } = this.data
    return (
      <div
        className={`${classPrefix}-slide`}
        onTouchMove={e => {
          console.log(1)
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
        }}
      >
        <div className={`${classPrefix}-control`}>
          <div
            className={`${classPrefix}-image-wrapper`}
            style={`transform: scale(${ zoom });`}
            ondrag={e => {
              console.log(e)
            }}
          >
            <img src={props.image} draggable={false} />
          </div>
        </div>
      </div>
    )
  }
}

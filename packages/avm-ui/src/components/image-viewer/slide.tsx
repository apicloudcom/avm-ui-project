const classPrefix = `adm-image-viewer`

// type Props = {
//   image: string
//   maxZoom: number
//   onTap: () => void
//   onZoomChange?: (zoom: number) => void
//   dragLockRef?: MutableRefObject<boolean>
// }

export class Slide extends Component {
  data =  {
      zoom: this.props.zoom || 1,
      touchTime: new Date()
  }
  touchEnd() {
    const delayTime = new Date().getTime() - this.data.touchTime.getTime()
    if (delayTime < 300) {
      this.props.onTap()
    }
  }
  render = props => {
    const { zoom } = this.data
    return (
      <div
        className={`${classPrefix}-slide`}
        onTouchMove={e => {
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
        }}
      >
        <div className={`${classPrefix}-control`}>
          <div
            className={`${classPrefix}-image-wrapper`}
            style={`transform: scale(${ zoom });`}
            ontouchstart={ ()=> { this.data.touchTime = new Date() } }
            ontouchend={ this.touchEnd.bind(this) }
          >
            <img src={props.image} draggable={false} />
          </div>
        </div>
      </div>
    )
  }
}

// import { Slide } from './slide'
// import { convertPx } from '../../utils/convert-px'
// import { bound } from '../../utils/bound'

const classPrefix = `adm-image-viewer`

export class Slides extends Component {
  data = {
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
    return (
      // <div className={`${classPrefix}-slides`}>
        <swiper className={`${classPrefix}-swiper`} onchange={ e => {
          props.onIndexChange({index: e.detail.current})}}>
          {props.images.map(image => (
            <swiper-item onClick={props.onTap} className={`${classPrefix}-swiper-item`}>
              <img style="display: block;max-width: 100%;max-height: 100%;" src={image} draggable={false}/>
            </swiper-item>
          ))}
        </swiper>
      // </div>
    )
  }
}


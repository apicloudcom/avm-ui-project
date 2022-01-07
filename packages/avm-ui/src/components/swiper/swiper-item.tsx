import { formatLabel } from "../../utils/format-label"

export class SwiperItem extends Component {
  render = props => {
    return (
      <swiper-item className='adm-swiper-item' onClick={props.onClick} style={props.style}>
        {formatLabel(props.children, 'adm-swiper-item-child')}
      </swiper-item>
    )
  }
}

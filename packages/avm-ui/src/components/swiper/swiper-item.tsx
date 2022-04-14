import { formatLabel } from "../../utils/format-label"

export class SwiperItem extends Component {
  render = props => {
    return (
      <swiper-item className='adm-swiper-item' onClick={() => props.handleClick && props.handleClick(props.index)} style={props.style}>
        {formatLabel(props.children, 'adm-swiper-item-child')}
      </swiper-item>
    )
  }
}

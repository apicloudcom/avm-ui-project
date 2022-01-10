import {SwiperItem} from './swiper-item'
import {PageIndicator} from '../page-indicator/page-indicator'
import { mergeProps } from '../../utils/with-default-props'
const classPrefix = `adm-swiper`

const defaultProps = {
  defaultIndex: 0,
  // allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3000,
  loop: false,
  direction: 'horizontal',
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: false,
}

export class Swiper extends Component {
  data = {
    current: this.props.defaultIndex || 0
  }
  render = props => {
    this.props = mergeProps(defaultProps, props);
    const {
      height='auto',
      width='100%',
      borderRadius='0',
      // trackPadding=0,
      autoplay,
      autoplayInterval,
      loop,
      direction,
      onIndexChange
    } = this.props;
    const swiperStyle = {
      height,
      width,
      borderRadius,
    }
    return (
      <div className={`${classPrefix}-wrapper`}>
        <swiper
          className={classPrefix}
          autoplay={autoplay}
          interval={autoplayInterval}
          style={swiperStyle}
          circular={loop}
          vertical={direction === 'vertical'}
          current={this.data.current}
          onChange={e => {
            this.data.current = e.detail.current;
            onIndexChange?.(e)
          }}>
          {
            props.children.map(item => {
              return (
                <SwiperItem {...item.attributes}>{item.children}</SwiperItem>
              )
            })
          }
        </swiper>
        <PageIndicator
          className={'adm-swiper-pageindicator'}
          total={props.children.length}
          current={this.data.current}
          dotColor={"rgba(0, 0, 0, 0.2)"}
          activeDotColor={"#1677ff"}/>
      </div>
      
    )
  }
}
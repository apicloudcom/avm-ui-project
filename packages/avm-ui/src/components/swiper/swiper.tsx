import {SwiperItem} from './swiper-item'
import {PageIndicator} from '../page-indicator/page-indicator'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
const classPrefix = `adm-swiper`

const defaultProps = {
  defaultIndex: 0,
  allowTouchMove: true,
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
    current: this.props.defaultIndex || 0,
    timer: null
  }
  render = props => {
    this.props = mergeProps(defaultProps, props);
    const {
      height='120px',
      width='100%',
      borderRadius='0',
      trackPadding,
      autoplay,
      autoplayInterval,
      loop,
      direction,
      // allowTouchMove,
      onIndexChange,
      indicatorProps
    } = this.props;
    const swiperStyle = {
      height,
      width,
      borderRadius,
      padding: trackPadding || 0
    }

    // const pageindicatorStyle = direction === 'horizontal' ? {bottom: '12px', left: '50%'} : {right: '12px', top: '50%'}

    const pageIndicatorEle = props.indicator === undefined
      ? (
        <div className={classNames(`${classPrefix}-pageindicator`, `${classPrefix}-pageindicator-${direction}`)}>
          <PageIndicator
            {...indicatorProps}
            total={props.children.length}
            direction={direction}
            current={this.data.current}/>
        </div>
      )
      : props.indicator({total: props.children.length, current: this.data.current})
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
            onIndexChange?.(this.data.current)
          }}>
          {
            props.children.map(item => {
              return (
                <SwiperItem {...item.attributes}>{item.children}</SwiperItem>
              )
            })
          }
        </swiper>
        {pageIndicatorEle}
      </div>
    )
  }
}
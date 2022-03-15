import {SwiperItem} from './swiper-item'
import {PageIndicator} from '../page-indicator/page-indicator'
import classNames from '../../utils/classnames'
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
    this.props = Object.assign({}, defaultProps, props);
    const {
      height='120px',
      width='100%',
      borderRadius='0',
      // trackPadding,
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
    }

    // const pageindicatorStyle = direction === 'horizontal' ? {bottom: '12px', left: '50%'} : {right: '12px', top: '50%'}

    const pageIndicatorEle = props.indicator === undefined
      ? (
        <div
          className={classNames(`${classPrefix}-pageindicator`, `${classPrefix}-pageindicator-${direction}`)}>
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
  css = () => {
    return `
      .adm-swiper-wrapper {
        position: relative;
      }
      .adm-swiper-item {
        align-items: center;
        justify-content: center;
      }
      .adm-swiper-item-child {
        width: 100%;
        height: 100%;
      }
      .adm-swiper-pageindicator {
        position: absolute;
      }
      .adm-swiper-pageindicator-horizontal {
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
      }
      .adm-swiper-pageindicator-vertical {
        right: 12px;
        top: 50%;
      }
    `
  }
}
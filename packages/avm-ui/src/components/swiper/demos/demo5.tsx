import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import { DemoBlock } from '../../../demos'
import '../swiper.less'
import './demo5.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const verticalItems = colors.map((color, index) => (
  <SwiperItem key={index}>
    <span className={'verticalContent'} style={{ background: color }}>
      {index + 1}
    </span>
  </SwiperItem>
))

const template =
<>
  <DemoBlock title='竖向'>
    <Swiper direction='vertical' style={{ '--height': '200px' }}>
      {verticalItems}
    </Swiper>
  </DemoBlock>
  <DemoBlock title='竖向居中展示'>
    <Swiper
      direction='vertical'
      trackOffset={10}
      slideSize={80}
      style={{ '--height': '200px' }}
    >
      {verticalItems}
    </Swiper>
  </DemoBlock>
</>

avm.render(template, 'body')

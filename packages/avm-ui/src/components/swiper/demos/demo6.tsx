import { DemoBlock, lorem } from '../../../demos'
import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import '../swiper.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <SwiperItem key={index}>
    <div style={{ background: color }}>{lorem.generateParagraphs(2)}</div>
  </SwiperItem>
))
const template =
<>
  <DemoBlock title='高度自动撑起'>
    <Swiper>{items}</Swiper>
  </DemoBlock>
</>

avm.render(template, 'body')
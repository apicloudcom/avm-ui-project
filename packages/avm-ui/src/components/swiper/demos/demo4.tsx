import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import {Space} from '../../space/space'
import { DemoBlock, DemoDescription } from '../../../demos'
import '../swiper.less'
import '../../space/space.less'
import  './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <SwiperItem key={index}>
    <span className={'content'} style={{ background: color }}>
      {index + 1}
    </span>
  </SwiperItem>
))

const template =
<>
  <DemoBlock title='自定义样式'>
    <Space direction='vertical' block>
      <Swiper
        slideSize={80}
        style={{
          '--border-radius': '8px',
        }}
        defaultIndex={2}
      >
        {items}
      </Swiper>
      <DemoDescription content='通过 CSS 变量可以控制滑块的大小、整体的圆角等样式' />
    </Space>
  </DemoBlock>
  <DemoBlock title='居中展示'>
    <Space direction='vertical' block>
      <Swiper loop={false} slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
      <DemoDescription content='通过 CSS 变量可以控制滑块的大小和轨道的偏移量' />
    </Space>
  </DemoBlock>
  <DemoBlock title='循环居中展示'>
    <Swiper slideSize={70} trackOffset={15}>
      {items}
    </Swiper>
  </DemoBlock>
  <DemoBlock title='最后一项'>
    <Space direction='vertical' block>
      <Swiper
        loop={false}
        slideSize={80}
        trackOffset={10}
        defaultIndex={3}
        stuckAtBoundary
      >
        {items}
      </Swiper>
      <DemoDescription content='让最后一项卡在右边界' />
    </Space>
  </DemoBlock>
</>

avm.render(template, 'body')
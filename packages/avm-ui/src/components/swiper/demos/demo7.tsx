import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import {Button} from '../../button/button'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'
import '../swiper.less'
import '../../button/button.less'
import '../../space/space.less'
import './demo1.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <SwiperItem key={index}>
    <span className={'content'} style={{ background: color }}>
      {index + 1}
    </span>
  </SwiperItem>
))

class Demo extends Component{
  data = {
    count: 4
  }

  setCount = c => {
    this.data.count = c
  }
  render = () => {
    return (
      <>
        <DemoBlock title='items 动态变化'>
          <Space direction='vertical' block>
            <Swiper loop={true}>{items.slice(0, this.data.count)}</Swiper>
            <Button
              onClick={() => {
                this.setCount(((this.data.count + 2) % 4) + 1)
              }}
            >
              Change
            </Button>
          </Space>
        </DemoBlock>
      </>
    )
  } 
}
avm.render(<Demo/>, 'body')

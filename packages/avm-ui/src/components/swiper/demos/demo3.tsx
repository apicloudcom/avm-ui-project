import {Swiper} from '../swiper'
import {SwiperItem} from '../swiper-item'
import {Button} from '../../button/button'
import {Space} from '../../space/space'
import {Popup} from '../../popup/popup'
import { DemoBlock, DemoDescription } from '../../../demos'
import '../swiper.less'
import '../../button/button.less'
import '../../space/space.less'
import '../../popup/popup.less'
import './demo3.less'

class WithPopup extends Component {
  data = {
    visible: false
  }
  setVisible = v => {
    this.data.visible = v
  }
  render = () => {
    return (
      <>
        <Button
          onClick={() => {
            this.setVisible(true)
          }}>显示弹出层</Button>
        <Popup position='bottom' visible={this.data.visible} destroyOnClose>
          <Swiper loop={false}>
            <SwiperItem>
              <div
                className={'contentFull'}
                style={{ background: '#ace0ff' }}>1</div>
            </SwiperItem>
            <SwiperItem>
              <div
                className={'contentFull'}
                style={{ background: '#bcffbd' }}>1</div>
            </SwiperItem>
            <SwiperItem>
              <div
                className={'contentFull'}
                style={{ background: '#ffffff' }}>
                <Button
                  onClick={() => {
                    this.setVisible(false)
                  }}>开始使用</Button>
              </div>
            </SwiperItem>
          </Swiper>
        </Popup>
      </>
    )
  }
}

const template =
<DemoBlock title='全屏引导'>
  <Space direction='vertical' block>
    <WithPopup />
    <DemoDescription content='配合 Popup 组件可以实现全屏引导' />
  </Space>
</DemoBlock>

avm.render(template, 'body')

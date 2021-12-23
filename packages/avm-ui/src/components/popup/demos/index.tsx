import { DemoBlock } from '../../../demos'
import {Popup} from '../popup'
import {Space} from '../../space/space'
import {Button} from '../../button/button'

import '../popup.less'
import '../../button/button.less'
import '../../space/space.less'

class Stack extends Component {
  data = {
    visible1: false,
    visible2: false
  }

  setVisible1 = v => {
    this.data.visible1 = v
  }
  setVisible2 = v => {
    this.data.visible2 = v
  }

  render = () => {
    return (
      <>
        <Button
          onClick={() => {
            this.setVisible1(true)
          }}
        >
          展开弹出层1
        </Button>
        <Popup
          visible={this.data.visible1}
          onMaskClick={() => {
            this.setVisible1(false)
          }}
          bodyStyle={{ height: '40vh' }}
        >
          <div style={{ padding: '24px' }}>
            <Space direction='vertical'>
              <div>这是弹出层1</div>
              <Button
                onClick={() => {
                  this.setVisible2(true)
                }}
              >
                展开弹出层2
              </Button>
            </Space>
          </div>
        </Popup>
        <Popup
          visible={this.data.visible2}
          onMaskClick={() => {
            this.setVisible2(false)
          }}
          bodyStyle={{ height: '20vh' }}
        >
          <div style={{ padding: '24px' }}>
            <div>这是弹出层2</div>
          </div>
        </Popup>
      </>
    )
  }
}

export class Demo extends Component {
  data = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    visible6: false,
    borderRadiusStyle: {
      borderRadius: '8px 8px 0 0',
      minHeight: '60vh'
    },
  }
  setVisible1 = v => {
    this.data.visible1 = v
  }
  setVisible2 = v => {
    this.data.visible2 = v
  }
  setVisible3 = v => {
    this.data.visible3 = v
  }
  setVisible4 = v => {
    this.data.visible4 = v
  }
  setVisible5 = v => {
    this.data.visible5 = v
  }
  setVisible6 = v => {
    this.data.visible6 = v
  }
  render = () => {
    return (
      <>
        <DemoBlock title='不同位置'>
          <Space direction='vertical'>
            <>
              <Button
                onClick={() => {
                  this.setVisible1(true)
                }}
              >
                底部弹出
              </Button>
              <Popup
                visible={this.data.visible1}
                onMaskClick={() => {
                  this.setVisible1(false)
                }}
                bodyStyle={{ minHeight: '40vh' }}
              >
                Hello
              </Popup>
            </>
            <>
              <Button
                onClick={() => {
                  this.setVisible2(true)
                }}
              >
                顶部弹出
              </Button>
              <Popup
                visible={this.data.visible2}
                onMaskClick={() => {
                  this.setVisible2(false)
                }}
                position='top'
                bodyStyle={{ minHeight: '40vh' }}
              >
                Hello
              </Popup>
            </>
            <>
              <Button
                onClick={() => {
                  this.setVisible3(true)
                }}
              >
                左侧弹出
              </Button>
              <Popup
                visible={this.data.visible3}
                onMaskClick={() => {
                  this.setVisible3(false)
                }}
                position='left'
                bodyStyle={{ minWidth: '60vw' }}
              >
                Hello
              </Popup>
            </>
            <>
              <Button
                onClick={() => {
                  this.setVisible4(true)
                }}
              >
                右侧弹出
              </Button>
              <Popup
                visible={this.data.visible4}
                onMaskClick={() => {
                  this.setVisible4(false)
                }}
                position='right'
                bodyStyle={{ minWidth: '60vw' }}
              >
                Hello
              </Popup>
            </> 
          </Space>
        </DemoBlock>
        <DemoBlock title='自定义样式'>
          <Space direction='vertical'>
            <>
              <Button
                onClick={() => {
                  this.setVisible5(true)
                }}
              >
                圆角的弹出层
              </Button>
              <Popup
                visible={this.data.visible5}
                onMaskClick={() => {
                  this.setVisible5(false)
                }}
                bodyStyle={this.data.borderRadiusStyle}
              >
                Hello
              </Popup>
            </>
            <>
              <Button
                onClick={() => {
                  this.setVisible6(true)
                }}
              >
                内容超长滚动
              </Button>
              <Popup
                visible={this.data.visible6}
                onMaskClick={() => {
                  this.setVisible6(false)
                }}
              >
                <div style={{ height: '30vh', overflowY: 'scroll' }}>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                  <h1>Hello</h1>
                </div>
              </Popup>
            </>
          </Space>
        </DemoBlock>
        <DemoBlock title='多层堆叠'>
          <Stack />
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')
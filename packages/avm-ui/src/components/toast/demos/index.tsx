import Toast from '../index'
import {Space} from '../../space/space'
import {Button} from '../../button/button'
import { DemoBlock } from '../../../demos'
import { Icon } from '../../icon/icon'

import '../../space/space.less'
import '../../button/button.less'
import '../toast.less'

class CountDownText extends Component {
  data = {
    count: 5
  }

  setCount = val => {
    this.data.count = val
  }

  render = () => {
    const interval =setInterval(() => {
      this.setCount(x => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    this.data.count === 0 && clearInterval(interval)
    return <span>还剩 {this.data.count} 秒</span>
  }
}
const template =
<>
  <DemoBlock title='基础用法'>
    <Button
      onClick={() =>
        Toast.show({
          content: 'Hello World',
          afterClose: () => {
            console.log('after')
          },
        })
      }
    >
      轻提示
    </Button>
  </DemoBlock>
  <DemoBlock title='图标'>
    <Space wrap>
      <Button
        onClick={() =>
          Toast.show({
            icon: 'success',
            content: '保存成功',
          })
        }
      >
        成功
      </Button>
      <Button
        onClick={() => {
          Toast.show({
            icon: 'fail',
            content: '名称已存在',
          })
        }}
      >
        失败
      </Button>
      <Button
        onClick={() => {
          Toast.show({
            icon: 'loading',
            content: '加载中…',
          })
        }}
      >
        动态更新
      </Button>
      <Button
        onClick={() => {
          Toast.show({
            content: '上传中',
            icon: <Icon name="UploadOutline" />,
          })
        }}
      >
        自定义图标
      </Button>
    </Space>
  </DemoBlock>
  <DemoBlock title='更多功能'>
    <Space wrap>
      <Button
        block
        onClick={() => {
          Toast.show({
            content: 'Hello World',
            position: 'top',
          })
        }}
      >
        顶部提示
      </Button>
      <Button
        block
        onClick={() => {
          Toast.show({
            content: 'Hello World',
            position: 'bottom',
          })
        }}
      >
        底部提示
      </Button>
      <Button
        block
        onClick={() => {
          Toast.show({
            content: '请耐心等待, 不要退出',
            maskClickable: false,
          })
        }}
      >
        阻止背景点击
      </Button>
      <Button
        onClick={() => {
          Toast.show({
            icon: 'loading',
            content: <CountDownText />,
            duration: 5000,
          })
        }}
      >
        动态内容
      </Button>
    </Space>
  </DemoBlock>
  <DemoBlock title='手动清除'>
    <Space wrap>
      <Button
        block
        onClick={() => {
          Toast.show({
            content: '这条提示不会自动消失',
            duration: 0,
            position: 'top',
          })
        }}
      >
        显示
      </Button>
      <Button
        block
        onClick={() => {
          Toast.clear()
        }}
      >
        清除
      </Button>
    </Space>
  </DemoBlock>
</>

avm.render(template, 'body')

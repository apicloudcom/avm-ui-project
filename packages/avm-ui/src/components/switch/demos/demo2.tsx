import { Switch } from '../switch'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'

import '../../space/space.less'
import '../switch.less'

class Demo2 extends Component {
  render = () => {
    const beforeChange = (): Promise<any> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('获取数据啦')
        }, 1000)
      })
    }
  
    return (
      <>
        <DemoBlock title='禁用状态'>
          <Space>
            <Switch disabled />
            <Switch disabled defaultChecked />
          </Space>
        </DemoBlock>
        <DemoBlock title='加载状态'>
          <Switch loading />
        </DemoBlock>
        <DemoBlock title='异步'>
          <Space wrap>
            <Switch defaultChecked beforeChange={() => beforeChange()} />
          </Space>
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo2/>, 'body')

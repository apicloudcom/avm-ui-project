import {Space} from '../../space/space'
import { Switch } from '../switch'
import { Icon } from '../../icon'
import { DemoBlock } from '../../../demos'

import '../switch.less'
import '../../space/space.less'

class Demo1 extends Component {
  data = {
    checked: false
  }

  toggleChecked = state => {
    this.data.checked = state
  }

  render = () => {
    return (
      <>
        <DemoBlock title='基础用法'>
          <Switch />
        </DemoBlock>
        <DemoBlock title='受控组件'>
          <Switch
            checked={this.data.checked}
            onChange={checked => {
              this.toggleChecked(checked)
            }}
          />
        </DemoBlock>
        <DemoBlock title='有默认值'>
          <Switch defaultChecked />
        </DemoBlock>
        <DemoBlock title='文字和图标'>
          <Space wrap>
            <Switch uncheckedText='关' checkedText='开' width="60px"/>
            <Switch
              checkedText={<Icon name="CheckOutline" />}
              uncheckedText={<Icon name="CloseOutline" />}
            />
            <Switch uncheckedText='0' checkedText='1' />
          </Space>
        </DemoBlock>
        <DemoBlock title='自定义样式'>
          <Switch defaultChecked checkedColor="#00b578" height="36px" width="60px"/>
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo1/>, 'body')
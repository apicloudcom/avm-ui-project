import { Dropdown } from '../dropdown'
import { DropdownItem } from '../item'
import { DemoBlock } from '../../../demos/demo-block'
import { Radio } from '../../radio/radio'
import '../dropdown.less'

import {Icon} from '../../icon'
class Demo extends Component {
  data = {
    activeKey: '2'
  }
  setActiveKey = key => {
    // console.log(key);
    this.data.activeKey = key;
  }
  render = () => {
    return (
      <>
        <DemoBlock title='一列' padding={'0'}>
          <Dropdown arrow={<Icon name="ClockCircleOutline" />} onChange={key => {
            this.setActiveKey(key)
          }}>
            <DropdownItem key='a' title='水果'>
              <Radio value='apple'>苹果</Radio>
              <Radio value='orange'>橘子</Radio>
              <Radio value='banana'>香蕉</Radio>
            </DropdownItem>
            <DropdownItem key='b' title='英文'>
              <div>asdasdas</div>
              <div>asdasdas</div>
              <div>asdasdas</div>
              <div>asdasdas</div>
            </DropdownItem>
            <DropdownItem key="c" title='排序'>
              <div style={{ padding: 12 }}>
                排序内容
                <br />
                排序内容
                <br />
                排序内容
                <br />
                排序内容
                <br />
              </div>
            </DropdownItem>
          </Dropdown>
        </DemoBlock>
      </>
    )
  }
}
avm.render(<Demo />, 'body')

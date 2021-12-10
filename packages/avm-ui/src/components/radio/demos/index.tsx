import { DemoBlock } from '../../../demos'
import { Radio } from '../radio'
import {Group} from '../group'
import {Space} from '../../space/space'
import { SmileOutline, SmileFill } from '../../icon/icon'

import '../radio.less'
import '../../space/space.less'

class Demo extends Component {
  data = {
    value: ''
  }
  setValue = val => {
    this.data.value = val
  }
  render = () => {
    return (
      <>
        <DemoBlock title='基础用法'>
          <Space direction='vertical'>
            <div
              onClick={() => {
                console.log('点击了')
              }}
            >
              <Radio />
            </div>
            <Radio>有描述的勾选框</Radio>
            <Radio defaultChecked>默认选中</Radio>
            <Radio defaultChecked disabled>
              禁用状态
            </Radio>
          </Space>
        </DemoBlock>
        <DemoBlock title='选项组'>
          <Group
            value={this.data.value}
            onChange={(val: string) => {
              this.setValue(val)
            }}
          >
            <Radio value='apple'>苹果</Radio>
            <Radio value='orange'>橘子</Radio>
            <Radio value='banana'>香蕉</Radio>
          </Group>
        </DemoBlock>
        <DemoBlock title='整组禁用'>
          <Group defaultValue='orange' disabled>
            <Radio value='apple'>苹果</Radio>
            <Radio value='orange'>橘子</Radio>
            <Radio value='banana'>香蕉</Radio>
          </Group>
        </DemoBlock>
        <DemoBlock title='占满整行宽度'>
          <Space direction='vertical' block>
            <Radio block>块级元素</Radio>
            <Radio>非块级元素</Radio>
          </Space>
        </DemoBlock>
        <DemoBlock title='自定义 icon'>
          <Group
            value={this.data.value}
            onChange={(val: string) => {
              this.setValue(val)
            }}
          >
              <Radio
                value='radio1'
                icon={checked =>
                  checked ? (
                    <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
                  ) : (
                    <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
                  )
                }
              >
                单选框一
              </Radio>
              <Radio
                value='radio2'
                icon={checked =>
                  checked ? (
                    <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
                  ) : (
                    <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
                  )
                }
              >
                单选框二
              </Radio>
          </Group>
        </DemoBlock>
        <DemoBlock title='自定义大小'>
          <Radio
            style={{
              '--icon-size': '18px',
              '--font-size': '14px',
              '--gap': '6px',
            }}
          >
            小号的勾选框
          </Radio>
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

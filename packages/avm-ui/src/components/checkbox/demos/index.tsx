import { DemoBlock } from '../../../demos'
import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../checkboxGroup'
import { Space } from '../../space/space'
import { SmileFill, SmileOutline } from '../../icon/icon'

import '../checkbox.less'

class Demo extends Component {
  data = {
    value: [],
    list1: [{
      label: '苹果',
      value: 'apple'
    }, {
      label: '橘子',
      value: 'orange'
    }, {
      label: '香蕉',
      value: 'banana'
    }]
  }
  setValue = val => {
    this.data.value = val
  }

  onChange = (...res) => {
    console.log(res)
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
              <Checkbox />
            </div>
            <Checkbox onChange={this.onChange}>有描述的勾选框</Checkbox>
            <Checkbox defaultChecked>默认选中</Checkbox>
            <Checkbox defaultChecked disabled>
              禁用状态
            </Checkbox>
            <Checkbox indeterminate={true}>半选</Checkbox>
          </Space>
        </DemoBlock>
        <DemoBlock title='选项组'>
          <CheckboxGroup
            value={this.data.value}
            onChange={(val) => {
              console.log(val)
            }}
            list={this.data.list1}/>
        </DemoBlock>
        <DemoBlock title='整组禁用'>
          <CheckboxGroup
            defaultValue={['orange', 'banana']}
            disabled
            list={this.data.list1}/>
        </DemoBlock>
        <DemoBlock title='占满整行宽度'>
          <Space direction='vertical' block>
            <Checkbox block>块级元素</Checkbox>
            <Checkbox>非块级元素</Checkbox>
          </Space>
        </DemoBlock>
        <DemoBlock title='自定义图标'>
          <Checkbox
            value='banana'
            icon={checked =>
              checked ? (
                <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
              ) : (
                <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
              )
            }
          >
            自定义图标
          </Checkbox>
        </DemoBlock>
        <DemoBlock title='自定义大小'>
          <Checkbox
            style={{
              '--icon-size': '18px',
              '--font-size': '14px',
              '--gap': '6px',
            }}
          >
            小号的勾选框
          </Checkbox>
        </DemoBlock>
      </>
    )
  }
}
avm.render(<Demo/>, 'body')


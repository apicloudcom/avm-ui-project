import '../divider.less'
import { Divider } from '../divider'
import { DemoBlock } from '../../../demos/demo-block'

const template =
  <>
    <DemoBlock title='基础分割线'>
      <Divider />
    </DemoBlock>

    <DemoBlock title='带内容的分割线'>
      <Divider>默认内容在中间</Divider>
      <Divider contentPosition='left'>左侧内容</Divider>
      <Divider contentPosition='right'>右侧内容</Divider>
    </DemoBlock>

    <DemoBlock title='自定义样式'>
      <Divider
        color= '#1677ff'
        borderColor= '#1677ff'
        borderStyle= 'dashed'
      >
        自定义样式
      </Divider>
    </DemoBlock>
  </>
avm.render(template,"body")
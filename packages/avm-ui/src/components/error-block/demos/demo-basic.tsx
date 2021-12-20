import { ErrorBlock } from '../error-block'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'

import '../error-block.less'

const template =
<>
  <DemoBlock title='四种状态'>
    <Space block direction='vertical' gap="16px">
      <ErrorBlock status='default' imageHeight="150px"/>
      <ErrorBlock status='disconnected' />
      <ErrorBlock status='empty' />
      <ErrorBlock status='busy' />
    </Space>
  </DemoBlock>
</>

avm.render(template, 'body')
import { ErrorBlock } from '../error-block'
import {Button} from '../../button/button'
import { DemoBlock } from '../../../demos'
import '../error-block.less'

const template =
<DemoBlock title='自定义'>
  <ErrorBlock
    image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
    style={{
      '--image-height': '150px',
    }}
    description={
      <span>
        Customize <a href='#API'>Description</a>
      </span>
    }
  >
    <Button color='primary'>Create Now</Button>
  </ErrorBlock>
</DemoBlock>

avm.render(template, 'body')

import { NavBar } from '../../../index'
import { DemoBlock } from '../../../demos/demo-block'
import { SearchOutline, MoreOutline } from '../../icon/icon'

import './index.less';
const right = (
  <div>
    <SearchOutline />
    <MoreOutline />
  </div>
)

const back = () => console.log('点击了返回区域')

const template =
  <>
    <DemoBlock title='基础使用' padding='0'>
      <NavBar onBack={back}>标题</NavBar>
    </DemoBlock>

    <DemoBlock title='自定义返回按钮的文字' padding='0'>
      <NavBar back='返回' onBack={back}>
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='返回按钮不显示图标' padding='0'>
      <NavBar back='返回' onBack={back} backArrow={false}>
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='自定义返回按钮图标' padding='0'>
      <NavBar back='返回'  onBack={back}>
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='自定义左侧区域' padding='0'>
      <NavBar back='返回' onBack={back} left='关闭'>
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='自定义右侧区域' padding='0'>
      <NavBar right={right} onBack={back}>
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='自定义标题内容' padding='0'>
      <NavBar onBack={back}>
        <div>
          <div>标题</div>
          <div className='my-nav-bar-subtitle'>副标题</div>
        </div>
      </NavBar>
    </DemoBlock>

    <DemoBlock title='自定义高度和下边框' padding='0'>
      <NavBar
        style={{
          'height': '36px',
          'border-bottom': '1px #eee solid',
        }}
        onBack={back}
      >
        标题
      </NavBar>
    </DemoBlock>

    <DemoBlock title='标题超长自动省略' padding='0'>
      <NavBar onBack={back}>这是一条很长很长很长很长很长很长的标题</NavBar>
    </DemoBlock>
  </>
avm.render(template, "body")
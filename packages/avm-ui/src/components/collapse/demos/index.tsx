import {Collapse, CollapsePanel} from '../collapse'
import {Loading} from '../../loading/loading'
import {Result} from '../../result/result'
import { DemoBlock } from '../../../demos'

import '../../list/list.less'
import '../collapse.less'
import '../../loading/loading.less'
import '../../result/result.less'

class DynamicContent extends Component {
  data = {
    finished: false
  }

  setFinished = f => {
    this.data.finished = f
  }

  loadData = () => {
    setTimeout(() => {
      this.setFinished(true)
    }, 1000);
  }

  render = () => {
    this.loadData()
    return this.data.finished ? <Result status='success' title='处理成功' /> : <Loading />
  }
}

const template =
<>
  <DemoBlock title='基础用法' padding='0' border='none'>
    <Collapse defaultActiveKey={['1']}>
      <CollapsePanel key='1' title='第一项'>
        这里是第一项的内容<br/>
        这里是第一项的内容<br/>
        这里是第一项的内容<br/>
        这里是第一项的内容<br/>
        这里是第一项的内容<br/>
        这里是第一项的内容<br/>
      </CollapsePanel>
      <CollapsePanel key='2' title='第二项'>
        这里是第二项的内容
      </CollapsePanel>
      <CollapsePanel key='3' title='第三项'>
        这里是第三项的内容
      </CollapsePanel>
    </Collapse>
  </DemoBlock>
  <DemoBlock title='手风琴模式' padding='0' border='none'>
    <Collapse accordion>
      <CollapsePanel key='1' title='第一项'>
        手风琴模式只能同时展开一个<br/>
        手风琴模式只能同时展开一个<br/>
        手风琴模式只能同时展开一个<br/>
        手风琴模式只能同时展开一个<br/>
        手风琴模式只能同时展开一个<br/>
        手风琴模式只能同时展开一个<br/>
      </CollapsePanel>
      <CollapsePanel key='2' title='第二项'>
        手风琴模式只能同时展开一个
      </CollapsePanel>
      <CollapsePanel key='3' title='第三项'>
        手风琴模式只能同时展开一个
      </CollapsePanel>
    </Collapse>
  </DemoBlock>
  <DemoBlock title='禁用' padding='0' border='none'>
    <Collapse>
      <CollapsePanel key='1' title='第一项'>
        这里是第一项的内容
      </CollapsePanel>
      <CollapsePanel key='2' title='第二项' disabled>
        这里是第二项的内容
      </CollapsePanel>
      <CollapsePanel key='3' title='第三项' disabled>
        这里是第三项的内容
      </CollapsePanel>
    </Collapse>
  </DemoBlock>
  <DemoBlock title='动态内容' padding='0' border='none'>
    <Collapse accordion>
      <CollapsePanel key='1' title='第一项'>
        <DynamicContent />
      </CollapsePanel>
      <CollapsePanel key='2' title='第二项'>
        <DynamicContent />
      </CollapsePanel>
    </Collapse>
  </DemoBlock>
</>

avm.render(template, 'body')
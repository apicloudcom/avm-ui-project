import { TextArea } from '../text-area'
import { DemoBlock } from '../../../demos'

import '../text-area.less'

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
        <DemoBlock title='基本的输入框组件'>
          <TextArea
            placeholder='请输入内容'
            placeholderColor="#f00"
            value={this.data.value}
            onChange={val => {
              this.setValue(val)
            }}
          />
        </DemoBlock>
        <DemoBlock title='指定行数'>
          <TextArea placeholder='请输入内容' rows={3} />
        </DemoBlock>
        <DemoBlock title='根据内容自动调整高度'>
          <TextArea
            placeholder='请输入内容'
            autoSize={true}
          />
        </DemoBlock>
        <DemoBlock title='字数统计'>
          <TextArea defaultValue={'北极星垂地，\n东山月满川。'} showCount />
        </DemoBlock>
        <DemoBlock title='字数限制'>
          <TextArea
            defaultValue={'北极星垂地，\n东山月满川。'}
            showCount={(len, maxLength) => {
              return <text style="text-align: right; padding-top: 8px; color: #999;">{len} \ {maxLength}</text>
            }}
            maxLength={30}
          />
        </DemoBlock>
        <DemoBlock title='禁用状态'>
          <TextArea
            placeholder='请输入内容'
            value={'北极星垂地，\n东山月满川。'}
            disabled
          />
        </DemoBlock>
        <DemoBlock title='只读状态'>
          <TextArea
            placeholder='请输入内容'
            value={'北极星垂地，\n东山月满川。'}
            readOnly
          />
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

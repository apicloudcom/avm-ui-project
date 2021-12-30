import {NumberKeyboard} from '../number-keyboard'
import {List} from '../../list/list'
import {ListItem} from '../../list/list-item'
import { DemoBlock } from '../../../demos'

import '../../list/list.less'
import '../number-keyboard.less'

class Demo extends Component {
  data = {
    visible: '',
    value: '',
    actions: {
      onClose: () => {
        console.log('closed')
        this.setVisible('')
      },
      onInput: (key: string) => {
        console.log(key)
      },
      onDelete: () => {
        console.log('delete')
      },
    }
  }

  setVisible = visible => {
    this.data.visible = visible
  }

  setValue = val => {
    this.data.value = val
  }

  openKeyboard = (name: string) => {
    this.setVisible(name)
  }

  onInput = (value: string) => {
    this.setValue(this.data.value+value)
  }

  onDelete = () => {
    const {value} = this.data
    this.setValue(value.slice(0, value.length - 1))
  }


  render = () => {
    return (
      <>
        <DemoBlock title='基础用法1' padding='0' border='none'>
          <List>
            <ListItem onClick={() => this.openKeyboard('demo1')}>默认键盘</ListItem>
            <ListItem onClick={() => this.openKeyboard('demo2')}>带标题键盘</ListItem>
            <ListItem onClick={() => this.openKeyboard('demo3')}>带确认键盘</ListItem>
            <ListItem onClick={() => this.openKeyboard('demo4')}>带自定义键盘</ListItem>
            <ListItem onClick={() => this.openKeyboard('demo5')}>乱序键盘</ListItem>
            <ListItem onClick={() => this.openKeyboard('demo7')} arrow={false}>
              <span
                className={(!this.data.value || this.data.value == null || this.data.value == '')
                  ? 'placeholder-class'
                  : 'text-class'}>{this.data.value || '请输入内容'}</span>
            </ListItem>
          </List>
        </DemoBlock>
        {/* 默认键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo1'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
        />
        {/* 带标题键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo2'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
          title='数字键盘'
          customKey='-'
        />
        {/* 带确认键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo3'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
          showCloseButton={false}
          confirmText='确定'
        />
        {/* 带自定义键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo4'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
          customKey='.'
          showCloseButton={false}
          confirmText='确定'
        />
        {/* 乱序键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo5'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
          randomOrder
          customKey='X'
          confirmText='确定'
        />
        {/* 弹框内展示键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo6'}
          onClose={this.data.actions.onClose}
          onInput={this.data.actions.onInput}
          onDelete={this.data.actions.onDelete}
        />
        {/* 点击输入框弹出键盘 */}
        <NumberKeyboard
          visible={this.data.visible === 'demo7'}
          onClose={this.data.actions.onClose}
          onInput={this.onInput}
          onDelete={this.onDelete}
          customKey='X'
        />
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

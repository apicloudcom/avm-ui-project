import {Input} from '../input'
import {List} from '../../list/list'
import {ListItem} from '../../list/list-item'
import {DemoBlock} from '../../../demos'

import '../input.less'
import '../../list/list.less'

class Demo extends Component {
 

  css = () => {
    return `
      .placeholder_class {
        color: #f00;
      }
    `
  }

  data = {
    value1: ''
  }

  render = () => {
    return (
      <>
        <DemoBlock title='基本的输入框组件'>
          <Input
            placeholder='请输入内容'
            value={this.data.value1}
            onChange={val => {
              console.log(val)
            }}
          />
        </DemoBlock>
        <DemoBlock title='带清除按钮'>
          <Input placeholder='请输入内容' clearable placeholderClass="placeholder_class" onEnterPress={val => {
            console.log(val)
          }} onKeyDown={val => {
            console.log(val)
          }}/>
        </DemoBlock>
        <DemoBlock title='禁用状态'>
          <Input placeholder='请输入内容' value='被禁用的输入框' disabled/>
        </DemoBlock>
        <DemoBlock title='只读状态'>
          <Input placeholder='请输入内容' value='只读模式的输入框' readOnly/>
        </DemoBlock>
        <DemoBlock title='上下布局' padding='0' border='none'>
          <List prefixWidth="100px">
            <ListItem title='用户名'>
              <Input placeholder='请输入用户名' clearable/>
            </ListItem>
            <ListItem title='密码'>
              <Input placeholder='请输入密码' clearable type='password' id="password1"/>
            </ListItem>
          </List>
        </DemoBlock>
        <DemoBlock title='左右布局' padding='0' border='none'>
          <List prefixWidth="100px">
            <ListItem prefix='用户名'>
              <Input placeholder='请输入用户名' clearable/>
            </ListItem>
            <ListItem prefix='密码'>
              <Input placeholder='请输入密码' clearable type='password' id="password2"/>
            </ListItem>
          </List>
        </DemoBlock>
        <DemoBlock title='额外的操作按钮' padding='0' border='none'>
          <List prefixWidth="100px">
            <ListItem prefix='短信验证码' extra={<text>发送验证码</text>}>
              <Input placeholder='请输入验证码' clearable/>
            </ListItem>
          </List>
        </DemoBlock>
        <DemoBlock title='右侧对齐'>
          <Input
            placeholder='请输入验证码'
            textAlign="right"
            clearable
          />
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

import {NavBar} from '../../nav-bar/nav-bar'
import {TabBar} from '../tab-bar'
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline,} from '../../icon/icon'

import '../../nav-bar/nav-bar.less'
import '../tab-bar.less'
import './demo2.less'

class Home extends Component {
  render = () => {
    return <div><span>首页</span></div>
  }
}
class Todo extends Component {
  render = () => {
    return <div><span>我的代办</span></div>
  }
}
class Message extends Component {
  render = () => {
    return <div><span>我的消息</span></div>
  }
}
class PersonalCenter extends Component {
  render = () => {
    return <div><span>个人中心</span></div>
  }
}

class Demo  extends Component{
  data = {
    activeKey: 'home',
    tabs: [
      {
        key: 'home',
        title: '首页',
        icon: <AppOutline />,
      },
      {
        key: 'todo',
        title: '我的待办',
        icon: <UnorderedListOutline />,
      },
      {
        key: 'message',
        title: '我的消息',
        icon: <MessageOutline />,
      },
      {
        key: 'me',
        title: '个人中心',
        icon: <UserOutline />,
      },
    ]
  }

  setActiveKey = key => {
    console.log(key)
    this.data.activeKey = key;
  }

  render = () => {
    return (
      <view className={'app'}>
        <NavBar className={'top'}>页面之间跳转</NavBar>
        <view className={'body'}>
          {this.data.activeKey === 'home' &&　<Home/>}
          {this.data.activeKey === 'todo' &&　<Todo/>}
          {this.data.activeKey === 'message' &&　<Message/>}
          {this.data.activeKey === 'me' &&　<PersonalCenter/>}
        </view>
        <TabBar
          activeKey={this.data.activeKey}
          onChange={key => {
            this.setActiveKey(key)
          }}
          tabs={this.data.tabs}
          className={'bottom'}/>
      </view>
    )
  }
}

avm.render(<Demo/>, 'body')


import { DemoBlock } from '../../../demos'
import { TabBar } from '../tab-bar'
import {dot as badgeDot} from '../../badge/badge'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from '../../icon/icon'

import '../tab-bar.less'
import '../../badge/badge.less'

class Demo extends Component {
  data = {
    tabs: [
      {
        key: 'home',
        title: '首页',
        icon: <AppOutline />,
        badge: badgeDot,
      },
      {
        key: 'todo',
        title: '我的待办',
        icon: <UnorderedListOutline />,
        badge: '5',
      },
      {
        key: 'message',
        title: '我的消息',
        icon: (active: boolean) =>
          active ? <MessageFill /> : <MessageOutline />,
        badge: '99+',
      },
      {
        key: 'personalCenter',
        title: '个人中心',
        icon: <UserOutline />,
      },
    ],
    activeKey: 'todo'
  }

  setActiveKey = key => {
    api.alert({
      msg: key
    })
    this.data.activeKey = key
  }

  render = () => {
    return (
      <>
        <DemoBlock title='基本用法' padding='0'>
          <TabBar tabs={this.data.tabs.map(i => {
            const {key, icon, title} = i;
            return {key, icon, title}
          })}/>
        </DemoBlock>
        <DemoBlock title='徽标' padding='0'>
          <TabBar tabs={this.data.tabs.map(i => {
            const {key, icon, title, badge} = i;
            return {key, icon, title, badge}
          })}/>
        </DemoBlock>
        <DemoBlock title='仅图标' padding='0'>
          <TabBar tabs={this.data.tabs.map(i => {
            const {key, icon} = i;
            return {key, icon}
          })}/>
        </DemoBlock>
        <DemoBlock title='仅标题' padding='0'>
          <TabBar tabs={this.data.tabs.map(i => {
            const {key, title} = i;
            return {key, title}
          })}/>
        </DemoBlock>
        <DemoBlock title='受控组件' padding='0'>
          <TabBar tabs={this.data.tabs.map(i => {
            const {key, title, icon} = i;
            return {key, title, icon}
          })} activeKey={this.data.activeKey} onChange={this.setActiveKey}/>
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

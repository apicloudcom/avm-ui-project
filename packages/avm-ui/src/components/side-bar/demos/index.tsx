import { DemoBlock } from '../../../demos'
import { SideBar, SideBarItem } from '../side-bar'

import '../side-bar.less'
import '../../badge/badge.less'
import './index.less'
class Demo extends Component {
  data = {
    activeKey: 'key2',
    tabs: [{
      key: 'key1',
      title: '选项一',
      badge: true
    },
    {
      key: 'key2',
      title: '选项二',
      badge: '5',
    },
    {
      key: 'key3',
      title: '选项三',
      badge: '99+',
      disabled: true,
    }]
  }

  setActiveKey = key => {
    console.log(key)
    this.data.activeKey = key;
  }


  render = () => {
    return (
      <>
        <DemoBlock title='基本用法' padding='0'>
          <SideBar>
            {this.data.tabs.map(item => (
              <SideBarItem key={item.key} title={item.title} />
            ))}
          </SideBar>
        </DemoBlock>
        <DemoBlock title='配合 Badge 使用' padding='0'>
          <SideBar>
            {this.data.tabs.map(item => (
              <SideBarItem key={item.key} title={item.title} badge={item.badge} />
            ))}
          </SideBar>
        </DemoBlock>
        <DemoBlock title='禁用某个选项' padding='0'>
          <SideBar>
            {this.data.tabs.map(item => (
              <SideBarItem key={item.key} title={item.title} disabled={item.disabled} />
            ))}
          </SideBar>
        </DemoBlock>

        <DemoBlock title='受控组件' padding='0'>
          <div className={'container'}>
            <div>
              <SideBar activeKey={this.data.activeKey} onChange={key => {
                this.setActiveKey(key)
              }}>
                {this.data.tabs.map(item => (
                  <SideBarItem key={item.key} title={item.title} />
                ))}
              </SideBar>
            </div>
            <div>
              <div className={ this.data.activeKey == 'key1' ? 'isVisable' : 'isHidden' }>A</div>
              <div className={ this.data.activeKey == 'key2' ? 'isVisable' : 'isHidden' }>B</div>
              <div className={ this.data.activeKey == 'key3' ? 'isVisable' : 'isHidden' }>C</div>
            </div>
          </div>
        </DemoBlock>
        <DemoBlock title='自定义宽度' padding='0'>
        <SideBar style={'width: 120px'}>
          {this.data.tabs.map(item => (
            <SideBarItem key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      </>
    )
  }
}
avm.render(<Demo />, 'body')

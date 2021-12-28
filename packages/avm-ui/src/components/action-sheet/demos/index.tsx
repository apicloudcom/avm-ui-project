import { ActionSheet, Action } from '../action-sheet'
import {Button} from '../../button/button'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'

import '../action-sheet.less'
import '../../button/button.less'
import '../../space/space.less'

const actions: Action[] = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' },
]

class Basic extends Component {
  data = {
    visible: false,
  }
  setVisible = visible => {
    this.data.visible = visible
  }
  render = () => {
    return (
      <>
        <Button onClick={() => this.setVisible(true)}>最简单的用法</Button>
        <ActionSheet
          visible={this.data.visible}
          actions={actions}
          onClose={() => this.setVisible(false)}
        />
      </>
    )
  }
}

class WithCancelButtonAndDescription extends Component {
  data = {
    visible: false
  }

  setVisible = visible => {
    this.data.visible = visible
  }
  render = () => {
    return (
      <>
        <Button onClick={() => this.setVisible(true)}>取消按钮和额外描述</Button>
        <ActionSheet
          extra='请选择你要进行的操作'
          cancelText='取消'
          visible={this.data.visible}
          actions={actions}
          onClose={() => this.setVisible(false)}
        />
      </>
    )
  }
}

class ConfigActions extends Component {
  data = {
    visible: false,
    actions: [
      { text: '复制', key: 'copy' },
      { text: '修改', key: 'edit', disabled: true },
      {
        text: '删除',
        key: 'delete',
        description: '删除后数据不可恢复',
        danger: true,
      },
    ]
  }

  setVisible = visible => {
    this.data.visible = visible
  }

  render = () => {
    return (
      <>
        <Button onClick={() => this.setVisible(true)}>禁用和危险的选项</Button>
        <ActionSheet
          visible={this.data.visible}
          actions={this.data.actions}
          onClose={() => {
            api.alert({
              msg: '关闭动作面板啦~'
            })
            this.setVisible(false)
          }}
        />
      </>
    )
  }
}

class Events extends Component {
  data = {
    visible: false,
    actions: [
      { text: '复制', key: 'copy' },
      { text: '修改', key: 'edit' },
      {
        text: '删除',
        key: 'delete',
        onClick: () => {
          api.alert({
            title: '提示',
            msg: '确定要删除吗？',
            buttons: ['确定', '取消'],
          });
        },
      },
    ]
  }

  setVisible = visible => {
    this.data.visible = visible
  }
  render = () => {
    return (
      <>
        <Button onClick={() => this.setVisible(true)}>事件处理</Button>
        <ActionSheet
          visible={this.data.visible}
          actions={this.data.actions}
          onClose={() => {
            api.alert({
              msg: '关闭事件处理动作面板啦~'
            })
            this.setVisible(false)
          }}
          onAction={(action, index) => {
            if (action.key === 'edit' || action.key === 'copy') {
              console.log(`点击了${action.text} + ${index}`)
            }
          }}
          afterClose={() => {
            api.alert({
              msg: `动作面板已关闭`
            })
          }}
        />
      </>
    )
  }
}

const template =
<>
<DemoBlock title='基础用法'>
  <Space wrap>
    <Basic />
    <WithCancelButtonAndDescription />
  </Space>
</DemoBlock>
<DemoBlock title='选项状态'>
  <ConfigActions />
</DemoBlock>
<DemoBlock title='事件处理'>
  <Events />
</DemoBlock>
</>

avm.render(template, 'body')
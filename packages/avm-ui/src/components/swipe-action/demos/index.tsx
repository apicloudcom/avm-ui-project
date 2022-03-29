import {  List, SwipeAction } from '../../../index'
import { DemoBlock } from '../../../demos'
import { Action } from '../swipe-action'
// 配合列表使用
const WithList = () => {
  const leftActions: Action[] = [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary',
      onClick: () => {
        console.log('123123')
      }
    },
  ]
  const rightActions: Action[] = [
    {
      key: 'unsubscribe',
      text: '取消关注',
      color: 'default',
    },
    {
      key: 'mute',
      text: '免打扰',
      color: 'warning',
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ]
  const items = ['A', 'B', 'C']
  return (
    <List>
      {items.map(item => (
        <SwipeAction
          key={item}
          leftActions={leftActions}
          rightActions={rightActions}
        >
          <List.Item>{item}</List.Item>
        </SwipeAction>
      ))}
    </List>
  )
}

// 自定义内容
const CustomContent = () => {
  return (
    <SwipeAction
      rightActions={[
        {
          key: 'delete',
          text: '删除',
          color: 'danger',
        },
      ]}
    >
      <div style={{ padding: 12 }}>{'lorem.generateParagraphs(1)'}</div>
    </SwipeAction>
  )
}

// 手动控制归位逻辑
const Manual = () => {
  return (
    <List>
      <SwipeAction
        closeOnAction={false}
        closeOnTouchOutside={false}
        rightActions={[
          {
            key: 'delete',
            text: '删除',
            color: 'danger',
            onClick: () => {
              confirm('确定要删除么？')
            },
          },
        ]}
      >
        <List.Item
          onClick={() => {
            // api.alert({
            //   title: '标题',
            //   msg: '你点击了列表'
            // })
            alert('你点击了列表')
          }}
        >
          A
        </List.Item>
      </SwipeAction>
    </List>
  )
}


const template = (
  <>
    <DemoBlock title='配合列表使用' padding='0' border='none'>
      <WithList />
    </DemoBlock>

    <DemoBlock title='自定义内容' padding='0' border='none'>
      <CustomContent />
    </DemoBlock>

    <DemoBlock title='手动控制归位逻辑' padding='0' border='none'>
      <Manual />
    </DemoBlock>
  </>
)

avm.render(template,'body')

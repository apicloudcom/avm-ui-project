import {List} from '../list'
import {ListItem} from '../list-item';
import {DemoBlock} from "../../../demos";
import CFImg from  './img/cf.svg'
import BackIcon from './img/back.svg'
import '../list.less';
import {Icon} from "../../icon";

const users = [
  {
    avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
  },
]

const clickBtn = () => {
  alert('点击功能列表啦')
}

const template = 
<view style="background:#f5f7fa;">
  <DemoBlock padding='0' border='none' background="-">
    <List header="基础用法">
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
    </List>
  </DemoBlock>
  <DemoBlock padding='0' border='none' background="-">
    <List header='可点击的功能列表' >
      <ListItem prefix={<Icon code={60047}/>} onClick={clickBtn}>
        账单
      </ListItem>
      <ListItem prefix={<Icon code={60005}/>} onClick={clickBtn}>
        总资产
      </ListItem>
      <ListItem prefix={<Icon code={60025}/>} onClick={clickBtn}>
        设置
      </ListItem>
    </List>
  </DemoBlock>
  <DemoBlock padding='0' border='none' background="-">
    <List header='列表项禁用' >
      <ListItem disabled clickable prefix={<img src={CFImg}/>}>
        账单
      </ListItem>
      <ListItem disabled prefix={<img src={CFImg}/>}>
        总资产
      </ListItem>
    </List>
  </DemoBlock>
  <DemoBlock padding='0' border='none' background="-">
    <List header='复杂布局'>
      <ListItem
        extra='次要信息'
        title='这里是标题'
        description='这里是描述信息'
        clickable
      >
        这里是主信息
      </ListItem>
      <ListItem title='这里是标题' clickable>
        这里是主信息
      </ListItem>
      <ListItem title='这里是标题'>这里是主信息</ListItem>
    </List>
  </DemoBlock>
  <DemoBlock padding='0' border='none' background="-">
    <List header='用户列表'>
      {users.map(user => (
        <ListItem
          key={user.name}
          prefix={
            <img
              src={user.avatar}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={user.description}
        >
          {user.name}
        </ListItem>
      ))}
    </List>
  </DemoBlock>
  <DemoBlock padding='0' border='none' background="-">
      <List mode='card' header={'卡片模式'}>
        <ListItem title='这里是标题' arrow={<img src={BackIcon}/>}>这里是主信息</ListItem>
        <ListItem title='这里是标题'>这里是主信息</ListItem>
      </List>
  </DemoBlock>
</view>

avm.render(template, "body");

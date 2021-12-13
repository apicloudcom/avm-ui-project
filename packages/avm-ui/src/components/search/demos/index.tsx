import {Search } from '../search'
import {Space} from '../../space/space'
import { DemoBlock } from '../../../demos'

import '../search.less'
import '../../space/space.less'
import '../../button/button.less'
import '../../input/input.less'

const template = 
<>
  <DemoBlock title='基础用法'>
    <Search placeholder='请输入内容' />
  </DemoBlock>
  <DemoBlock title='带取消按钮的搜索框'>
    <Search placeholder='请输入内容' showCancelButton  onChange={val => console.log(val)}/>
  </DemoBlock>
  <DemoBlock title='取消按钮长显'>
    <Search placeholder='请输入内容' showCancelButton={() => true} onChange={val => console.log(val)}/>
  </DemoBlock>
  <DemoBlock title='事件监听和 Ref'>
    <Space block direction='vertical'>
      <Search
        placeholder='请输入内容'
        showCancelButton
        onSearch={val => {
          console.log(`你搜索了：${val}`)
        }}
        onFocus={() => {
          console.log('获得焦点')
        }}
        onBlur={() => {
          console.log('失去焦点')
        }}
        onClear={() => {
          console.log('清空内容')
        }}
        onCancel={() => {
          console.log('取消搜索')
        }}
      />
    </Space>
  </DemoBlock>
  <DemoBlock title='自定义样式'>
    <Search
      placeholder='请输入内容'
      showCancelButton
      borderRadius="100px"
      bgColor="#f5f5f5"
      placeholderColor="#f00"
    />
  </DemoBlock>
</>

avm.render(template, 'body')
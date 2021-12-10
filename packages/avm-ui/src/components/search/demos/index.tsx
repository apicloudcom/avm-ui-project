import {Search } from '../search'
import {Button} from '../../button/button'
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
    <Search placeholder='请输入内容' showCancelButton />
  </DemoBlock>
  <DemoBlock title='取消按钮长显'>
    <Search placeholder='请输入内容' showCancelButton={() => true} />
  </DemoBlock>
  <DemoBlock title='事件监听和 Ref'>
    <Space block direction='vertical'>
      {/* <Search
        placeholder='请输入内容'
        showCancelButton
        onSearch={val => {
          alert(`你搜索了：${val}`)
        }}
        onFocus={() => {
          alert('获得焦点')
        }}
        onBlur={() => {
          alert('失去焦点')
        }}
        onClear={() => {
          alert('清空内容')
        }}
        onCancel={() => {
          alert('取消搜索')
        }}
      /> */}
      <Space>
        <Button
          onClick={() => {
           console.log('清空')
          }}
        >
          清空内容
        </Button>
        <Button
          onClick={() => {
            console.log('激活')
          }}
        >
          激活
        </Button>
      </Space>
    </Space>
  </DemoBlock>
  <DemoBlock title='自定义样式'>
    <Search
      placeholder='请输入内容'
      showCancelButton
      style={{
        '--border-radius': '100px',
        '--background': '#ffffff',
      }}
    />
  </DemoBlock>
</>

avm.render(template, 'body')
import {Tag} from '../tag'
import {Space} from '../../space/space'
import {DemoBlock} from '../../../demos'

import '../tag.less'
import '../../space/space.less'

const template =
  <div>
    <DemoBlock title='基本用法'>
      <Space>
        <Tag>123</Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title='默认提供 5 种通用标签颜色'>
      <Space>
        <Tag color='default'>Default</Tag>
        <Tag color='primary'>Primary</Tag>
        <Tag color='success'>Success</Tag>
        <Tag color='warning'>Warning</Tag>
        <Tag color='danger'>Danger</Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title='自定义颜色'>
      <Space>
        <Tag color='#2db7f5'>#2db7f5</Tag>
        <Tag color='#87d068'>#87d068</Tag>
        <Tag color='#108ee9'>#108ee9</Tag>
      </Space>
    </DemoBlock>
    <DemoBlock title='线框填充'>
      <Space>
        <Tag color='primary' fill='outline'>
          Primary
        </Tag>
        <Tag color='#87d068' fill='outline'>
          #87d068
        </Tag>
        <Tag color='#ff6430' fill='outline'>
          #ff6430
        </Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title='圆角'>
      <Space>
        <Tag round color='#2db7f5'>
          kongxin
        </Tag>
      </Space>
    </DemoBlock>

    <DemoBlock title='可删除'>
      <Space>
        <Tag isDelete color="primary">
          可删除
        </Tag>
      </Space>
    </DemoBlock>


    <DemoBlock title='自定义问题颜色/背景色/border色以及border-radius'>
      <Space wrap>
        <Tag textColor='#f00' bgColor="#000">
          textColor #f00
        </Tag>
        <Tag bgColor='#ff0' textColor="#000">
          bgColor #ff0
        </Tag>
        <Tag borderColor='#f0f'>
          borderColor #f0f
        </Tag>
        <Tag borderRadius='4px'>
          borderRadius 20px
        </Tag>
      </Space>
    </DemoBlock>


    <DemoBlock title='测试无 Space 包裹'>

      <Tag isDelete color="primary">
        可删除
      </Tag>
    </DemoBlock>
  </div>

avm.render(template, 'body')
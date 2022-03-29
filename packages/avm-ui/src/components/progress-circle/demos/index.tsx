import { ProgressCircle, Space } from '../../../index'
import { DemoBlock } from '../../../demos'
import { Icon } from '../../../index'

import './index.less'


const template = (
  <>
    <DemoBlock title='基本用法'>
      <ProgressCircle percent={50}>50%</ProgressCircle>
    </DemoBlock>

    <DemoBlock title='指定线条宽度'>
      <Space style={{ '--gap': '24px' }}>
        <ProgressCircle percent={75} style={{ '--track-width': '2px' }}>
          75%
        </ProgressCircle>
        <ProgressCircle percent={75} style={{ '--track-width': '3px' }}>
          75%
        </ProgressCircle>
        <ProgressCircle percent={75} style={{ '--track-width': '4px' }}>
          75%
        </ProgressCircle>
      </Space>
    </DemoBlock>

    <DemoBlock title='指定画布宽高'>
      <Space style={{ '--gap': '24px' }} align='center'>
        <ProgressCircle percent={50} style={{ '--size': '40px' }}>
          <span className="small">50%</span>
        </ProgressCircle>
        <ProgressCircle percent={75} style={{ '--size': '60px' }}>
          <span className="middle">75%</span>
        </ProgressCircle>
        <ProgressCircle percent={100} style={{ '--size': '90px' }}>
          <span className="large">100%</span>
        </ProgressCircle>
      </Space>
    </DemoBlock>

    <DemoBlock title='自定义'>
      <Space style={{ '--gap': '24px' }}>
        <ProgressCircle
          percent={50}
          style={{
            '--fill-color': '#FF3141',
          }}
        >
          <Icon name="CloseOutline" style={{ color: '#FF3141', fontSize: '18px' }} />
        </ProgressCircle>
        <ProgressCircle percent={100} style={{ '--fill-color': '#00B578' }}>
          <span className="success">Done</span>
        </ProgressCircle>
        <ProgressCircle percent={30} style={{ '--fill-color': 'orange' }}>
          <span className="warning">
            30
            <br />
            次/天
          </span>
        </ProgressCircle>
      </Space>
    </DemoBlock>
  </>
)

avm.render(template, 'body')

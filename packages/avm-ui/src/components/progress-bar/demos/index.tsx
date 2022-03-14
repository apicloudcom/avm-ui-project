/*
 * @Author: Qiang Wu
 * @Date: 2021-12-18 16:01:05
 * @LastEditors: chenky
 * @LastEditTime: 2021-12-20 16:22:09
 * @Description: file content
 */
import { DemoBlock } from '../../../demos'
import { Space } from '../../space/space'
import { Button } from '../../Button/Button'
import { ProgressBar } from '../progress-bar'

import '../../space/space.less'
import '../../button/button.less'
import '../progress-bar.less'
import './index.less'

class Demo extends Component {
  data = {
    disabled: false,
    percent: 0
  }
  setPercent = val => {
    this.data.percent += val
  }
  resetPercent = () => {
    this.data.percent = 0
  }
  render = () => {
    return (
      <>
        <DemoBlock title='基本用法'>
          <Space wrap className={'adm-progress-bar-trail'}>
            <Button
              color='primary'
              disabled={this.data.disabled}
              onClick={() => {
                this.setPercent(10)
              }}
              style={{ marginRight: '8px' }}
            >
              进度+10
            </Button>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                this.resetPercent()
              }}
            >
              重置
            </Button>
          </Space>
          <ProgressBar  percent={this.data.percent} />
        </DemoBlock>
        <DemoBlock title='指定线条宽度'>
          <Space direction='vertical' block>
            <ProgressBar
              percent={50}
              strokeWidth={2}
            />
            <ProgressBar
              percent={75}
              strokeWidth={5}
            />
            <ProgressBar
              percent={60}
              strokeWidth={20}
            />
          </Space>
        </DemoBlock>
        <DemoBlock title='指定颜色'>
          <ProgressBar
            percent={60}
            trackColor='#ff0000'
          />
        </DemoBlock>
      </>
    )
  }
}
avm.render(<Demo />, 'body')
import {Stepper} from '../stepper'
import {DemoBlock} from '../../../demos'
import '../stepper.less'

class Demo1 extends Component {
  data = {
    num: 1
  }

  setNum = num => {
    console.log(num)
    this.data.num = num
  }

  render = () => {
    return (
      <>
        <DemoBlock title='基础用法(非受控)s'>
          <Stepper
            defaultValue={1}
            onHandleChange={value => {
              console.log(value)
            }}
          />
        </DemoBlock>
        <DemoBlock title='受控组件'>
          <Stepper
            value={this.data.num}
            onChange={value => {
              this.setNum(value)
              console.log(value)
            }}
          />
        </DemoBlock>
        <DemoBlock title='步长设置'>
          <Stepper step={10} defaultValue={10}/>
        </DemoBlock>
        <DemoBlock title='设置输入范围'>
          <Stepper min={-5} max={5}/>
        </DemoBlock>
        <DemoBlock title='格式化到整数'>
          <Stepper digits={0}/>
        </DemoBlock>
        <DemoBlock title='格式化到一位小数'>
          <Stepper digits={1}/>
        </DemoBlock>
        <DemoBlock title='禁用状态'>
          <Stepper disabled/>
        </DemoBlock>
        <DemoBlock title='获得/失去焦点'>
          <Stepper
            onFocus={() => {
              console.log('获得焦点')
            }}
            onBlur={() => {
              console.log('失去焦点')
            }}
          />
        </DemoBlock>
        <DemoBlock title='自定义css变量'>
          <Stepper
            borderInner="none"
            btnBgColor="#F8F9FA"
            height="30px"
            inputWidth="60px"
            activeBorder="1px solid #1677ff"
            defaultValue={10000}
            step={10000}
          />
        </DemoBlock>
      </>
    )
  }
}

avm.render(<Demo1/>, 'body')

import { DemoBlock } from '../../../demos'
import { DesenseText } from '../desense-text'

class Demo extends Component {
  // const [isDesens, setDesens] = useState<boolean>(true)

  render = () => {
    return (
      <>
        <DemoBlock title='基础用法'>
          <DesenseText text='18812341234' desenseText='188****1234' />
        </DemoBlock>
        <DemoBlock title='受控组件'>
          <DesenseText
            text='这是全部数据脱敏信息'
            desenseText='这是**信息'
            defaultDesense={false}
            onChange={val => console.log(val)}
          />
        </DemoBlock>
      </>
    )
  }
}
avm.render(<Demo />, 'body')
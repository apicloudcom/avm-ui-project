import FloatingPanel from '../index'
import {DemoBlock} from "../../../demos";

// const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

class Demo extends Component {
  data = {
    list: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
    ]
  }
  render = () => {
    return(
      <>
        <DemoBlock title={"aaa"}></DemoBlock>
        <div style="box-shadow: 0 0 10px 0 #f3f3f3;">1</div>
        <FloatingPanel height={500} anchors={[100, 6000, 200]}>
          {this.data.list.map((item) => (
            <text>{item}</text>
          ))}
        </FloatingPanel>
      </>
    )
  }
}
avm.render(<Demo/>, "body")

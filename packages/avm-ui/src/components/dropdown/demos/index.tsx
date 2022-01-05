import { Dropdown, DropdownItem } from '../dropdown'
import { DemoBlock } from '../../../demos/demo-block'
import '../dropdown.less'


class Demo extends Component {
  render = ()=>{
    return (
      <>
        <DemoBlock title='一列' padding={'0'}>
          <Dropdown>
            <DropdownItem>333</DropdownItem>
            <DropdownItem>111</DropdownItem>
            <DropdownItem>222</DropdownItem>
          </Dropdown>
        </DemoBlock>
  
      </>
    )
  }
}
avm.render(<Demo/>, 'body')

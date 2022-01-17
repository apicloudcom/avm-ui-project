import PullToRefresh from '../index'
import List from '../../list/index'
import { sleep } from '../../../utils/sleep'

class Demo extends Component {
  data = {
    list: ['']
  }
  getNextData() {
    let current = 1
    const ret: string[] = []
    for (let i = 0; i < 18; i++) {
      ret.unshift(current.toString())
      current++
    }
    return ret
  }
  installed () {
    this.data.list = this.getNextData()
  }
  render = () => {
    return (
      <PullToRefresh
        headHeight={40}
        onRefresh={async () => {
          await sleep(1000)
          this.data.list = [...this.getNextData(), ...this.data.list]
        }}
      >
        <List style={{ minHeight: '100vh' }}>
          {this.data.list.map(item => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    )
  }
}

avm.render(<Demo/>, "body")

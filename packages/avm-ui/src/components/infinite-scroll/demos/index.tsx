import { InfiniteScroll } from '../infinite-scroll'
import {List} from '../../list/list'
import {ListItem} from '../../list/list-item'
import { sleep } from '../../../utils/sleep'

import '../infinite-scroll.less'
import '../../list/list.less'

let count = 0

async function mockRequest() {
  if (count >= 5) {
    return []
  }
  await sleep(2000)
  count++
  return [
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

class Demo2 extends Component {
  data = {
    dataList: [],
    hasMore: true
  }

  install = () => {
    this.loadMore()
  }

  setList = list => {
    this.data.dataList = list
  }

  setHasMore = hasmore => {
    this.data.hasMore = hasmore
  }

  loadMore = async () => {
    const append = Array.from(await mockRequest())
    this.setList([...this.data.dataList, ...append])
    this.setHasMore(append.length > 0)
  }

  render = () => {
    return (
      <InfiniteScroll loadMore={this.loadMore} hasMore={this.data.hasMore}>
          <text>{this.data}</text>
          <List>
            {this.data.dataList && this.data.dataList.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </InfiniteScroll>
    )
  }
}

avm.render(<Demo2/>, 'body')

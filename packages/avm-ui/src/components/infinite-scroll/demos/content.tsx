import { InfiniteScroll } from '../infinite-scroll'
import {List} from '../../list/list'
import {ListItem} from '../../list/list-item'
import {Loading} from '../../loading/loading'
import { sleep } from '../../../utils/sleep'

import '../infinite-scroll.less'
import '../../list/list.less'
import '../../loading/loading.less'

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

const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
  return (
    <>
      {hasMore ? (
        <>
          <span>Loading</span>
          <Loading />
        </>
      ) : (
        <span>--- 我是有底线的 ---</span>
      )}
    </>
  )
}
class Demo extends Component {
  data = {
    listData: [],
    hasMore: true
  }

  setHasMore = hasMore => {
    this.data.hasMore = hasMore
  }

  setListData = list => {
    this.data.listData = list
  }

  render = () => {
    const _this = this;

    async function loadMore() {
      const append = await mockRequest()
      _this.setListData(val => [...val, ...append])
      _this.setHasMore(append.length > 0)
    }
    return (
      <>
        <InfiniteScroll loadMore={loadMore} hasMore={this.data.hasMore}>
          <List>
            {this.data.listData.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
          <InfiniteScrollContent hasMore={this.data.hasMore} />
        </InfiniteScroll>
      </>
    )
  }
}

avm.render(<Demo/>, 'body')

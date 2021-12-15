import {InfiniteScroll } from '../infinite-scroll'
import {Button} from '../../button/button'
import {List} from '../../list/list'
import {ListItem} from '../../list/list-item'
import {Loading} from '../../loading/loading'
import {Search} from '../../search/search'
import { sleep } from '../../../utils/sleep'
import './demo3.less'
import '../infinite-scroll.less'
import '../../list/list.less'
import '../../button/button.less'
import '../../loading/loading.less'
import '../../search/search.less'

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

class Demo3 extends Component {
  data = {
    listData: [],
    hasMore: true
  }

  setListData = list => {
    this.data.listData = list
  }

  setHasMore = hasmore => {
    this.data.hasMore = hasmore
  }

  render = () => {
    const _this = this;
    async function loadMore() {
      const append = await mockRequest()
      _this.setListData(val => [...val, ...append])
      _this.setHasMore(append.length > 0)
    }

    function doSearch() {
      _this.setListData([])
      _this.setHasMore(true)
      loadMore()
    }

    return (
      <>
        <div className={'header'}>
          <div className={'left'}>
            <Search />
          </div>
          <div className={'right'}>
            <Button size='small' color='primary' onClick={doSearch}>
              搜索
            </Button>
          </div>
        </div>
        {this.data.listData.length > 0 ? (
         <InfiniteScroll loadMore={loadMore} hasMore={this.data.hasMore}>
            <List>
              {this.data.listData.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
       </InfiniteScroll>
        ) : (
          <div className={'placeholder'}>
            <div className={'loadingWrapper'}>
              <Loading />
            </div>
            <text>正在拼命加载数据</text>
          </div>
        )}
      </>
    )
  }
}

avm.render(<Demo3/>, 'body')

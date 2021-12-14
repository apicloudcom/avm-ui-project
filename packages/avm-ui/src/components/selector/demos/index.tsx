import { Selector } from '../selector'
import { DemoBlock } from '../../../demos'
import '../selector.less'

const ItemList = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
    disabled: true,
  },
  {
    label: '选项三',
    value: '3',
  },
  {
    label: '选项四',
    value: '4',
  },
]

// class RadioMode extends Component {
//   data = {
//     value: '1'
//   }

//   setValue = val => {
//     this.data.value = val
//   }

//   render = () => {
//     return (
//       <Selector
//         options={ItemList}
//         value={[this.data.value]}
//         onChange={v => {
//           if (v.length) {
//             this.setValue(v[0])
//           }
//         }}
//       />
//     )
//   }
// }

class SelectorDemo extends Component {
  render = () => {
    return (
      <div>
        <DemoBlock title='单选'>
          <Selector
            options={ItemList}
            defaultValue={['1']}
            onChange={(arr, extend) => console.log(arr, extend.items)}
          />
        </DemoBlock>
        <DemoBlock title='多选'>
          <Selector
            options={ItemList}
            defaultValue={['2', '3']}
            multiple={true}
            onChange={(arr, extend) => console.log(arr, extend.items)}
          />
        </DemoBlock>
        <DemoBlock title='全局禁止'>
          <Selector
            options={ItemList}
            defaultValue={['1']}
            disabled={true}
            onChange={arr => console.log(arr)}
          />
        </DemoBlock>
        <DemoBlock title='固定两列'>
          <Selector
            columns={2}
            options={ItemList}
            defaultValue={['2', '3']}
            multiple={true}
            onChange={arr => console.log(arr)}
          />
        </DemoBlock>
        <DemoBlock title='固定三列'>
          <Selector
            columns={3}
            options={ItemList}
            defaultValue={['2', '3']}
            multiple={true}
            onChange={arr => console.log(arr)}
          />
        </DemoBlock>
        {/* <DemoBlock title='避免取消选择'>
          <RadioMode />
        </DemoBlock> */}
        <DemoBlock title='自定义样式（通过 style）'>
          <Selector
            style={{ '--checked-color': '#ffe2e5' }}
            options={ItemList}
            defaultValue={['1', '2']}
            multiple={true}
          />
        </DemoBlock>
        <DemoBlock title='自定义样式'>
          <Selector
            color="#f00"
            checkedColor="#ffe2e5"
            options={ItemList}
            defaultValue={['1', '2']}
            multiple={true}
          />
        </DemoBlock>
      </div>
    )
  }
}

avm.render(<SelectorDemo/>, 'body')

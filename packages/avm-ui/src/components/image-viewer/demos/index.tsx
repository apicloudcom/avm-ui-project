import ImageViewer from '../index'
// import '../image-viewer.less';
import {DemoBlock} from "../../../demos";

const demoImages = [
  'https://img95.699pic.com/photo/50033/7459.jpg_wh860.jpg',
  'https://img95.699pic.com/photo/50033/7459.jpg_wh860.jpg',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
]

// const Single = () => {
//   let visible = true
//   return (
//     <>
//       <ImageViewer
//         image={demoImages[0]}
//         visible={visible}
//         onClose={ () => {visible = false} }
//       />
//     </>
//   )
// }

class Demo extends Component {
  data = {
    visible: false,
    visible1: false
  }
  open() {
     ImageViewer.Multi.show({
       images: demoImages,
       defaultIndex: 1,
       onClose: () => {
         console.log('触发关闭')
       },
       afterClose: () => {
         console.log('触发关闭11')
       }
     })
  }
  render = () => {
    return (
      <>
        <DemoBlock title='单张图片预览'>
          <button onclick={() => {this.data.visible = true}}>打开ImageViewer</button>
          <button onclick={() => {this.data.visible1 = true}}>打开ImageViewer</button>
        </DemoBlock>
        <ImageViewer
          image={demoImages[0]}
          visible={this.data.visible}
          onClose={ () => { this.data.visible = false} }
        />
        <ImageViewer.Multi
          images={demoImages}
          visible={this.data.visible1}
          onClose={ () => { this.data.visible1 = false} }
          onIndexChange={(e) => {console.log(e)}}
        />
      </>
    );
  }
}

avm.render(<Demo/>, "body")

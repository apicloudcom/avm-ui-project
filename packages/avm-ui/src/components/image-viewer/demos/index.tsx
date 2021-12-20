import ImageViewer from '../index'
// import '../image-viewer.less';
import {DemoBlock} from "../../../demos";

const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
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
    visible: true
  }
  render = () => {
    return (
      <>
        <DemoBlock title='单张图片预览'>
          <button onclick={() => {this.data.visible = true}}>打开ImageViewer</button>
          <ImageViewer
            image={demoImages[0]}
            visible={this.data.visible}
            onClose={ () => {this.data.visible = false} }
          />
        </DemoBlock>
      </>
    );
  }
}

avm.render(<Demo/>, "body")

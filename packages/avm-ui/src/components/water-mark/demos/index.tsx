import {WaterMark} from '../water-mark'
import {Button} from '../../button/button'
import './index.less'
import '../water-mark.less'

const textProps = {
  content: 'Ant Design Mobile',
}

const imageProps = {
  image: 'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
}

class Demo extends Component {
  data = {
    propsAttr: textProps
  }

  setProps = attr => {
    this.data.propsAttr = attr;
  }

  render = () => {
    return (
      <div className='water-mark-overlay'>
        <Button onClick={() => this.setProps(textProps)}>普通水印</Button>
        <br />
        <Button onClick={() => this.setProps(imageProps)}>图片水印</Button>
        <WaterMark {...this.data.propsAttr} />
      </div>  
    )
  }
}

avm.render(<Demo/>, 'body')

import { NativeProps } from '../../utils/native-props'

export type FloatingPanelProps = {
  anchors: number[],
  height: number,
  children: AVMChild
} & NativeProps<'--border-radius' | '--z-index'>

export type FloatingPanelRef = {
  setHeight: (
    height: number,
    options?: {
      immediate?: boolean
    }
  ) => void
}

export class FloatingPanel extends Component {
  data = {
    y: -100,
    startY: 0
  }
  height = this.props.height || 300
  
  touchMove(e) {
    if (Math.abs(this.data.y) > this.height) {
      this.data.y = this.data.y - (this.data.startY - e.detail.y) * 0.08
    } else {
      this.data.y = this.data.y - (this.data.startY - e.detail.y)
    }
    this.data.startY = e.detail.y
  }
  touchEnd() {
    let sectionArr:number[] = []
    this.props.anchors.sort((a, b) => {return a - b})
    try {
      this.props.anchors.forEach(item => {
        if (item < Math.abs(this.data.y)) {
          sectionArr[0] = item
        } else {
          sectionArr[1] = item > this.height ? this.height : item
          throw '中断'
        }
      })
    } catch (e) {
      if (!sectionArr[0]) {
        sectionArr[0] = -100
      }
    }
    
    const medianValue = (sectionArr[1] - sectionArr[0])/2 + sectionArr[0]
    const y = this.data.y < -medianValue ?  sectionArr[1] : sectionArr[0]
    this.data.y = -y > -100 ? -100 : -y
  }
  render = props => {
    return (
      <div
        ontouchstart={e => {this.data.startY = e.detail.y}}
        ontouchmove={this.touchMove.bind(this)}
        ontouchend={this.touchEnd.bind(this)}
        ontouchcancel={this.touchEnd.bind(this)}
        className='adm-floating-panel'
        style={{
          background: `${props.background || '#fff'}`,
          height: `${props.height || 300}px`,
          transform: `translateY(${this.data.y}px)`,
        }}
      >
        <div
          className='adm-floating-panel-mask'
          style={{
            display: 'flex',
          }}
        />
        <div className='adm-floating-panel-header'>
          <div className='adm-floating-panel-bar'>
          </div>
        </div>
        <scroll-view show-scrollbar={false} scroll-y className='adm-floating-panel-content'>
          {props.children}
        </scroll-view>
      </div>
    )
  }
}

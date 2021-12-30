
import { mergeProps } from '../../utils/with-default-props'
import Button from '../button'
import { NativeProps } from '../../utils/native-props'

export type SwipeActionRef = {
  close: () => void
  show: (side?: 'left' | 'right') => void
}

type ActionColor =
  | 'light'
  | 'weak'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type Action = {
  key: string | number
  text: string
  color?: ActionColor | string
  onClick?: () => void
}

export type SwipeActionProps = {
  rightActions?: Action[]
  leftActions?: Action[]
  onAction?: (action: Action) => void
  closeOnTouchOutside?: boolean
  closeOnAction?: boolean
  children: Element
} & NativeProps<'--background'>

const defaultProps = {
  rightActions: [] as Action[],
  leftActions: [] as Action[],
  closeOnTouchOutside: true,
  closeOnAction: true,
}

export class SwipeAction extends Component {
  install = () => {
    console.log('Swipe-action')
  }
  data = {
    leftActionWidth: 72, //左侧按钮总宽度
    rightActionWidth: 260, //右侧按钮总宽度
    touchStartX: 0, //touch事件初始值
    touchEndX: 0, //touch事件初始值
    touchMoveX: 0, // touch移动中
    translateX: 0,
    touchState: 'center',
    changeTouchX: 0
  }
  close = () => {
    this.data.translateX = 0
    this.data.touchState = 'center'
  }
  show = side => {
    if(side === 'left') {
      this.data.translateX = this.data.leftActionWidth
    }else if(side === 'right') {
      this.data.translateX = this.data.rightActionWidth
    }
  }

  touchstart = (e) => {
    this.data.touchStartX = e.detail.x
  }
  touchmove = (e) => {
    if (this.data.touchState === 'center') {
      this.data.translateX = e.detail.x - this.data.touchStartX
    } else if (this.data.touchState === 'left') {
      this.data.translateX = this.data.leftActionWidth + e.detail.x - this.data.touchStartX
    } else if (this.data.touchState === 'right') {
      this.data.translateX = e.detail.x - this.data.touchStartX - this.data.rightActionWidth
    }
    this.data.changeTouchX = e.detail.x - this.data.touchStartX
    if (this.data.translateX > this.data.leftActionWidth) {
      this.data.translateX = this.data.leftActionWidth
    } else if (this.data.translateX + this.data.rightActionWidth < 0) {
      this.data.translateX = -this.data.rightActionWidth
    }

  }
  touchend = (e) => {
    this.data.touchEndX = e.detail.x
    // this.data.touchEndX = e.changedTouches[0].pageX
    if (this.data.touchEndX === this.data.touchStartX) {
      this.data.translateX = 0;
      this.data.touchState = 'center'
      return;
    }
    if (this.data.touchState === 'center') {
      if (this.data.changeTouchX > 0) {
        if (this.data.leftActionWidth / 2 < this.data.changeTouchX) {
          this.data.translateX = this.data.leftActionWidth
          this.data.touchState = 'left'
        } else {
          this.data.translateX = 0
          this.data.touchState = 'center'
        }
      } else {
        if (this.data.rightActionWidth / 2 < -this.data.changeTouchX) {
          this.data.translateX = -this.data.rightActionWidth
          this.data.touchState = 'right'
        } else {
          this.data.translateX = 0
          this.data.touchState = 'center'
        }
      }
    } else if (this.data.touchState === 'left') {
      if (this.data.changeTouchX > 0) {
        this.data.translateX = this.data.leftActionWidth
        this.data.touchState = 'left'
      } else {
        if (this.data.rightActionWidth / 2 + this.data.leftActionWidth < -this.data.changeTouchX) {
          this.data.translateX = -this.data.rightActionWidth
          this.data.touchState = 'right'
        } else if (this.data.leftActionWidth / 2 < - this.data.changeTouchX) {
          this.data.translateX = 0
          this.data.touchState = 'center'
        } else {
          this.data.translateX = this.data.leftActionWidth
          this.data.touchState = 'left'
        }
      }
    } else if (this.data.touchState === 'right') {
      if (this.data.changeTouchX > 0) {
        if (this.data.leftActionWidth / 2 + this.data.rightActionWidth < this.data.changeTouchX) {
          this.data.translateX = this.data.leftActionWidth
          this.data.touchState = 'left'
        } else if (this.data.rightActionWidth / 2 < this.data.changeTouchX) {
          this.data.translateX = 0
          this.data.touchState = 'center'
        } else {
          this.data.translateX = -this.data.rightActionWidth
          this.data.touchState = 'right'
        }
      } else {
        this.data.translateX = -this.data.rightActionWidth
        this.data.touchState = 'right'
      }
    }
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const { leftActions, rightActions, closeOnAction } = props
    const renderAction = (action) => {
      return (
        <Button
          key={action.key}
          className='adm-swipe-action-action-button'
          color={action.color}
          shape='rectangular'
          onClick={() => {
            action.onClick && action.onClick() 
            if(closeOnAction) {
              this.close()
            }
          }}
          onAction = {() => {
            props.onAction && props.onAction()
          } }
        >
          {action.text}
        </Button>
      )
    }
    const leftButton = (
      <div className='adm-swipe-action-actions adm-swipe-action-actions-left'>
        {leftActions.map(item => {
          return renderAction(item)
        })}
      </div>
    )

    const rightButton = (
      <div className='adm-swipe-action-actions adm-swipe-action-actions-right' >
        {rightActions.map(item => {
          return renderAction(item)
        })}
      </div>
    )
    // this.data.leftActionWidth = leftButton.getBoundingClientRect&&leftButton.getBoundingClientRect()
    // this.data.rightActionWidth = rightButton.getBoundingClientRect&&rightButton.getBoundingClientRect()
    return (
      <div className='adm-swipe-action'>
        <div className='adm-swipe-action-track'
          style={{
            transform: `translateX(${this.data.translateX}px)`,
            transition: `-webkit-transform 500ms ease-out`
          }}>
          {leftButton}
          <div className='adm-swipe-action-content'>
            <div ontouchstart={this.touchstart}
              ontouchmove={this.touchmove}
              ontouchend={this.touchend}>
              {props.children}
            </div>
          </div>
          {rightButton}
        </div>
      </div>
    )
  }



}



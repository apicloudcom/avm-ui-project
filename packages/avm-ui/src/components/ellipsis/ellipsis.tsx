import { mergeProps } from '../../utils/with-default-props'

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: string
  collapseText?: string
}

const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
}

export class Ellipsis extends Component {
  install = () => {
    this.props = mergeProps(defaultProps, this.props)
    this.data.btnText = this.props.expandText
    if (this.props.content.length <= this.data.oneLineLength) {
      this.data.content = this.props.content
    }
    if (this.props.content.length > this.data.oneLineLength) {
      // 头部省略
      if (this.props.direction == 'start') {
        this.data.content = "..." + this.props.content.slice(-this.data.oneLineLength*Number(this.props.rows))
      }
      // 中间省略
      if (this.props.direction == 'middle') {
        this.data.leading = this.props.content.slice(0,this.data.helfLineLength*Number(this.props.rows)) + '...'
        this.data.tailing = '...' + this.props.content.slice(-this.data.helfLineLength*Number(this.props.rows))
      }
      // 尾部省略
      if (this.props.direction == 'end') {
        this.data.content = this.props.content.slice(0, this.data.oneLineLength*Number(this.props.rows)) + '...'
      }
    }
  }


  data = {
    content: '',
    leading: '',
    tailing: '',
    btnText: '',
    oneLineLength: 30,//一行的字数
    helfLineLength: 15,
  }


  render = props => {
    props = mergeProps(defaultProps, props)
    const that = this
    const actionText = <span style={'color:blue'} onClick={openAndCloseClick}>{this.data.btnText}</span>


    function openAndCloseClick() {
      console.log(that.props.rows)
      const openText = props.expandText
      const closeText = props.collapseText
      const long = props.content.length
      //end
      const endToOpen = () => {
        that.data.content = props.content
        that.data.btnText = closeText
      }
      const openToEnd = () => {
        that.data.content = that.props.content.slice(0, that.data.oneLineLength*Number(props.rows)) + '...'
        that.data.btnText = openText
      }
      //start
      const startToOpen = () => {
        that.data.content = props.content
        that.data.btnText = closeText
      }
      const openToStart = () => {
        that.data.content = "..." + that.props.content.slice(-that.data.oneLineLength*Number(props.rows))
        that.data.btnText = openText
      }
      //middle
      const middleToOpen = () => {
        that.data.leading = props.content.slice(0, long / 2 + 1)
        that.data.tailing = props.content.slice(-long / 2)
        that.data.btnText = closeText
      }
      const openToMiddle = () => {
        that.data.leading = props.content.slice(0, that.data.helfLineLength*Number(props.rows)) + '...'
        that.data.tailing = '...' + props.content.slice(-that.data.helfLineLength*Number(props.rows))
        that.data.btnText = openText
      }


      if (props.direction == 'end') {
        that.data.btnText == openText ? endToOpen() : openToEnd()
      }
      if (props.direction == 'start') {
        that.data.btnText == openText ? startToOpen() : openToStart()
      }
      if (props.direction == 'middle') {
        that.data.btnText == openText ? middleToOpen() : openToMiddle()
      }
    }


    const renderContent = () => {
      if (props.content.length <= this.data.oneLineLength) {
        return (
          <>
            {props.content}
          </>
        )
      }

      if (props.content.length > this.data.oneLineLength) {
        // 头部省略
        if (props.direction == 'start') {
          return (
            <a>
              {actionText}
              {this.data.content}
            </a>
          )
        }
        // 中间省略
        if (props.direction == 'middle') {
          return (
            <a>
              {this.data.leading}
              {actionText}
              {this.data.tailing}
            </a>
          )
        }
        // 尾部省略
        if (props.direction == 'end') {
          return (
            <a>
              {this.data.content}
              {actionText}
            </a>
          )
        }
      }
    }

    return (
      <ellipsis style={props.style}>
        {renderContent()}
      </ellipsis >
    )
  }
}






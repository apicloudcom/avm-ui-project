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
  }
  // 初始化显示内容
  installed = () => {
    const actionText = this.data.expanded ? this.props.collapseText : this.props.expandText
    const leading = this.props.content.slice(0, 6) + '...';
    const tailing = '...' + this.props.content.slice(-6);

    if (this.props.direction === 'start') {
      this.data.content = actionText + '...' + this.props.content.slice(-12) 
      return this.data.content
    } else if (this.props.direction === 'middle'){
      this.data.content = leading + '...' + actionText + '...' + tailing
      return this.data.content
     } else if (this.props.rows ){
      this.data.content = this.props.content.slice(0,this.props.rows*28) + "..."
      return this.data.content
    } else {
      this.data.content = this.props.content.slice(0,12) + "..." + actionText
      return this.data.content
    }
  }

  data = {
    expanded: false,
    content: " "
  }

  setExpanded = (trueOrFalse) => {
    this.data.expanded = trueOrFalse
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const that = this
    const actionText = !this.data.expanded ? props.collapseText : props.expandText

    const expandActionElement =
        <a style= "border: 1px solid white"
          onClick={() => {
            this.setExpanded(true)
            if (props.direction === 'start') {
              that.data.content =   props.content + actionText
              return that.data.content
            } else if (props.direction === 'middle') {
              that.data.content = props.content + actionText
              return that.data.content
            } else {
              that.data.content = props.content +  actionText
              return that.data.content
            }
          }}
        >
          {" "}
        </a>

    const collapseActionElement =
        <a style= "border: 1px solid white"
          onClick={() => {
            this.setExpanded(false)
              const leading = props.content.slice(0, 6) + '...';
              const tailing = '...' + props.content.slice(-6);
        
              if (props.direction === 'start') {
                that.data.content = actionText + '...' + props.content.slice(-12) + "3333"
                return that.data.content
              } else if (props.direction === 'middle') {
                that.data.content = leading + '...' + actionText + '...' + tailing
                return that.data.content
              } else {
                that.data.content = props.content.slice(0,12) + "..." + actionText
                return that.data.content
              }
          }}
        >
          {" "}
        </a>
      
    const renderContent = () => {
      if (props.content.length <= 20) {
        return props.content
      }
      // 如果展开
      if (this.data.expanded) {
        return (
          <>
            {this.data.content}
            {collapseActionElement}
          </>
        )
      } else {
        return (
          <>
            {this.data.content}
            {expandActionElement}
          </>
        )
      }
    }

    return (
      <ellipsis>
        {renderContent()}
      </ellipsis >
    )
  }
}



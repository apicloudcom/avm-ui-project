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
    const actionText = this.data.expanded ?
      <span style={{ "color": "blue" }}>{this.props.collapseText}</span> :
      <span style={{ "color": "blue" }}>{this.props.expandText}</span>
    const leading = this.props.content.slice(0, 12) + '...';
    const tailing = '...' + this.props.content.slice(-12);

    if (this.props.rows) {
      this.data.content = this.props.content.slice(0, this.props.rows * 28) + "..."
    } else if (this.props.direction === 'start') {
      this.data.content =
        <span>
          {actionText}
          <span>{"..." + this.props.content.slice(-26)}</span>
        </span>
    } else if (this.props.direction === 'middle') {
      this.data.content =
        <span>
          <span>{leading}</span>
          {actionText}
          <span>{tailing}</span>
        </span>
    } else {
      this.data.content =
        <span>
          <span>{this.props.content.slice(0, 26) + "..."}</span>
          {actionText}
        </span>
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
    const actionText = !this.data.expanded ?
      <span style={{ "color": "blue" }}>{this.props.collapseText}</span> :
      <span style={{ "color": "blue" }}>{this.props.expandText}</span>

    const expandActionElement =
      <a style="border: 1px solid white"
        onClick={() => {
          this.setExpanded(true)
          if (props.direction === 'start') {
            that.data.content =
              <span>
                <span>{props.content}</span>
                {actionText}
              </span>
          } else if (props.direction === 'middle') {
            that.data.content =
              <span>
                <span>{props.content}</span>
                {actionText}
              </span>
          } else {
            that.data.content =
              <span>
                <span>{props.content}</span>
                {actionText}
              </span>
          }
        }}
      >
        {" "}
      </a>

    const collapseActionElement =
      <a style="border: 1px solid white"
        onClick={() => {
          this.setExpanded(false)
          const leading = props.content.slice(0, 12) + '...';
          const tailing = '...' + props.content.slice(-12);

          if (this.props.direction === 'start') {
            this.data.content =
              <span>
                {actionText}
                <span>{"..." + this.props.content.slice(-26)}</span>
              </span>
          } else if (this.props.direction === 'middle') {
            this.data.content =
              <span>
                <span>{leading}</span>
                {actionText}
                <span>{tailing}</span>
              </span>
          } else {
            this.data.content =
              <span>
                <span>{this.props.content.slice(0, 26) + "..."}</span>
                {actionText}
              </span>
          }
        }}
      >
        {" "}
      </a>

    const renderContent = () => {
      if (props.content.length <= 28) {
        return props.content
      }
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



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
    console.log(this.props.direction)
    this.props = mergeProps(defaultProps, this.props)
  }



  data = {
    // 判断文本是展开还是关闭
    check: true,
    // 展开与收起按钮 字符串
    expandOrNotText: this.props.expandText ? this.props.expandText : '',
    // 初始的展示行数
    content: this.props.rows  ? this.props.content  : this.props.content.slice(0,23) + '...',

  }

  // 默认的样式
  defaultStyle = {
    'width': '100%',
    'word-break': 'break-all',
    'display': '-webkit-box',
    '-webkit-line-clamp': this.props.rows ? this.props.rows.toString() : '1',
    '-webkit-box-orient': 'vertical',
    'overflow': 'hidden'
  };

  // 展开和收起的样式
  expandAndCollapseStyle = {
    'display': 'inline-block',
    'white-space': 'nowrap',
    'width': '100%',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
  };

  expandedTextStyle = {
    'color': 'blue',
  }

  render = props => {
    props = mergeProps(defaultProps, props)


    const onClick = () => {
      // 如果展开了 -就关闭
      if (this.data.check) {
        this.data.check = !this.data.check// 更改if判断条件
        this.data.expandOrNotText = props.collapseText// 更换按钮
        this.data.content = props.content// 更换点击之后的内容
        return this.data.content// 返回更改好的内容
        // 如果关闭了，就展开
      } else {
        this.data.check = !this.data.check
        this.data.expandOrNotText = props.expandText
        this.data.content = this.data.content.slice(0,23) + '...'
        return this.data.content
      }
    }

    // 如果没有传入展开关闭操作，就返回默认样式，如果传入了，就返回展开和收起状态
    const style = (expand, collapse) => {
      if (expand || collapse) {
        return 
      } else {
        return this.defaultStyle
      }
    }


    return (
      <ellipsis 
      style={style(props.expandText, props.collapseText)} 
      >
        {this.data.content}
        <a 
        style = {this.expandedTextStyle} 
        onClick={onClick} 
        > 
        {this.data.expandOrNotText}
        </a>
      </ellipsis >
    )
  }

}

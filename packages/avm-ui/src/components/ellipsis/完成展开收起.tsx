import classNames from "classnames";
import { mergeProps } from '../../utils/with-default-props'
const classPrefix = `adm-Ellipsis`;



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


  data = {
    // 判断文本是展开还是关闭
    check: true,
    // 展开与收起按钮 字符串
    expandOrNotText: this.props.expandText,
    // 初始的展示行数
    content: this.props.content.slice(0, 15) + "...",

  }


  render = props => {
    props = mergeProps(defaultProps, props)

    // 判断传入的参数有没有展开 收起参数，没有的话就自然省略第一行


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
        this.data.content = this.data.content.slice(0, 15) + "..."
        this.data.expandOrNotText = props.expandText
        return this.data.content
      }
    }


    return (
      <ellipsis>
        {this.data.content}
        <a onClick={onClick} >{this.data.expandOrNotText}</a>
      </ellipsis>
    )
  }

}

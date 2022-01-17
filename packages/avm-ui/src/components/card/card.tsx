// import { nodeOrText } from '../../utils/node-or-text'
import classNames from 'classnames'

const classPrefix = `adm-card`

export type CardProps = {
  title?: string
  extra?: string
  headerStyle?: object
  headerClassName?: string
  bodyStyle?: object
  bodyClassName?: string
  onClick?: () => void
  onBodyClick?: () => void
  onHeaderClick?: () => void
}

export class Card extends Component {
  render = props => {
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null
      }

      return (
        <div
          className={classNames(`${classPrefix}-header`, props.headerClassName)}
          style={props.headerStyle}
          onClick={props.onHeaderClick}
        >
          {props.title.children ? props.title :
            <text className={`${classPrefix}-header-title`} style={props.headerStyle}>{props.title}</text>}
          {props.extra ? props.extra : <text>{props.extra}</text>}
        </div>
      )
    }
    const renderBody = () => {
      if (!props.children) {
        return null
      }
      let children = ''
      props.children.map(item => {
        if (typeof item === 'string') {
          children = <text class={props.bodyClassName}>{item}</text>
        } else {
          children = props.children
        }
      })
      console.log(children)
      return (
        <div
          className={classNames(`${classPrefix}-body`, props.bodyClassName)}
          style={props.bodyStyle}
          onClick={props.onBodyClick}
        >
          {children}
        </div>
      )
    }
    return (
      <div className={classPrefix} onClick={props.onClick}>
        {renderHeader()}
        {renderBody()}
      </div>
    )
  }
}

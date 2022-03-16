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
  
  css = () => {
    return `:root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .adm-card {
      background: #ffffff;
      border-radius: 8px;
      padding: 0 12px;
    }
    .adm-card-header {
      position: relative;
      display: flex;
      flex-direction: initial;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 12px 0;
    }
    .adm-card-header:not(:last-child) {
      border-bottom: solid 0.5px var(--adm-border-color);
    }
    .adm-card-header-title {
      font-size: 15px;
      line-height: 1.4;
      font-weight: bold;
    }
    .adm-card-body {
      padding: 12px 0;
    }`
  }
}

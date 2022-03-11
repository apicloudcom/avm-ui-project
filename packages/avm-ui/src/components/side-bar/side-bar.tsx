import classNames from '../../utils/classnames'
import { NativeProps } from '../../utils/native-props'
import { Badge } from '../badge/badge'

const classPrefix = `adm-side-bar`

export type SideBarItemProps = {
  key?: string
  title?: string
  disabled?: boolean
  badge?: HTMLElement
} & NativeProps

export class SideBarItem extends Component {
  render = () => {
    return (
      null
    )
  }
}

export type SideBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps<'--width' | '--height' | '--item-border-radius'>


export class SideBar extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey
  }
  activeItem = (val) => {
    if (!val.attributes.disabled) {
      this.data.activeKey = val.attributes.key
      this.props.onChange && this.props.onChange(val.attributes.key)
    }
  }
  render = props => {

    const { children } = props

    const fontWeight = {
      fontWeight: 'bold'
    }
    const fontWeightNormal = {
      fontWeight: 'normal'
    }

    let customizeWidth = ''
    if (props.style) {
      customizeWidth = props.style.split(':')[1]
    }
    const back = {
      'width': customizeWidth || '96px'
    }

    return (
      <div style={back} className={classNames(classPrefix)}>
        {
          children.map(item => {
            return (
              <div style={back} onClick={this.activeItem.bind(this, item)} className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: this.data.activeKey == item.attributes.key,
                [`${classPrefix}-item-disabled`]: item.attributes.disabled,
              })}>
                <Badge content={item.attributes.badge}>
                  <span style={this.data.activeKey == item.attributes.key ? fontWeight : fontWeightNormal} className={classNames(`${classPrefix}-item-active-none`, {
                    [`${classPrefix}-item-text`]: this.data.activeKey == item.attributes.key,
                    [`${classPrefix}-item-disabled`]: item.attributes.disabled,
                  })}>{item.attributes.title}</span>
                </Badge>
              </div>
            )
          })
        }
      </div>
    )
  }

  css = () => {
    return `
    :root {
      --adm-color-primary: #1677ff;
      --adm-color-success: #00b578;
      --adm-color-warning: #ff8f1f;
      --adm-color-danger: #ff3141;
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
    .active-color {
      color: var(--adm-color-primary);
    }
    .adm-side-bar {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 15px;
      overflow-y: auto;
    }
    .adm-side-bar-item {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      padding: 6px 22px;
      font-size: 15px;
      position: relative;
      cursor: pointer;
      background-color: #f5f5f5;
    }
    .adm-side-bar-item-active {
      background-color: #fff;
      font-weight: bold;
      position: relative;
      color: #000;
    }
    .adm-side-bar-item-active-none {
      color: #000;
    }
    .adm-side-bar-item-text {
      font-weight: bold;
      color: #000;
    }
    .adm-side-bar-item-disabled {
      cursor: not-allowed;
      color: #000;
      opacity: 0.4;
    }
   `
  }
}

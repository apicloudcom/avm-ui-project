import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { DropdownItem } from './item'
import classNames from '../../utils/classnames'
import { Popup } from '../popup/popup'
import '../popup/popup.less'
import { Icon } from '../icon/icon'


const classPrefix = `adm-dropdown`


export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  closeOnClickAway?: boolean
  onChange?: (key: string | null) => void
  arrow?:HTMLElement 
  // mask?: boolean;
} & NativeProps


const defaultProps = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: true,
  activeKey: '',
  arrow:<Icon code={59948} />
}


export class Dropdown extends Component {

  data = {
    visible: false,
    children: [],
    activeKey: this.props.activeKey || this.props.defaultActiveKey,
    list: [],
    isActived: true,
  }
  setVisible = (v, key) => {
    if (key === this.data.activeKey) {
      this.data.visible = false
      this.data.activeKey = ''
    } else {
      this.props.onChange?.(key);
      this.props.children.forEach(item => {
        if (item.key === key) {
          this.data.list = item.children
        }
      })
      this.data.visible = v
      this.data.activeKey = key
    }
  }

  render = props => {
    
    props = mergeProps(defaultProps, props)
    console.log(props,123123123);
    
    const { children } = props
    if (props.activeKey && this.data.isActived) {
      this.data.visible = true
      this.data.isActived = false
      this.props.children.forEach(item => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children
        }
      })
    } else if (props.defaultActiveKey && this.data.isActived) {
      this.data.visible = true
      this.data.isActived = false
      this.props.children.forEach(item => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children
        }
      })
    }
    this.data.children = children
    return (
      <div className="container">
        <div className={classPrefix}>
          {
            children.map(item => {
              return (
                <div {...item.attributes} className={`${classPrefix}-item`} onClick={
                  this.setVisible.bind(this, true, item.key)
                }>
                  <span className={classNames(`${classPrefix}-default`, {
                    [`${classPrefix}-active`]: item.key === this.data.activeKey,
                    [`${classPrefix}-default`]: item.key !== this.data.activeKey,
                  })}>
                    {item.attributes.title}
                  </span>
                  <div className={classNames('', {
                    ['container-icon']: item.key === this.data.activeKey,
                    ['default-icon']: item.key !== this.data.activeKey,
                  })}>{props.arrow}
                  </div>
                </div>
              )
            })
          }
        </div>
        <Popup
          className={'pop'}
          visible={this.data.visible}
          position="top"
          onMaskClick={() => {
            if (props.closeOnMaskClick && props.closeOnClickAway) {
              this.setVisible(false, '')
              this.data.list = []
              this.data.visible = false
            }
          }}
        >
          <DropdownItem className={`${classPrefix}-item`} onClick={this.setVisible.bind(this, true)}>{this.data.list}</DropdownItem>
        </Popup>
      </div>
    )
  }
  css = ()=>{
    return `
    :root {
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
    .container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .pop {
      position: absolute;
      width: 100%;
      top: 50px;
      height: 100%;
    }
    .adm-dropdown {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-top: 1px solid var(--adm-border-color);
      border-bottom: 1px solid var(--adm-border-color);
    }
    .adm-dropdown-item {
      flex: 1;
      flex-direction: row;
      padding: 12px;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      cursor: pointer;
    }
    .adm-dropdown-default {
      color: #000;
    }
    .adm-dropdown-active {
      color: #9AC200;
    }
    .adm-dropdown .container-icon {
      transform: rotate(180deg) translateY(0px);
      transition: all 0.2s ease;
    }
    .adm-dropdown .adm-icon {
      font-size: 8px;
    }
    .adm-dropdown .default-icon {
      transition: all 0.2s ease;
      transform: rotate(0deg) translateY(1px);
    }
    .adm-popup {
      top: 50px;
    }
    .adm-popup-body-position-top {
      padding: 12px;
    }
    

    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }
    
    .adm-popup {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .adm-popup-body {
      position: absolute;
      background-color: #fff;
    }
    .adm-popup-body-position-bottom {
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .adm-popup-body-position-top {
      width: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-left {
      height: 100%;
      top: 0;
      left: 0;
    }
    .adm-popup-body-position-right {
      height: 100%;
      top: 0;
      right: 0;
    }
    
    `
  }
}
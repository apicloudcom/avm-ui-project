import classNames from '../../utils/classnames'
import { formatLabel } from '../../utils/format-label'

const classPrefix = `adm-popover`

const defaultProps = {
  mode: 'light',
  isMenu: false,
  placement: 'top',
  visible: false,
  zIndex: 1030,
  content: null
}

export class Popover extends Component {
  data = {
    visible: this.props.visible || false,
    boxRect: {},
    popupRect: {}
  }
  render = props => {
    this.props = Object.assign({}, defaultProps, props)

    let {
      children,
      mode,
      isMenu,
      placement,
      visibleChange,
      zIndex,
      content,
      actions,
      isHorizontalMenu,
      id,
      popupId
    } = this.props;
    // const boxId = `adm-popover`
    // const popupId = `adm-popover-popup`
    const boxRect = document.getElementById(id)?.getBoundingClientRect()
    const popupRect = document.getElementById(popupId)?.getBoundingClientRect()
    let popupStyle: any = { zIndex, visibility: this.data.visible === true ? 'visible' : 'hidden' }
    let sharpStyle: any = {}
    if (['top', 'top-start', 'top-end'].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        top: `${-((popupRect?.height || 0) + (boxRect?.height || 0) - 20)}px`
      }
      sharpStyle = {
        transform: 'rotate(180deg)',
        bottom: '-20px'
      }
    }
    if (['bottom', 'bottom-start', 'bottom-end'].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        bottom: `${-((popupRect?.height || 0) + (boxRect?.height || 0) - 20)}px`
      }
      sharpStyle = {
        transform: 'rotate(0)',
        top: '-20px'
      }
    }
    if (["left", "left-start", "left-end"].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        left: `${-((popupRect?.width || 0) + 10)}px`
      };
      sharpStyle = {
        transform: "rotate(90deg)",
        right: "-20px"
      };
    }
    if (["right", "right-start", "right-end"].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        right: `${-((popupRect?.width || 0) + 10)}px`
      };
      sharpStyle = {
        transform: "rotate(-90deg)",
        left: "-20px"
      };
    }
    if (['top', 'bottom'].includes(placement)) {
      sharpStyle.left = `${((popupRect?.width || 0) - 10) / 2}px`
      popupStyle.left = `${-(((popupRect?.width || 0) - (boxRect?.width || 0)) / 2)}px`
    } else if (['top-start', 'bottom-start'].includes(placement)) {
      sharpStyle.left = '20px'
      popupStyle.left = 0
    } else if (['top-end', 'bottom-end'].includes(placement)) {
      sharpStyle.right = '20px'
      popupStyle.right = 0
    }
    if (placement === "left" || placement === 'right') {
      popupStyle.top = `${-(((popupRect?.height || 0) - (boxRect?.height || 0)) / 2)}px`
      sharpStyle.top = `${((popupRect?.height || 0) - 10) / 2}px`;
    } else if (placement === "left-start" || placement === 'right-start') {
      sharpStyle.top = "0";
      popupStyle.top = 0
    } else if (placement === "left-end" || placement === 'right-end') {
      sharpStyle.bottom = "0";
      popupStyle.bottom = 0
    }
    // 弹出框cls
    const popupCls = classNames(
      `${classPrefix}-popup`,
      `${classPrefix}-popup-${mode}`,
      {
        [`${classPrefix}-popup-default`]: !isHorizontalMenu,
        [`${classPrefix}-popup-horizontal`]: isHorizontalMenu
      }
    )
    // 箭头指示cls
    const sharpCls = classNames(
      `${classPrefix}-popup-sharp`,
      `${classPrefix}-popup-sharp-${mode}`
    )

    // 非菜单文本cls
    const popupTextCls = classNames(
      `${classPrefix}-popup-text`,
      `${classPrefix}-popup-text-${mode}`
    )

    // 菜单cls
    const popupMenuCls = classNames(
      `${classPrefix}-popup-menu`,
      `${classPrefix}-popup-menu-${mode}`, {
        [`${classPrefix}-popup-menu-default`]: !isHorizontalMenu,
        [`${classPrefix}-popup-menu-horizontal`]: isHorizontalMenu
      }
    )

    // 菜单子元素cls
    const popupMenuItemCls = classNames(
      `${classPrefix}-popup-menu-item`, {
        [`${classPrefix}-popup-menu-horizontal-item`]: isHorizontalMenu,
        [`${classPrefix}-popup-menu-default-item`]: !isHorizontalMenu
      }
    )

    // 菜单子元素-img-cls
    const popupMenuItemImgCls = classNames(
      `${classPrefix}-popup-menu-item-img`, {
        [`${classPrefix}-popup-menu-horizontal-item-img`]: isHorizontalMenu
      }
    )

    // 菜单子元素-文本-cls
    const popupMenuItemTextCls = classNames(
      `${classPrefix}-popup-menu-item-text`,
      `${classPrefix}-popup-menu-item-text-${mode}`, {
        [`${classPrefix}-popup-menu-horizontal-item-text`]: isHorizontalMenu
      }
    )

    return (
      <div className={classPrefix}>
        <div className={`${classPrefix}-con`} id={id} onClick={() => {
          this.data.visible = !this.data.visible
          visibleChange?.()
        }}>
          {formatLabel(children)}
        </div>
        <div style={popupStyle} id={popupId} className={popupCls}>
          <div className={sharpCls} style={sharpStyle}></div>
          {!isMenu && <span className={popupTextCls}>{content}</span>}
          {isMenu && actions && <div className={popupMenuCls}>
            {
              actions.map((item, index) => {
                const { key, text, icon, disabled } = item;
                return (
                  <div className={classNames(popupMenuItemCls, {
                    [`${classPrefix}-popup-menu-item-disabled`]: disabled,
                    [`${classPrefix}-popup-menu-item-nobottom-border`]: index === actions.length - 1,
                  })} key={key}
                  onClick={() => {
                      this.props.actionClick?.(item)
                    }}>
                    {icon && <img src={icon} alt="icon" className={popupMenuItemImgCls}/>}
                    <span className={classNames(popupMenuItemTextCls, {
                      [`${classPrefix}-popup-menu-item-text-center`]: !icon
                    })}>{text}</span>
                  </div>
                )
              })
            }
          </div>}
        </div>
      </div>
    )
  }

  css = () => {
    return `
    .adm-popover-popup {
      position: absolute;
      align-items: center;
      justify-content: center;
    }
    .adm-popover-popup-default {
      width: 128px;
    }
    .adm-popover-popup-horizontal {
      width: 288px;
    }
    .adm-popover-popup-light {
      background: #f5f5f5;
    }
    .adm-popover-popup-dark {
      background: #333;
    }
    .adm-popover-popup-text {
      color: #333;
      font-size: 14px;
      padding: 12px;
    }
    .adm-popover-popup-text-dark {
      color: #fff;
    }
    .adm-popover-popup-sharp {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: #f5f5f5;
    }
    .adm-popover-popup-sharp-dark {
      border-bottom-color: #333;
    }
    .adm-popover-popup-menu-light {
      background: #f5f5f5;
    }
    .adm-popover-popup-menu-dark {
      background: #333;
    }
    .adm-popover-popup-menu-item {
      display: flex;
      padding: 10px 0;
      border-bottom: 0.5px solid #e8e8e8;
    }
    .adm-popover-popup-menu-item-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .adm-popover-popup-menu-item-nobottom-border {
      border-bottom: none;
    }
    .adm-popover-popup-menu-item-text {
      font-size: 14px;
      color: #333;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .adm-popover-popup-menu-item-text-dark {
      color: #fff;
    }
    .adm-popover-popup-menu-item-text-center {
      text-align: center;
    }
    .adm-popover-popup-menu-item-img {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
    .adm-popover-popup-menu-default {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 14px;
    }
    .adm-popover-popup-menu-default-item {
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    .adm-popover-popup-menu-horizontal {
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      max-width: 288px;
    }
    .adm-popover-popup-menu-horizontal-item {
      padding: 0;
      width: 72px;
      height: 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: none;
    }
    .adm-popover-popup-menu-horizontal-item-img {
      margin-bottom: 8px;
      margin-right: 0;
    }
    .adm-popover-popup-menu-horizontal-item-text {
      flex: none;
      width: 100%;
      text-align: center;
    }
    `
  }
}

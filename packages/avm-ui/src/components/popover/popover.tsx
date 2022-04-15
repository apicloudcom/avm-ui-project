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
      isHorizontalMenu
    } = this.props;
    const boxId = `adm-popover`
    const popupId = `adm-popover-popup`
    const boxRect = document.getElementById(boxId)?.getBoundingClientRect()
    const popupRect = document.getElementById(popupId)?.getBoundingClientRect()
    let popupStyle: any = {zIndex, visibility: this.data.visible === true ? 'visible': 'hidden'}
    let sharpStyle: any = {}
    if (['top', 'top-start', 'top-end'].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        top: `-${(popupRect?.height || 0) + (boxRect?.height || 0) - 20}px`
      }
      sharpStyle = {
        transform: 'rotate(180deg)',
        bottom: '-20px'
      }
    }
    if (['bottom', 'bottom-start', 'bottom-end'].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        bottom: `-${(popupRect?.height || 0) + (boxRect?.height || 0) - 20}px`
      }
      sharpStyle = {
        transform: 'rotate(0)',
        top: '-20px'
      }
    }
    if (["left", "left-start", "left-end"].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        left: `-${(popupRect?.width || 0) + 10}px`
      };
      sharpStyle = {
        transform: "rotate(90deg)",
        right: "-20px"
      };
    }
    if (["right", "right-start", "right-end"].includes(placement)) {
      popupStyle = {
        ...popupStyle,
        right: `-${(popupRect?.width || 0) + 10}px`
      };
      sharpStyle = {
        transform: "rotate(-90deg)",
        left: "-20px"
      };
    }
    if (['top', 'bottom'].includes(placement)) {
      sharpStyle.left = `${((popupRect?.width || 0) - 10)/2}px`
      popupStyle.left = `-${((popupRect?.width || 0) - (boxRect?.width || 0)) / 2}px`
    } else if (['top-start', 'bottom-start'].includes(placement)) {
      sharpStyle.left = '20px'
      popupStyle.left = 0
    } else if (['top-end', 'bottom-end'].includes(placement)) {
      sharpStyle.right = '20px'
      popupStyle.right = 0
    }
    if (placement === "left" || placement === 'right') {
      popupStyle.top = `-${((popupRect?.height || 0) - (boxRect?.height || 0)) / 2}px`
      sharpStyle.top = `${((popupRect?.height || 0) - 10) / 2}px`;
    } else if (placement === "left-start" || placement === 'right-start') {
      sharpStyle.top = "0";
      popupStyle.top = 0
    } else if (placement === "left-end" || placement === 'right-end') {
      sharpStyle.bottom = "0";
      popupStyle.bottom = 0
    }
    return (
      <div className={classPrefix}>
        <div className={`${classPrefix}-con`} id={boxId} onClick={() => {
          this.data.visible = !this.data.visible
          visibleChange?.()
        }}>
          {formatLabel(children)}
        </div>
        <div style={popupStyle} id={popupId} className={classNames(
          `${classPrefix}-popup`,
          `${classPrefix}-popup-${mode}`,
          {
            [`${classPrefix}-popup-horizontal`]: isHorizontalMenu
          }
        )}>
          <div className={classNames(`${classPrefix}-popup-sharp`, `${classPrefix}-popup-sharp-${mode}`)} style={sharpStyle}></div>
          {!isMenu && <span className={classNames(`${classPrefix}-popup-text`, `${classPrefix}-popup-text-${mode}`)}>{content}</span>}
          {isMenu && actions && <div className={classNames(`${classPrefix}-popup-menu`, {
            [`${classPrefix}-popup-menu-horizontal`]: isHorizontalMenu
          })}>
            {
              actions.map(item => {
                const {key, text, icon, disabled} = item;
                return (
                  <div className={classNames(`${classPrefix}-popup-menu-item`, {
                    [`${classPrefix}-popup-menu-item-disabled`]: disabled,
                    [`${classPrefix}-popup-menu-item-horizontal`]: isHorizontalMenu
                  })} key={key}>
                    {icon && <img src={icon} alt="icon" className={classNames(`${classPrefix}-popup-menu-item-img`, {
                      [`${classPrefix}-popup-menu-item-horizontal-img`]: isHorizontalMenu
                    })}/>}
                    <span className={classNames(`${classPrefix}-popup-menu-item-text`, `${classPrefix}-popup-menu-item-text-${mode}`)}>{text}</span>
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
    
    `
  }
}

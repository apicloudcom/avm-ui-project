import classNames from '../../utils/classnames'
import Mask from '../mask'
import {GetContainer} from '../../utils/render-to-container'
import { useShouldRender } from '../../utils/use-should-render'
import {PropagationEvent} from '../../utils/with-stop-propagation'
import { formatLabel } from '../../utils/format-label'

import Icon  from '../icon'

const classPrefix = `adm-popup`

export type PopupProps = {
  visible?: boolean
  mask?: boolean
  onMaskClick?: (event: any) => void
  destroyOnClose?: boolean
  forceRender?: boolean
  getContainer?: GetContainer
  afterShow?: () => void
  afterClose?: () => void
  position?: 'bottom' | 'top' | 'left' | 'right'
  bodyClassName?: string
  bodyStyle?: any
  maskClassName?: string
  maskStyle?: any
  onClick?: (event: any) => void
  stopPropagation?: PropagationEvent[]
}

const defaultProps = {
  position: 'bottom',
  visible: false,
  getContainer: () => document.body,
  mask: true,
  stopPropagation: ['click'],
  bodyStyle: {},
  isTitle: false,
  titleText: '标题'
}

export class Popup extends Component {
  data = {
    visible: this.props.visible
  }
  setVisible = visible => {
    if (visible) {
      this.props.afterShow && this.props.afterShow()
    }
    this.data.visible = visible
  }
  render = props => {
    this.props = Object.assign({}, defaultProps, props)
    this.data.visible = props.visible

    let {
      zIndex=1000,
      bodyClassName,
      position,
      forceRender=false,
      destroyOnClose=false,
      stopPropagation,
      onClick,
      mask, 
      onMaskClick,
      maskClassName,
      maskStyle,
      bodyStyle,
      children,
      isTitle,
      titleText,
      isBack,
      onClose,
      onBack,
      tipText,
      isFooterBtn,
      footBtnClick,
      bodyHeight,
      bodyWidth
    } = this.props;
    if (['top', 'bottom'].includes(position)) {
      !bodyHeight && (bodyHeight = '375px')
      bodyStyle = {...bodyStyle, height: bodyHeight}
    }

    if (['left', 'right'].includes(position)) {
      !bodyWidth && (bodyWidth = '311px')
      bodyStyle = {...bodyStyle, width: bodyWidth}
    }

    const bodyCls = classNames(
      `${classPrefix}-body`,
      bodyClassName,
      `${classPrefix}-body-position-${position}`
    )

    const shouldRender = useShouldRender(
      this.data.visible,
      forceRender,
      destroyOnClose
    )
    return (
      <div
        className={classNames(classPrefix, props.className)}
        onClick={() => {
          onClick && onClick();
        }}
        style={{display: this.data.visible ? 'flex' : 'none', zIndex}}
      >
        {mask && (
          <Mask
            visible={props.visible}
            onMaskClick={() => {
              onMaskClick && onMaskClick()
            }}
            className={maskClassName}
            style={maskStyle}
            disableBodyScroll={false}
            stopPropagation={stopPropagation}
          />
        )}
        <div
          className={bodyCls}
          style={{
            ...bodyStyle,
            zIndex: zIndex + 10
          }}>
          {isTitle && (
          <div className={`${classPrefix}-title`}>
            {isBack && <div className={`${classPrefix}-title-back`} onClick={() => {onBack && onBack()}}><Icon code={59988} fontSize="18" color="#bbb"/><span className={`${classPrefix}-title-back-text`}>返回</span></div>}
            <div className={`${classPrefix}-title-con`}>
              <span className={`${classPrefix}-title-text`}>{titleText}</span>
              {tipText && <div title={tipText}><Icon code={59940} fontSize="18" color="#bbb"/></div>}
            </div>
            <div onClick={() => {onClose && onClose()}}>
              <Icon code={59940} fontSize="18" color="#bbb"/>
            </div>
          </div>
          )}
          {shouldRender && formatLabel(children)}
          {isFooterBtn && <div className={`${classPrefix}-footer`}>
              <button onClick={() => {footBtnClick && footBtnClick()}} className={`${classPrefix}-footer-btn`}>确定</button>
          </div>}
        </div>
      </div>
    )
  }

  css = () => {
    return `
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
        border-radius: 12px 12px 0 0;
      }
      .adm-popup-body-position-top {
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 0 0 12px 12px;
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
      .adm-popup-title {
        display: flex;
        flex-direction: row;
        height: 50px;
        align-items: center;
        padding: 0 16px;
      }
      .adm-popup-title-con {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-title-text {
        text-align: center;
        font-size: 16px;
        color: #333330;
        font-weight: 500;
        margin-right: 6px;
      }
      .adm-popup-title-back {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .adm-popup-title-back-text {
        font-size: 15px;
        color: #BBBBBB;
        padding-left: 8px;
      }
      .adm-popup-footer {
        position: absolute;
        bottom: 8px;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-footer-btn {
        width: 95%;
        height: 44px;
        background: #9AC200;
        border-radius: 4px;
        color: #fff;
        border: none;
      }
    `
  }
}

import classNames from '../../utils/classnames'
import { mergeProps } from '../../utils/with-default-props'
import Mask from '../mask'
import {GetContainer} from '../../utils/render-to-container'
import { useShouldRender } from '../../utils/use-should-render'
import {PropagationEvent} from '../../utils/with-stop-propagation'
import { formatLabel } from '../../utils/format-label'

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
  bodyStyle: {}
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
    this.props = mergeProps(defaultProps, props)
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
    } = this.props; 


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
          {shouldRender && formatLabel(children)}
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

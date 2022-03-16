import {GetContainer} from '../../utils/render-to-container'
import {mergeProps} from '../../utils/with-default-props'
import {useShouldRender} from '../../utils/use-should-render'
import {PropagationEvent} from '../../utils/with-stop-propagation'

const classPrefix = `adm-mask`

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
}
export type MaskProps = {
  visible?: boolean
  onMaskClick?: () => void
  destroyOnClose?: boolean
  forceRender?: boolean
  disableBodyScroll?: boolean
  color?: 'black' | 'white'
  opacity?: 'default' | 'thin' | 'thick' | number
  getContainer?: GetContainer
  // afterShow?: () => void
  // afterClose?: () => void
  stopPropagation?: PropagationEvent[]
}

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click'],
}

export class Mask extends Component {
  render = (p) => {
    const props = mergeProps(defaultProps, p)
    const opacity = opacityRecord[props.opacity] ?? props.opacity
    const rgb = props.color === 'white' ? '255, 255, 255' : '0, 0, 0'
    const background = `rgba(${rgb}, ${opacity})`

    // 页面存在多个会覆盖
    // if (props.visible) {
    //   props.afterShow?.()
    // } else {
    //   props.afterClose?.()
    // }

    const shouldRender = useShouldRender(
      props.visible,
      props.forceRender,
      props.destroyOnClose
    )
    return <div
      className={classPrefix}
      style={{
        ...props.style,
        background,
        display: props.visible ? 'flex' : 'none',
      }}
    >
      {props.onMaskClick && (
        <div
          className={`${classPrefix}-aria-button`}
          role='button'
          aria-label='Mask'
          onClick={props.onMaskClick}
        />
      )}
      <div className={`${classPrefix}-content`} onClick={props.onMaskClick}>
        {shouldRender && props.children}
      </div>
    </div>
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
    }`
  }
}
import classNames from "../../utils/classnames";

import {mergeProps} from '../../utils/with-default-props'

const classPrefix = `adm-button`;

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button',
  onClick: void,
  children: any
}

const defaultProps = {
  color: 'default',
  fill: 'solid',
  size: 'middle',
  block: false,
  disabled: false,
  loading: false,
  type: 'button',
  shape: 'default',
  style: {}
}

const colorAttr = {
  default: {
    textColor: '#333',
    bgColor: '#fff',
    borderColor: '#eee'
  },
  primary: {
    textColor: '#fff',
    bgColor: '#1677ff',
    borderColor: '#1677ff'
  },
  success: {
    textColor: '#fff',
    bgColor: '#00b578',
    borderColor: '#00b578'
  },
  warning: {
    textColor: '#fff',
    bgColor: '#ff8f1f',
    borderColor: '#ff8f1f'
  },
  danger: {
    textColor: '#fff',
    bgColor: '#ff3141',
    borderColor: '#ff3141'
  }
}

const shapeAttr = {
  default: '4px',
  rounded: '1000px',
  rectangular: 0
}

 export class Button extends Component {
  install = () => {
    console.log("Button !")
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const disabled = props.disabled || props.loading

    const {textColor, color, bgColor, borderRadius, shape, borderWidth, borderStyle, borderColor} = props

    const btnStyles = {
      height: 'auto',
      lineHeight: 1.4,
      opacity: disabled ? 0.4 : 1,
      color: textColor || colorAttr[color].textColor,
      backgroundColor: bgColor || colorAttr[color].bgColor,
      borderRadius: borderRadius || shapeAttr[shape],
      borderWidth,
      borderStyle,
      borderColor: borderColor || colorAttr[color].borderColor
    };

    const btnCls = classNames(
      classPrefix,
      props.className,
      props.color ? `${classPrefix}-${props.color}` : null,
      {
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-${props.color}-fill-outline`]: props.fill === 'outline',
        [`${classPrefix}-${props.color}-fill-none`]: props.fill === 'none',
        [`${classPrefix}-mini`]: props.size === 'mini',
        [`${classPrefix}-mini-shape-${props.shape}`]: props.size === 'mini',
        [`${classPrefix}-small`]: props.size === 'small',
        [`${classPrefix}-large`]: props.size === 'large',
        [`${classPrefix}-loading`]: props.loading
      },
      `${classPrefix}-shape-${props.shape}`
    )

    return (
      <button
        type={props.type}
        onClick={props.onClick}
        className={btnCls}
        disabled={disabled}
        style={{...btnStyles, ...props.style}}>
        {props.loading ? (props.loadingText) : (props.children)}
      </button>
    )
  }

  test() {
    api.alert({
      msg: "Button"
    })
  }

  css = () => {
    return `
   /* temp_stylePlugin:/var/folders/k8/fz71r0pd1gb70k2pmgd9b54m0000gn/T/2022210-13320-3gijym.o0r79.css */
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
.adm-button {
  border: 1px solid #eee;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 7px 16px;
  margin: 0;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  transition: opacity ease 0.15s;
  user-select: none;
}
.adm-button-block {
  display: block;
  width: 100%;
}
.adm-button-disabled {
  cursor: not-allowed;
}
.adm-button-disabled:active::before {
  display: none;
}
.adm-button-mini {
  padding: 3px 7px;
  font-size: 13px;
}
.adm-button-mini-shape-rounded {
  padding-left: 9px;
  padding-right: 9px;
}
.adm-button-small {
  padding: 3px 11px;
  font-size: 15px;
}
.adm-button-large {
  padding: 11px 22px;
  font-size: 18px;
}
.adm-button-shape-rounded {
  border-radius: 1000px;
}
.adm-button-shape-rectangular {
  border-radius: 0;
}
.adm-button-loading {
  vertical-align: bottom;
  background-image: url(./loading.png);
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  padding-left: 24px;
}

   `
  }
}

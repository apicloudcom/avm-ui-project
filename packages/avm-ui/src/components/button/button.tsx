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
    bgColor: '#9AC200',
    borderColor: '#9AC200'
  },
  success: {
    textColor: '#fff',
    bgColor: '#7FA000',
    borderColor: '#7FA000'
  },
  warning: {
    textColor: '#fff',
    bgColor: '#FFA600',
    borderColor: '#FFA600'
  },
  danger: {
    textColor: '#fff',
    bgColor: '#FA6400',
    borderColor: '#FA6400'
  }
}

const shapeAttr = {
  default: '4px',
  rounded: '1000px',
  rectangular: 0
}

export class Button extends Component {
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

  css = () => {
    return `
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

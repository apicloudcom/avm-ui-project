import mergeStyle from '../../utils/mergeStyle';

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
  color: 'success',
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
    props = Object.assign({}, defaultProps, props)
    const disabled = props.disabled || props.loading
    const {textColor, color, bgColor, borderRadius, shape, borderWidth, borderStyle, borderColor, fill} = props
    const btnStyles = {
      height: 'auto',
      lineHeight: 1.4,
      opacity: disabled ? 0.4 : 1,
      color: textColor || (fill === 'solid' ? colorAttr[color].textColor : colorAttr[color].bgColor),
      backgroundColor: bgColor || (fill === 'solid' ? colorAttr[color].bgColor : colorAttr[color].textColor),
      borderRadius: borderRadius || shapeAttr[shape],
      borderWidth,
      borderStyle: fill === 'none' ? 'none' : borderStyle,
      borderColor: borderColor || (colorAttr[color].borderColor)
    };

    const btnCls = classNames(
      classPrefix,
      props.class,
      props.color ? `${classPrefix}-${props.color}` : null,
      {
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-${props.color}-fill-outline`]: fill === 'outline',
        [`${classPrefix}-${props.color}-fill-none`]: fill === 'none',
        [`${classPrefix}-${props.size}`]: true,
        [`${classPrefix}-loading`]: props.loading
      },
      `${classPrefix}-shape-${props.shape}`
    )

    const {style, ...restProps} = props;

    return (
      <button
        type={props.type}
        className={btnCls}
        disabled={disabled}
        style={mergeStyle(btnStyles, style)}
        {...restProps}
      >
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
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  transition: opacity ease 0.15s;
  user-select: none;
  font-weight:500;
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
  padding: 2px 7px;
  font-size: 12px;
}
.adm-button-mini-shape-rounded {
  padding-left: 9px;
  padding-right: 9px;
}
.adm-button-small {
  padding: 6px 11px;
  font-size: 15px;
}

.adm-button-middle {
  padding: 10px 20px;
  font-size: 16px;
}

.adm-button-large {
  padding: 12px 22px;
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

import mergeStyle from '../../utils/mergeStyle';
import css from './button.less';

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
  css = () => css
}

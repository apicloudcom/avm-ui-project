import classNames from "classnames";

import { mergeProps } from '../../utils/with-default-props'

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
    bgColor: '#fff'
  },
  primary: {
    textColor: '#fff',
    bgColor: '#1677ff'
  },
  success: {
    textColor: '#fff',
    bgColor: '#00b578'
  },
  warning: {
    textColor: '#fff',
    bgColor: '#ff8f1f'
  },
  danger: {
    textColor: '#fff',
    bgColor: '#ff3141'
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

    const btnStyles = {height: 'auto', lineHeight: 1.4};
    btnStyles['opacity'] = disabled ? 0.4 : 1
    btnStyles['color'] = props.textColor || colorAttr[props.color].textColor
    btnStyles['backgroundColor'] = props.bgColor || colorAttr[props.color].bgColor
    btnStyles['borderRadius'] = props.borderRadius || shapeAttr[props.shape]
    btnStyles['borderWidth'] = props.borderWidth
    btnStyles['borderStyle'] = props.borderStyle
    btnStyles['borderColor'] = props.borderColor || colorAttr[props.color].bgColor

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
}
  
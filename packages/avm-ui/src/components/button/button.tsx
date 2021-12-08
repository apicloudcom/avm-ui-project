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
  shape: 'default'
}

export class Button extends Component {
  install = () => {
    console.log("Button !")
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const disabled = props.disabled || props.loading

    const btnStyles = {};
    props.textColor && (btnStyles['color'] = props.textColor)
    props.bgColor && (btnStyles['background-color'] = props.bgColor)
    props.borderRadius && (btnStyles['border-radius'] = props.borderRadius)
    props.borderWidth && (btnStyles['border-width'] = props.borderWidth)
    props.borderStyle && (btnStyles['border-style'] = props.borderStyle)
    props.borderColor && (btnStyles['border-color'] = props.borderColor)
    return (
      <button
        type={props.type}
        onClick={props.onClick}
        style={btnStyles}
        className={classNames(
          classPrefix,
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
        )}
        disabled={disabled}>
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
  
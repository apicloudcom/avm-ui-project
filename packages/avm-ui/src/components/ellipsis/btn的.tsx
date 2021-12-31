import classNames from "classnames";

import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-Ellipsis`;

export type EllipsisProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'Ellipsis',
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
  type: 'Ellipsis',
  shape: 'default',
  style: {}
}

const colorAttr = {
  default: {
    textColor: '#fff',
    bgColor: '#1677ff',
    borderColor: '#1677ff'
  }
}

const shapeAttr = {
  default: '4px',
  rounded: '1000px',
  rectangular: 0
}

export class Ellipsis extends Component {
  install = () => {
    console.log('Ellipsis!');
    this.props = mergeProps(defaultProps, this.props)
  }
  

  data = {
    changing: false,
    checked: this.props.checked || this.props.defaultChecked
  }

  setChanging = state => {
    this.data.changing = state
  }

  setChecked = check => {
    this.data.checked = check
    this.props.onChange && this.props.onChange(this.data.checked)
  }




  render = props => {
    props = mergeProps(defaultProps, props)

    const disabled = props.disabled || props.loading

    const { textColor, color, bgColor, borderRadius, shape, borderWidth, borderStyle, borderColor } = props

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

    const onClick = () => {
      console.log(props.content);
    }
  

    return (
      <ellipsis
        type={props.type}
        onClick={onClick}
        className={btnCls}
        disabled={disabled}
        style={{ ...btnStyles, ...props.style }}>
        {props.loading ? (props.loadingText) : (props.children)}
      </ellipsis>
    )
  }

  test() {
    api.alert({
      msg: "Ellipsis"
    })
  }
}

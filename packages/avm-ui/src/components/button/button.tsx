import css from './button.less';
import {superProps} from "../../utils/superProps";

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
  shape: 'default'
}


export class Button extends Component {
  @superProps
  render(props) {
    props = Object.assign({}, defaultProps, props)
    const disabled = props.disabled || props.loading
    const {shape, fill} = props;


    const btnCls = classNames(
      classPrefix,
      props.color ? `${classPrefix}-${props.color}` : null,
      {
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-${props.color}-fill-outline`]: fill === 'outline',
        [`${classPrefix}-${props.color}-fill-none`]: fill === 'none',
        [`${classPrefix}-${props.size}`]: true,
        [`${classPrefix}-loading`]: props.loading
      },
      `${classPrefix}-shape-${shape}`
    )
    return (
      <button
        type={props.type}
        className={btnCls}
        disabled={disabled}
      >
        {props.loading ? (props.loadingText) : (props.children)}
      </button>
    )
  }

  css = () => css
}

import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-radio`

export type RadioValue = string | number

export type RadioProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: RadioValue
  block?: boolean
  id?: string
  icon?: any
}

const defaultProps = {
  defaultChecked: false,
}

export class Radio  extends Component {
  install =() => {
    console.log('Radio!')
  }

  data = {
    checked: false
  }

  radioClick = props => {
    // this.data.checked = true
    props.onChange?.(props.value)
    if (props.groupContext) {
      props.onClick?.(props.value)
    } else {
      this.data.checked = !this.data.checked
      props.onChange?.(props.value, this.data.checked)
    }
  }

  render = props =>{
    props = mergeProps(defaultProps, props)
    const groupContext = props.groupContext
    let disabled = props.disabled

    if (groupContext && props.value !== undefined) {
      this.data.checked = groupContext.checkVal == props.value
      disabled = disabled || groupContext.disabled
    } else {
      this.data.checked = props.checked || props.defaultChecked
    }

    // 样式class字符串
    const boxClsObj = {
      [`${classPrefix}-checked`]: this.data.checked && !disabled,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-block`]: props.block
    }
    const iconClsObj = Object.keys(boxClsObj).map(key => ({[`${key}-icon`]: boxClsObj[key]}))
    const iconTextClsObj = Object.keys(boxClsObj).map(key => ({[`${key}-icon-text`]: boxClsObj[key]}))

    // 外层class
    const boxClassStr = classNames(classPrefix, boxClsObj)

    // iconClass
    const iconClassStr = classNames(`${classPrefix}-icon`, iconClsObj)

    // iconTextClass
    const iconTextClassStr = classNames(`${classPrefix}-icon-text`, iconTextClsObj);

    // 文本class
    const contentClassStr = classNames(`${classPrefix}-content`, {
      [`${classPrefix}-disabled-content`]: props.disabled
    })

    const iconSize = props.iconSize || '22px'
    const iconSizeStyle = {}
    iconSizeStyle['width'] = iconSize
    iconSizeStyle['height'] = iconSize
    iconSizeStyle['lineHeight'] = iconSize

    return (
      <label
        className={boxClassStr}
        style={props.style}
      >
        <div
          className={iconClassStr}
          onClick={() => {
            this.radioClick(props)
          }}
          style={iconSizeStyle}
        >
          <span
            className={iconTextClassStr}
            style={{fontSize: `${Number(iconSize.replace('px', ''))-6}px`, lineHeight: iconSize}}>
            {!!this.data.checked && '√'}
          </span>
        </div>
        {props.children && (
          <span
            className={contentClassStr}
            style={{fontSize: props.fontSize || '17px', paddingLeft: props.gap || '8px'}}>
            {props.children}
          </span>
        )}
      </label>
    )
  }
}

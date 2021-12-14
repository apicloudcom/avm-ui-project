
import classNames from 'classnames'

const classPrefix = `adm-checkbox`

export type CheckboxValue = string | number

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: CheckboxValue
  indeterminate?: boolean
  block?: boolean
  id?: string
  icon?: any
}
export class Checkbox extends Component {
  install = () => {
    console.log('Checkbox!')
  }

  data = {
    checked: !!(this.props.defaultChecked || this.props.checked || (this.props.defaultValue && this.props.defaultValue.includes(this.props.value))),
  }

  setChecked = (props) => {
    if (!props.indeterminate && !props.disabled) {
      this.data.checked = !this.data.checked
      if (this.data.checked) {
        props.check?.(props.value)
      } else {
        props.uncheck?.(props.value)
      }
    }
    props.onChange?.(this.data.checked)
  }

  render = props => { 
    const usageWarning = () => {
      if (props.checked !== undefined) {
        const message = 'When used with `CheckboxGroup`, the `checked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.'
        console.warn(`[antd-mobile: Checkbox] ${message}`)
      }
      if (props.defaultChecked !== undefined) {
        const message = 'When used with `CheckboxGroup`, the `defaultChecked` prop of `Checkbox` will not work if `value` prop of `Checkbox` is not undefined.'
        console.warn(`[antd-mobile: Checkbox] ${message}`)
      }
    }

    if (props.checkedList !== undefined && props.value === undefined) {
      usageWarning()
    }

    const boxClsObj = {
      [`${classPrefix}-checked`]: this.data.checked && !props.disabled,
      [`${classPrefix}-indeterminate`]: props.indeterminate,
      [`${classPrefix}-disabled`]: props.disabled,
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
      <label className={boxClassStr}>
        <div
          className={iconClassStr}
          onClick={() => this.setChecked(props)}
          style={iconSizeStyle}
        >
          <span className={iconTextClassStr} style={{fontSize: `${Number(iconSize.replace('px', ''))-6}px`, lineHeight: iconSize}}>{!!this.data.checked && '√'}</span>
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

import {bound} from '../../utils/bound'
import {superProps} from "../../utils/superProps";
import css from './stepper.less';

const classPrefix = `adm-stepper`

const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
}

const toStringVal = val => {
  return val ? val.toString() : (val === 0 ? '0' : '')
}

export class Stepper extends Component {


  data = {
    value: 0,
    inputValue: 0,
    hasFocus: false,
    isInit: true
  }
  // 赋值
  setValue = val => {
    this.data.isInit = false
    this.data.value = val
    this.setInputValue(toStringVal(val))
    this.fire('handleChange', Number(val))
  }
  // 赋值输入框
  setInputValue = val => {
    this.data.inputValue = val
  }
  // 设置失焦、获焦变量
  setHasFocus = focus => {
    this.data.hasFocus = focus
    if (!this.data.hasFocus) {
      this.setInputValue(toStringVal(this.data.value))
    }
  }
  // 格式化处理输入值
  setValueWithCheck = (v: number) => {
    if (isNaN(v)) return
    let target = bound(v, this.props.min, this.props.max)
    if (this.props.digits || this.props.digits === 0) {
      target = parseFloat(target.toFixed(this.props.digits))
    }
    this.setValue(target)
  }
  // input输入框内容变化
  handleInputChange = (v: string) => {
    this.setInputValue(v)
    this.setValueWithCheck(parseFloat(v))
  }
  // 减操作
  handleMinus = () => {
    this.setValueWithCheck(this.data.value - this.props.step)
  }
  // 加操作
  handlePlus = () => {
    this.setValueWithCheck(this.data.value + this.props.step)
  }
  // 减操作按钮是否可点击
  minusDisabled = () => {
    if (this.props.min === undefined) {
      return this.props.disabled
    } else {
      return this.props.disabled || this.data.value <= this.props.min
    }
  }
  // 加操作按钮是否可点击
  plusDisabled = () => {
    if (this.props.max === undefined) {
      return this.props.disabled
    } else {
      return this.props.disabled || this.data.value >= this.props.max
    }
  }

  render(props) {
    this.props = Object.assign({}, defaultProps, props)
    if (this.data.isInit) {
      this.data.value = this.props.value || this.props.defaultValue
      this.data.inputValue = this.props.value !== undefined ? toStringVal(this.props.value) : toStringVal(this.props.defaultValue)
    }
    const borderStyle = '1px solid transparent'
    const {
      disabled,
      height = '28px',
      inputWidth = '32px',
      inputFontSize = '14px',
      inputFontColor = '#333',
      borderRaduis = '2px',
      border = borderStyle,
      activeBorder = borderStyle,
      borderInner = borderStyle,
      btnFontSize = '12px',
      btnBgColor = '#f0f0f0',
      btnWidth = '28px',
      btnTextColor = '#7FA000'
    } = this.props;

    const btnWidthStyle = {}
    btnWidthStyle['width'] = btnWidth

    const boxStyle = {
      height: height,
      width: `${Number(inputWidth.replace('px', '')) + Number(btnWidth.replace('px', '')) * 2 + 8}px`,
      borderRadius: borderRaduis,
      border: this.data.hasFocus ? activeBorder : border
    }

    const btnStyle = {
      ...btnWidthStyle,
      height: height,
      lineHeight: `${Number(height.replace('px', '')) - 1}px`,
      backgroundColor: btnBgColor,
      fontSize: `${Number(btnFontSize.replace('px', '')) + 5}px`,
      opacity: 1
    }

    const inputStyle = {
      height: height,
      lineHeight: height,
      width: inputWidth,
      fontSize: inputFontSize,
      color: disabled ? '#999' : inputFontColor,
      border: 'none',
      borderLeft: borderInner,
      borderRight: borderInner
    }

    return superProps(props,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-active`]: this.data.hasFocus,
        })}
        style={boxStyle}>
        <span
          className={`${classPrefix}-minus`}
          onClick={this.handleMinus}
          disabled={this.minusDisabled()}
          fill='none'
          style={{
            ...btnStyle,
            color: !this.minusDisabled() ? btnTextColor : '#999',
            borderRadius: `${borderRaduis} 0 0 ${borderRaduis}`
          }}>-</span>
        <input
          className={`${classPrefix}-input`}
          style={inputStyle}
          onFocus={e => {
            this.setHasFocus(true)
            this.props.inputFocus?.(e)
          }}
          value={this.data.inputValue}
          onBlur={e => {
            !disabled && this.handleInputChange(e.detail.value)
            this.setHasFocus(false)
            this.props.inputBlur?.(e)
          }}/>
        <span
          className={`${classPrefix}-plus`}
          onClick={this.handlePlus}
          disabled={this.plusDisabled()}
          fill='none'
          style={{
            ...btnStyle,
            color: !this.plusDisabled() ? btnTextColor : '#999',
            borderRadius: `0 ${borderRaduis} ${borderRaduis} 0`
          }}>+</span>
      </div>
    )
  }

  css = () => css;
}

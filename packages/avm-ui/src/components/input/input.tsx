import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

import closeIcon from './img/close.png'

const classPrefix = `adm-input`


const defaultProps = {
  defaultValue: '',
  maxLength: 500,
  minLength: 0,
  fontSize: '17px',
  color: '#333',
  placeholderColor: '#ccc',
  disabledColor: '#999',
  textAlign: 'left'
}

export class Input extends Component {
  install = () => {
    console.log('Input!')
  }

  data = {
    value: this.props.value || this.props.defaultValue,
    hasFocus: false
  }

  setValue = (val, props) => {
    this.data.value = val;
    props.onChange && props.onChange(val)
  }

  setHasFocus = state => {
    this.data.hasFocus = state;
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    const handleKeydown = (e: any) => {
      if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
        props.onEnterPress(e)
      }
      props.onKeyDown?.(e)
    }

    const inputStyles = {};
    props.fontSize && (inputStyles['fontSize'] = props.fontSize)
    props.color && (inputStyles['color'] = props.color)
    props.disabledColor && props.disabled && (inputStyles['color'] = props.disabledColor)
    props.textAlign && (inputStyles['textAlign'] = props.textAlign)

    return (
      <div className={`${classPrefix}-wrapper`}>
        <input
          id={props.id}
          className={classNames(classPrefix, {
            [`${classPrefix}-disabled`]: props.disabled,
            [`${classPrefix}-readOnly`]: props.readOnly,
          })}
          placeholder-class={props.placeholderClass}
          style={inputStyles}
          value={this.data.value}
          onInput={e => {
            this.setValue(e.target.value, props)
            props.onInput?.(e)
          }}
          onChange={e => {
            this.setValue(e.target.value, props)
          }}
          onFocus={e => {
            this.setHasFocus(true)
            props.onFocus?.(e)
          }}
          onBlur={e => {
            this.setHasFocus(false)
            props.onBlur?.(e)
          }}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          maxLength={props.maxLength}
          minLength={props.minLength}
          max={props.max}
          min={props.min}
          autoComplete={props.autoComplete}
          enterKeyHint={props.enterKeyHint}
          pattern={props.pattern}
          type={props.type}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          onKeyDown={handleKeydown}
          onKeyUp={props.onKeyUp}
        />
        {props.clearable && !!this.data.value && this.data.hasFocus && (
          <div
            className={`${classPrefix}-clear`}
            // onMouseDown={e => {
            //   e.preventDefault()
            // }}
            onClick={() => {
              this.setValue('', props)
              props.onClear?.()
            }}>
            <img src={closeIcon} alt="close" className={`${classPrefix}-clear-icon`}/>
          </div>
        )}
      </div>
    )
  }
  
}
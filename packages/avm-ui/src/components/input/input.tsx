
 

// import closeIcon from './img/close.png'

import Icon from '../icon'

const classPrefix = `adm-input`


const defaultProps = {
  defaultValue: '',
  maxLength: 500,
  minLength: 0,
  fontSize: '16px',
  color: '#333',
  placeholderColor: '#bbb',
  disabledColor: '#999',
  textAlign: 'left'
}

export class Input extends Component {
  

  data = {
    value: this.props.value || this.props.defaultValue,
    hasFocus: false
  }

  setValue = val => {
    this.data.value = val;
    this.props.handleChange?.(this.data.value)
  }

  setHasFocus = state => {
    this.data.hasFocus = state;
  }

  render = props => {
    this.props = Object.assign({}, defaultProps, props)
    

    const {id, color, fontSize, disabledColor, textAlign, placeholderColor, placeholderClass,
      disabled, readOnly,  placeholder="请输入文本", maxLength, minLength, max, min, clearable,
      enterPress, onKeyDown, onFocus, onBlur, onKeyUp, handleClear,
      autoComplete='on', enterKeyHint, pattern, type, autoCapitalize, autoCorrect} = this.props;

    const handleKeydown = (e: any) => {
      if (enterPress && (e.code === 'Enter' || e.keyCode === 13)) {
        enterPress(e)
      }
      onKeyDown?.(e)
    }

    const iptStyles = {
      fontSize: fontSize,
      color: disabled ? disabledColor : color,
      textAlign
    };

    return (
      <div className={`${classPrefix}-wrapper`} {...props}>
        <input
          id={id}
          value={this.data.value}
          className={classNames(classPrefix, {
            [`${classPrefix}-disabled`]: disabled,
            [`${classPrefix}-readOnly`]: readOnly,
          })}
          style={iptStyles}
          placeholder-style={`color: ${placeholderColor}`}
          placeholder-class={placeholderClass}
          placeholder={placeholder}
          disabled={!!(disabled || readOnly)}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          autoComplete={autoComplete}
          enterKeyHint={enterKeyHint}
          pattern={pattern}
          type={type}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onKeyDown={handleKeydown}
          onKeyUp={onKeyUp}
          onInput={e => {
            this.setValue(e.detail.value)
          }}
          onChange={e => {
            this.setValue(e.detail.value)
          }}
          onFocus={e => {
            this.setHasFocus(true)
            onFocus?.(e)
          }}
          onBlur={e => {
            !clearable ? this.setHasFocus(false) : (setTimeout(() => {
              this.setHasFocus(false)
            }, 300))
            onBlur?.(e)
          }}
        />
        {clearable && !!this.data.value && this.data.hasFocus && (
          <div
            className={`${classPrefix}-clear`}
            onClick={() => {
              this.setValue('')
              handleClear?.()
            }}>
            {/* <img src={closeIcon} alt="close" className={`${classPrefix}-clear-icon`}/> */}
            <Icon code={59939} fontSize="16px"/>
          </div>
        )}
      </div>
    )
  }

  css = () => {
    return `
      .adm-input-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        max-height: 100%;
        border-bottom:1px solid #ddd;
      }
      .adm-input {
        flex: 1; 
        box-sizing: border-box;
        max-height: 100%;
        margin: 10px 0;
        line-height: 1.5;
        background: transparent;
        border: 0;
        outline: none;
        appearance: none;
        min-height: 1.5em;
      }
      .adm-input-disabled {
        cursor: not-allowed;
        opacity: 1;
      }
      .adm-input-read-only {
        cursor: default;
      }
      .adm-input-clear {
        flex: none;
        margin-left: 8px;
        padding: 3px;
        cursor: pointer;
      }
      .adm-input-clear-icon {
        width: 16px;
        height: 16px;
      }
    `
  }
  
}
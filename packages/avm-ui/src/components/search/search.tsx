import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import searchIcon from './search.png'
import closeIcon from './img/close.png'


const classPrefix = `adm-search`

const defaultProps = {
  clearable: true,
  showCancelButton: false,
  defaultValue: '',
  clearOnCancel: true,
  cancelText: '取消',
  bgColor: '#f5f5f5',
  borderRadius: '6px',
  maxLength: 500,
  minLength: 0
}

export class Search extends Component {
  install = () => {
    console.log('Search!')
  }

  data = {
    searchVal: this.props.value,
    hasFocus: false
  }

  setSearchValue = val => {
    this.data.searchVal = val
    this.props.onChange && this.props.onChange(this.data.searchVal)
  }

  setHasFocus = focus => {
    this.data.hasFocus = focus
  }

  render = props => {
    this.props = mergeProps(defaultProps,  props)

    const {
      showCancelButton, clearOnCancel, clearable, bgColor, borderRadius, placeholderColor, 
      onClear, onCancel, onFocus, onBlur, onSearch, onEnterPress, onKeyDown,
      maxLength, placeholder, cancelText
    } = this.props

    const handleKeydown = (e: any) => {
      if (onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
        onSearch && onSearch(this.data.searchVal)
      }
      onKeyDown && onKeyDown(e)
    }

    const renderCancelButton = () => {
      let isShowCancel = false
      if (typeof showCancelButton === 'function') {
        isShowCancel = showCancelButton(this.data.hasFocus, this.data.searchVal)
      } else {
        isShowCancel = showCancelButton && !!this.data.searchVal
      }

      return (
        isShowCancel && (
          <span
            className={`${classPrefix}-suffix`}
            onClick={() => {
              if (clearOnCancel) {
                this.setSearchValue('');
                onClear?.()
              }
              onCancel?.()
            }}>
            {cancelText}
          </span>
        )
      )
    }

    const boxStyles = {
      background: bgColor,
      borderRadius: borderRadius
    }

    const boxCls = classNames(`${classPrefix}-input-box`, {
      [`${classPrefix}-active-input-box`] : this.data.hasFocus
    })

    return (
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-active`]: this.data.hasFocus,
        })}
      >
        <div className={boxCls} style={boxStyles}>
          <div className={`${classPrefix}-input-box-icon`}>
            <img src={searchIcon} alt="search"/>
          </div>
          <input
            className={(`${classPrefix}-input`)}
            value={this.data.searchVal}
            onInput={e => {
              this.setSearchValue(e.detail.value)
            }}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholder-style={`color: ${placeholderColor}`}
            clearable={clearable}
            onFocus={e => {
              this.setHasFocus(true)
              onFocus?.(e)
            }}
            onBlur={e => {
              setTimeout(() => {
                this.setHasFocus(false)
              }, 300)
              onBlur?.(e)
            }}
            onClear={onClear}
            onKeyDown={handleKeydown}
          />
          {!!this.data.searchVal && this.data.hasFocus && (
            <div
              className={`${classPrefix}-clear`}
              onClick={() => {
                this.setSearchValue('')
                onClear?.()
              }}>
              <img src={closeIcon} alt="close" className={`${classPrefix}-clear-icon`}/>
            </div>
          )}
        </div>
        {renderCancelButton()}
      </div>
    )
  }
}

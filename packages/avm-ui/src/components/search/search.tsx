import classNames from '../../utils/classnames'
// import searchIcon from './search.png'
// import closeIcon from './img/close.png'

import {SearchOutline, CloseCircleFill} from '../icon/icon'

const classPrefix = `adm-search`

const defaultProps = {
  clearable: true,
  showCancelButton: false,
  defaultValue: '',
  clearOnCancel: true,
  cancelText: '取消',
  cancelTextColor: '#333',
  bgColor: '#f5f5f5',
  borderRadius: '4px',
  maxLength: 500,
  minLength: 0
  // selectorList: null
}

export class Search extends Component {
  install = () => {
    console.log('Search!')
  }

  data = {
    searchVal: this.props.value,
    hasFocus: false
    // isShowSelector: false
  }

  setSearchValue = val => {
    this.data.searchVal = val
    this.props.onChange && this.props.onChange(this.data.searchVal)
  }

  setHasFocus = focus => {
    this.data.hasFocus = focus
  }

  // handleSelectorChange = item => {
  //   this.props.selecterChange?.(item)
  //   this.data.isShowSelector = false
  // }

  render = props => {
    this.props = Object.assign({}, defaultProps,  props)

    const {
      showCancelButton, clearOnCancel, clearable, bgColor, borderRadius, placeholderColor='#ccc', cancelTextColor,
      onClear, onCancel, onFocus, onBlur, onSearch, onEnterPress, onKeyDown,
      maxLength, placeholder="请输入", cancelText
      // selectorList
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
            style={{color: cancelTextColor}}
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

    // const handleSelectorEles = (selectorList && selectorList.length > 0 &&
    //   (<div className={`${classPrefix}-selector`}>
    //     <div className={`${classPrefix}-selector-selected`} onClick={() => {this.data.isShowSelector = !this.data.isShowSelector}}>
    //       <span className={`${classPrefix}-selector-selected-text`}>{selectorList[0].value}</span>
    //       <DownOutline color="#333"/>
    //     </div>
    //     {
    //       this.data.isShowSelector && (<div className={`${classPrefix}-selector-list`}>
    //         {selectorList.map(item => {
    //           return (
    //             <span className={`${classPrefix}-selector-list-text`} onClick={() => this.handleSelectorChange(item)}>{item.label}</span>
    //           )
    //         })}
    //       </div>)
    //     }
    //   </div>)
    // )

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
        {/* {handleSelectorEles} */}
        <div className={boxCls} style={boxStyles}>
          <div className={`${classPrefix}-input-box-icon`}>
            {/* <img src={searchIcon} alt="search"/> */}
            <SearchOutline color="#ccc"/>
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
              {/* <img src={closeIcon} alt="close" className={`${classPrefix}-clear-icon`}/> */}
              <CloseCircleFill color="#bababa" className={`${classPrefix}-clear-icon`}/>
            </div>
          )}
        </div>
        {renderCancelButton()}
      </div>
    )
  }
  css = () => {
    return `
    .adm-search {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .adm-search-input-box {
      width: 100%;
      flex: 1;
      border: solid 1px transparent;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-search-input-box-icon {
      flex: none;
      padding-left: 8px;
      font-size: 16px;
    }
    .adm-search-input {
      padding-left: 8px;
      flex: 1;
      line-height: 1.5;
      background: transparent;
      border: 0;
      outline: none;
      appearance: none;
      min-height: 1.5em;
      font-size: 14px;
      color: #333;
    }
    .adm-search-suffix {
      flex: none;
      margin-left: 8px;
      font-size: 16px;
    }
    .adm-search-clear {
      flex: none;
      margin: 0 8px;
      padding: 3px;
      cursor: pointer;
    }
    .adm-search-clear-icon {
      width: 16px;
      height: 16px;
    }
    `
  }
}

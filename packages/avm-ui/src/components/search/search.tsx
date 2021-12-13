import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import searchIcon from './search.png'
import {Input} from '../input/input'


const classPrefix = `adm-search`

const defaultProps = {
  clearable: true,
  showCancelButton: false,
  defaultValue: '',
  clearOnCancel: true,
  cancelText: '取消',
  bgColor: '#f5f5f5',
  borderRadius: '6px'
}

export class Search extends Component {
  install = () => {
    console.log('Search!')
  }

  data = {
    searchVal: '',
    hasFocus: false
  }

  setSearchValue = (val, props) => {
    this.data.searchVal = val
    props.onChange?.(this.data.searchVal)
  }

  setHasFocus = focus => {
    this.data.hasFocus = focus
  }

  render = props => {
    props = mergeProps(defaultProps,  props)

    const renderCancelButton = () => {
      let isShowCancel = false
      if (typeof props.showCancelButton === 'function') {
        isShowCancel = props.showCancelButton(this.data.hasFocus, this.data.searchVal)
      } else {
        isShowCancel = props.showCancelButton && this.data.searchVal
      }

      return (
        isShowCancel && (
          <span
            className={`${classPrefix}-suffix`}
            onClick={() => {
              this.setSearchValue('', props);
              if (props.clearOnCancel) {
                props.onClear?.()
              }
              props.onCancel?.()
            }}>
            {props.cancelText}
          </span>
        )
      )
    }

    const boxStyles = {}
    boxStyles['background'] = props.bgColor
    boxStyles['borderRadius'] = props.borderRadius

    const placeHolderStyle = `color: ${props.placeholderColor}`

    return (
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-active`]: this.data.hasFocus,
        })}
      >
        <div className={classNames(`${classPrefix}-input-box`, this.data.hasFocus ? `${classPrefix}-active-input-box` : '')} style={boxStyles}>
          <div className={`${classPrefix}-input-box-icon`}>
            <img src={searchIcon} alt="search"/>
          </div>
          <Input
            isSearch={true}
            className={`${classPrefix}-input`}
            value={this.data.searchVal}
            onChange={val => this.setSearchValue(val, props)}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            placeholderStyle={placeHolderStyle}
            clearable={props.clearable}
            onFocus={e => {
              this.setHasFocus(true)
              props.onFocus?.(e)
            }}
            onBlur={e => {
              this.setHasFocus(false)
              props.onBlur?.(e)
            }}
            onClear={props.onClear}
            onEnterPress={() => {
              props.onSearch?.(this.data.searchVal)
            }}
          />
        </div>
        {renderCancelButton()}
      </div>
    )
  }
}

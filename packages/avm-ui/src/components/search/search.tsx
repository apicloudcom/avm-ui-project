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
  cancelText: '取消'
}

export class Search extends Component {
  install = () => {
    console.log('Search!')
  }

  data = {
    value: '',
    hasFocus: false
  }

  setValue = (val, props) => {
    this.data.value = val
    props.onChange?.(this.data.value)
  }

  setHasFocus = focus => {
    this.data.hasFocus = focus
  }

  render = props => {
    props = mergeProps(defaultProps,  props)

    const renderCancelButton = () => {
      let isShowCancel = false
      if (typeof props.showCancelButton === 'function') {
        isShowCancel = props.showCancelButton(this.data.hasFocus, this.data.value)
      } else {
        isShowCancel = props.showCancelButton && this.data.hasFocus
      }

      return (
        isShowCancel && (
          <span
            className={`${classPrefix}-suffix`}
            onClick={() => {
              this.setValue('', props)
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

    return (
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-active`]: this.data.hasFocus,
        })}
      >
        <div className={`${classPrefix}-input-box`}>
          <div className={`${classPrefix}-input-box-icon`}>
            <img src={searchIcon} alt="search"/>
          </div>
          <Input
            value={this.data.value}
            className={`${classPrefix}-input`}
            placeholder={props.placeholder}
            clearable={props.clearable}
            placeholderClass={props.placeholderClass}
            maxLength={props.maxLength}
            onChange={val => this.setValue(val, props)}
            onFocus={() => {this.setHasFocus(true)}}
            onBlur={e => { 
              this.setHasFocus(false)
              props.onBlur?.(e)
            }}
            onClear={props.onClear}
            // type='search'
            onEnterPress={() => {
              props.onSearch?.(this.data.value)
            }}
          />
        </div>
        {renderCancelButton()}
      </div>
    )
  }
}

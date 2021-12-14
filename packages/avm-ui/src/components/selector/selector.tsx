import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid from '../grid'
import checkIcon from './checked.png'

const classPrefix = `adm-selector`

const defaultProps = {
  multiple: false,
  defaultValue: [],
  color: '#333',
  checkedColor: '#e7f1ff'
}

export class Selector extends Component {
  install = () => {
    console.log('Selector!')
  }

  data = {
    value: this.props.value || this.props.defaultValue
  }

  setValue = val => {
    this.data.value = val
    const extend = this.props.options.filter(option => val.includes(option.value))
    this.props.onChange && this.props.onChange(val, extend)
  }

  render = props => {
    props = mergeProps(defaultProps, props)

    // 选中状态自定义样式
    const activeStyles = {}
    activeStyles['color'] = props.color
    activeStyles['background'] = props.checkedColor

    const items = props.options.map(option => {
      const active = (this.data.value || []).includes(option.value)
      const disabled = option.disabled || props.disabled
      const itemCls = classNames(`${classPrefix}-item`, {
        [`${classPrefix}-item-active`]: active && !props.multiple,
        [`${classPrefix}-item-multiple-active`]: active && props.multiple,
        [`${classPrefix}-item-disabled`]: disabled,
      })

      return (
        <div
          key={option.value}
          className={itemCls}
          style={active ? activeStyles : {background: '#f5f5f5'}}
          onClick={() => {
            if (disabled) {
              return
            }
            if (props.multiple) {
              const val = active
                ? this.data.value.filter(v => v !== option.value)
                : [...this.data.value, option.value]
              this.setValue(val)
            } else {
              const val = active ? [] : [option.value]
              this.setValue(val)
            }
          }}
        >
          <span className={`${classPrefix}-label`} style={{color: active ? props.color : '#333'}}>{option.label}</span>
          {active && props.multiple && (
            <div className={`${classPrefix}-check-mark-wrapper`}>
              <img src={checkIcon} className={`${classPrefix}-check-mark-wrapper-img`}/>
            </div>
          )}
        </div>
      )
    })

    return (
      <div className={classPrefix}>
        {!props.columns && <Space wrap>{items}</Space>}
        {props.columns && (
          <Grid columns={props.columns} gap={8}>
            {items}
          </Grid>
        )}
      </div>
    )
  }
}

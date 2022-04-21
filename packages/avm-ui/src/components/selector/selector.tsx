import classNames from '../../utils/classnames'
import Space from '../space'
import Grid from '../grid'
// import checkIcon from './checked.png'
// import {CheckOutline} from '../icon/icon'

const classPrefix = `adm-selector`

const defaultProps = {
  multiple: false,
  defaultValue: [],
  checkedColor: '#9AC200',
  checkedBgColor: '#e7f1ff'
}

export class Selector extends Component {
  

  data = {
    value: this.props.value || this.props.defaultValue
  }

  setValue = val => {
    this.data.value = val
    const extend = this.props.options.filter(option => val.includes(option.value))
    this.props.handleChange && this.props.handleChange(val, extend)
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)

    // 选中状态自定义样式
    const activeStyles = {}
    activeStyles['color'] = props.checkedColor
    activeStyles['background'] = props.checkedBgColor

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
          <span className={`${classPrefix}-label`} style={{color: active ? props.checkedColor : '#666'}}>{option.label}</span>
          {active && (
            <div className={`${classPrefix}-check-mark-wrapper`}>
              {/* <img src={checkIcon} className={`${classPrefix}-check-mark-wrapper-img`}/> */}
              <span className={`${classPrefix}-check-mark-wrapper-img`}>✔</span>
              {/* <CheckOutline {...{color: '#fff', width: '6px', height: '6px'}} className={`${classPrefix}-check-mark-wrapper-img`}/> */}
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
  css = () => {
    return `
      .adm-selector-item {
        padding: 0 20px;
        width: auto;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
        text-align: center;
        position:relative;
        overflow:hidden;
      }
      .adm-selector-item-disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      .adm-selector-label {
        font-size: 16px;
      }
      .adm-selector-check-mark-wrapper {
        align-self: flex-end;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: solid 8px transparent;
        border-bottom: solid 8px #9AC200;
        border-left: solid 10px transparent;
        border-right: solid 10px #9AC200;
      }
      .adm-selector-check-mark-wrapper-img {
        position: absolute;
        left: 0px;
        top: -5px;
        font-size: 8px;
        color: #fff;
      }
    `
  }
}

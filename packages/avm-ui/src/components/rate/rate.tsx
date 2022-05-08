import classNames from 'classnames'
// import { mergeProps } from '../../utils/with-default-props'
import { formatLabel } from '../../utils/format-label'

import {Icon} from '../icon'

const classPrefix = `adm-rate`

const defaultProps = {
  count: 5,
  allowHalf: false,
  // character: '★',
  defaultValue: 0,
  readOnly: false,
  allowClear: true,
  disabled: false
}

export class Rate extends Component {
  install = () => {
    console.log('Rate!')
  }

  data = {
    value: this.props.value || this.props.defaultValue || 0
  }

  setValue = (val, props) => {
    this.data.value = val;
    props.rateChange?.(this.data.value);
  }

  render = props => {
    props = Object.assign({}, defaultProps, props)
    const starList = Array(props.count).fill(null)

    let styles = {};
    let {starSize="22px", activeColor='#faab0c'} = props;
    styles['padding'] = '4px';
    styles['line-height'] = starSize;
    styles['font-size'] = starSize;

    props.disabled && (activeColor = '#7d7e80')
    
    const renderStar = (v: number, half: boolean) => {
      return (
        <div
          className={classNames(`${classPrefix}-star`, {
            [`${classPrefix}-star-active`]: this.data.value >= v,
            [`${classPrefix}-star-half`]: half,
            [`${classPrefix}-star-readonly`]: props.readOnly
          })}
          style={{...styles, color: this.data.value >= v ? activeColor : '#ddd'}}
          onClick={() => {
            if (props.readOnly || props.disabled) return
            if (props.allowClear && this.data.value === v) {
              this.setValue(0, props)
            } else {
              this.setValue(v, props)
            }
          }}
        >
          {
            props.character
              ? (formatLabel(props.character, '', {color: this.data.value >= v ? activeColor : '#ddd', fontSize: starSize}))
              : (<Icon code={60034} {...{color: this.data.value >= v ? activeColor : '#ddd', fontSize: starSize}}/>)}
        </div>
      )
    }
    return (
      <div className={classPrefix}>
        {starList.map((_, i) => (
          <div key={i} className={classNames(`${classPrefix}-box`)}>
            {props.allowHalf && renderStar(i + 0.5, true)}
            {renderStar(i + 1, false)}
          </div>
        ))}
      </div>
    )
  }
  css = () => {
    return `
      .adm-rate {
        display: flex;
        flex-direction: row;
      }
      .adm-rate-box {
        position: relative;
      }
      .adm-rate-star {
        color: #ccc;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
      }
      .adm-rate-star-half {
        z-index: 666;
        padding-right: 0;
        width: 50%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .adm-rate-star-readonly {
        cursor: unset;
      }
    `
  }
}

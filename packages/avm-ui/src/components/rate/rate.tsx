import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
// import { StarFill } from '../icon/icon'

const classPrefix = `adm-rate`

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: '★',
  defaultValue: 0,
  readOnly: false,
  allowClear: true,
}

export class Rate extends Component {
  install = () => {
    console.log('Rate!')
  }

  data = {
    value: 0
  }

  setValue = (val, props) => {
    this.data.value = val;
    props.onChange?.(this.data.value);
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const starList = Array(props.count).fill(null)

    let styles = {};
    const {starSize="24px", activeColor='#ffd21e'} = props;
    styles['padding'] = `${Number(starSize.replace('px', ''))/8}px`;
    styles['line-height'] = starSize;
    styles['font-size'] = starSize;
    
    const renderStar = (v: number, half: boolean) => {
      return (
        <div
          className={classNames(`${classPrefix}-star`, {
            [`${classPrefix}-star-active`]: this.data.value >= v,
            [`${classPrefix}-star-half`]: half,
            [`${classPrefix}-star-readonly`]: props.readOnly,
          })}
          style={{...styles, color: this.data.value >= v ? activeColor : '#ccc'}}
          onClick={() => {
            if (props.readOnly) return
            if (props.allowClear && this.data.value === v) {
              this.setValue(0, props)
            } else {
              this.setValue(v, props)
            }
          }}
        >
          <text style={{color: this.data.value >= v ? activeColor : '#ccc', fontSize: starSize}}>{props.character}</text>
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
}

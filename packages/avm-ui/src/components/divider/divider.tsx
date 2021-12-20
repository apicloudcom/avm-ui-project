import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
}

const defaultProps = {
  contentPosition: 'center',
  color: '#999999',
  borderColor: '#eeeeee',
  borderStyle: 'solid',
  borderTopWidth: '1px'
}


export class Divider extends Component {
  install = () => {
    console.log('Empty!')
  }
  render = props => {
    props = mergeProps(defaultProps, props)
    const {color} = props
    const fontContentSty = {
      'color': ( props.style && props.style['color']) ?? color,
    }
    const dividerLineSty = {
      'border-style': (props.style && props.style['borderStyle']) ?? 'solid',
      'border-color': (props.style && props.style['borderColor']) ?? '#eeeeee'
    }
    
    return (
      <div
        className={classNames(
          classPrefix,
          `${classPrefix}-${props.contentPosition}`
        )}
      >
        <div className={`${classPrefix}-${props.contentPosition}-before ${classPrefix}-before`} style={dividerLineSty}></div>
        {props.children.length > 0 && (
          <text className={`${classPrefix}-content`} style={fontContentSty}>{props.children}</text>
        )}
        <div className={`${classPrefix}-after ${classPrefix}-${props.contentPosition}-after`} style={dividerLineSty}></div>
      </div>
    )
  }
}


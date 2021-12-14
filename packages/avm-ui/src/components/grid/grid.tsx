import { mergeProps } from '../../utils/with-default-props'
import { toCSSLength } from '../../utils/to-css-length'

const classPrefix = `adm-grid`

export class Grid extends Component {
  install = () => {
    console.log('Grid!')
  }

  render = props => {
    const {gap=0, columns} = props
    const styles = {}
    styles['grid-template-columns'] = `repeat(${columns.toString()}, minmax(0, 1fr))`
    
    if (Array.isArray(gap)) {
      styles['column-gap'] = toCSSLength(gap[0])
      styles['row-gap'] = toCSSLength(gap[1])
    } else {
      styles['column-gap'] = toCSSLength(gap)
      styles['row-gap'] = toCSSLength(gap)
    }
  
    return (
      <div className={classPrefix} style={styles}>
        {props.children}
      </div>
    )
  }
}

export class GridItem extends Component {
  install = () => {
    console.log('GridItem!')
  }

  render = props => {
    props = mergeProps({span: 1}, props)

    const itemStyle = {}
    itemStyle['grid-column-end'] = `span ${props.span}`
    return (
      <div
        className={`${classPrefix}-item`}
        style={itemStyle}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    )
  }
}

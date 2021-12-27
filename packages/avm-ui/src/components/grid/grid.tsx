import { mergeProps } from '../../utils/with-default-props'
import { toCSSLength } from '../../utils/to-css-length'

const classPrefix = `adm-grid`

export class Grid extends Component {
  render = props => {
    const {gap=0, columns} = props
    // const styles = {}
    // styles['grid-template-columns'] = `repeat(${columns.toString()}, minmax(0, 1fr))`
      
    // if (Array.isArray(gap)) {
    //   styles['column-gap'] = toCSSLength(gap[0])
    //   styles['row-gap'] = toCSSLength(gap[1])
    // } else {
    //   styles['column-gap'] = toCSSLength(gap)
    //   styles['row-gap'] = toCSSLength(gap)
    // }

    const baseWidth = 100 / columns
    const columnGap = Array.isArray(gap) ? toCSSLength(gap[0]) : toCSSLength(gap)
    const rowGap = Array.isArray(gap) ? toCSSLength(gap[1]) : toCSSLength(gap)
    return (
      // <div className={classPrefix} style={styles}>
      //   {props.children}
      // </div>

      <div className={classPrefix}>
        {props.children.map((item, index) => {
          return (
            <GridItem
              {...item.attributes}
              baseWidth={baseWidth}
              columnGap={columnGap}
              rowGap={rowGap}
              className={`${classPrefix}-item`}
              columns={columns}
              curIndex={index + 1}>{item}</GridItem>
          )
        })}
      </div>
    )
  }
}

export class GridItem extends Component {
  render = props => {
    props = mergeProps({span: 1}, props)
    // const itemStyle = {}
    // itemStyle['grid-column-end'] = `span ${props.span}`

    const itemStyle = {
      width: `${props.baseWidth * props.span}%`,
      // marginRight: props.columnGap,
      // marginBottom: props.rowGap
    }
    return (
      <div
        // className={`${classPrefix}-item`}
        style={itemStyle}
        onClick={props.onClick}>
        {props.children}
      </div>
    )
  }
}

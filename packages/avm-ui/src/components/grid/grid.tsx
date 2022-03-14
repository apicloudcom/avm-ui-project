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

    const baseWidth = (100 / Number(columns)).toFixed(2)
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

  css = () => {
    return `
      .adm-grid {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
      }
    `
  }
}

export class GridItem extends Component {
  render = props => {
    props = Object.assign({}, {span: 1}, props)
    // const itemStyle = {}
    // itemStyle['grid-column-end'] = `span ${props.span}`

    const itemStyle = {
      width: props.baseWidth ? `${Number(props.baseWidth) * Number(props.span)}%` : 'auto',
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

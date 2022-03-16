import classNames from '../../utils/classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-space`

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
}

const defaultProps = {
  direction: 'horizontal',
  gap: '8px',
  style: {}
}
export class Space extends Component {
  render = props => {
    props = mergeProps(defaultProps, props)
    const {direction, gap, gapHorizontal, gapVertical} = props

    const itemStyles = {}
    const gaps = direction === 'horizontal' ? (gapHorizontal || gap) : (gapVertical || gap)

    itemStyles[direction === 'horizontal' ? 'marginRight' : 'marginBottom'] = gaps

    const wrapStyles = {}
    if (props.wrap && direction === 'horizontal') {
      const vGap = gapVertical || gap;
      // wrapStyles['marginBottom'] = `-${vGap}`

      itemStyles['paddingBottom'] = vGap;
    }

    return <div
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-${direction}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      style={wrapStyles}
    >
      {props.children.map((child, index) => {
        return (
          child !== null &&
          child !== undefined && (
            <div
              className={classNames(
                `${classPrefix}-item`,
                `${classPrefix}-${direction}-item`,
                {
                  [`${classPrefix}-${direction}-item-last`]: index === props.children.length - 1,
                  [`${classPrefix}-${direction}-wrap-item`]: props.wrap,
                }
              )}
              style={itemStyles}
            >
              {child}
            </div>
          )
        )
      })}
    </div>
  }

  css = () => {
    return `
    .adm-space-item {
      flex: none;
    }
    .adm-space {
      display: inline-flex;
    }
    .adm-space-wrap {
      flex-wrap: wrap;
    }
    .adm-space-vertical {
      flex-direction: column;
    }
    .adm-space-vertical-item-last {
      margin-bottom: 0;
    }
    .adm-space-horizontal {
      flex-direction: row;
    }
    .adm-space-horizontal-item-last {
      margin-right: 0;
    }
    .adm-space-horizontal-wrap {
      flex-wrap: wrap;
    }
    .adm-space-align-center {
      align-items: center;
    }
    .adm-space-align-start {
      align-items: flex-start;
    }
    .adm-space-align-end {
      align-items: flex-end;
    }
    .adm-space-align-baseline {
      align-items: baseline;
    }
    .adm-space-justify-center {
      justify-content: center;
    }
    .adm-space-justify-start {
      justify-content: flex-start;
    }
    .adm-space-justify-end {
      justify-content: flex-end;
    }
    .adm-space-justify-between {
      justify-content: space-between;
    }
    .adm-space-justify-around {
      justify-content: space-around;
    }
    .adm-space-justify-evenly {
      justify-content: space-evenly;
    }
    .adm-space-justify-stretch {
      justify-content: stretch;
    }
    .adm-space-block {
      display: flex;
    }
    `
  }
}

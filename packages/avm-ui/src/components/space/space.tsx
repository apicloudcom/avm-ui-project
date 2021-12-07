import classNames from 'classnames'
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
  gap: '8px'
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
      wrapStyles['marginBottom'] = `-${vGap}`

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
}

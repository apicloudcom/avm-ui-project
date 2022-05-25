import {formatLabel} from '../../utils/format-label'
import {superProps} from "../../utils/superProps";
import css from './badge.less';

const classPrefix = `adm-badge`

// export const dot = Symbol()

const defaultProps = {
  color: '#E02020',
  isDot: false
}


export class Badge extends Component {

  @superProps
  render(props) {
    props = Object.assign({}, defaultProps, props)
    const {content, color, children, right, top, isDot} = props
    // const isDot = content === dot

    const hasChild = children && children.length
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: hasChild,
      [`${classPrefix}--dot`]: isDot
    })

    const styleRight = !!right && hasChild ? right : 0;
    const styleTop = !!top && hasChild ? top : 0;

    const contentEle = formatLabel(!isDot ? content : null, badgeCls, {
      backgroundColor: color,
      right: styleRight,
      top: styleTop
    })

    return (
      <div className={`${classPrefix}-row`}>
        <div className={`${classPrefix}-wrap`}>
          {children}
          {contentEle}
        </div>
      </div>
    )
  }

  css = () => css
}

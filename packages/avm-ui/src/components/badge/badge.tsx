import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-badge`

const formatLabel = (ele, cls, style={}) => {
  return Object.prototype.toString.call(ele) !== '[object Object]'
    ? <span className={cls} style={style}>{ele}</span>
    : <div className={cls} style={style}>{ele}</div>
}

const defaultProps = {
  color: '#FF411C'
}
export class Badge extends Component {
  install = () => {
    console.log('Badge!')
  }

  render = (props) => {
    props = mergeProps(defaultProps, props)
    const {content, color, children, isDot, right, top} = props
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: !!children,
      [`${classPrefix}--dot`]: isDot
    })

    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;

    const contentEle = formatLabel(content, badgeCls, {backgroundColor: color, right: styleRight, top: styleTop})
    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        {contentEle}
      </div>
    ) 
  }
}
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-badge`

export const dot = Symbol()

const defaultProps = {
  color: '#FF411C'
}
export class Badge extends Component {
  install = () => {
    console.log('Badge!')
  }

  render = (props) => {
    props = mergeProps(defaultProps, props)
    const {content, color, children, right, top} = props
    const isDot = content === dot
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: !!children,
      [`${classPrefix}--dot`]: isDot
    })

    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;

    const contentEle = formatLabel(!isDot ? content : null, badgeCls, {backgroundColor: color, right: styleRight, top: styleTop})
    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        {contentEle}
      </div>
    ) 
  }
}
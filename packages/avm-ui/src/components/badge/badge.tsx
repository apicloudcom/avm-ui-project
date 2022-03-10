import classNames from '../../utils/classnames'
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

    const hasChild = children && children.length
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: hasChild,
      [`${classPrefix}--dot`]: isDot
    })

    const styleRight = !!right && hasChild ? right : 0;
    const styleTop = !!top && hasChild ? top : 0;

    const contentEle = formatLabel(!isDot ? content : null, badgeCls, {backgroundColor: color, right: styleRight, top: styleTop})
    return (
      <div className={`${classPrefix}-wrap`}>
        {children}
        {contentEle}
      </div>
    ) 
  }
  
  css = ()=>{
    return `/* temp_stylePlugin:/var/folders/k8/fz71r0pd1gb70k2pmgd9b54m0000gn/T/2022210-13968-uvnsbs.3mvt.css */
.adm-badge-wrap {
  display: inline-block;
  position: relative;
}
.adm-badge {
  display: inline-block;
  color: #fff;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  min-width: 16px;
  border-radius: 100px;
  padding: 0 4px;
  font-size: 9px;
  line-height: 1.2;
  white-space: nowrap;
}
.adm-badge--fixed {
  position: absolute;
  transform: translate(50%, -50%);
}
.adm-badge--dot {
  min-width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}
`
  }
}

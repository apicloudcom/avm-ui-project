import classNames from 'classnames'
import { LeftOutline } from '../icon/icon'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-nav-bar`

export type NavBarProps = {
  back?: string | null
  backArrow?: boolean | string
  left?: string
  right?: string
  onBack?: () => void
} 
const defaultProps = {
  back: '',
  backArrow: true,
}
export class NavBar extends Component {
  install() {
    console.log('NavBar')
  }
  render = props => {
    props = mergeProps(defaultProps, props)
    const { back, backArrow, right, style } = props
    const rightNode = right && right.children.map(item => {
      return item
    })
    return (
      <div className={classNames(classPrefix)} style={style}>
        <div className={`${classPrefix}-left`} role='button'>
          {back !== null && (
            <div className={`${classPrefix}-back`} onClick={props.onBack}>
              {backArrow && (
                <div className={`${classPrefix}-back-arrow`}>
                  {backArrow === true ? <LeftOutline fontSize="18" /> : backArrow}
                </div>
              )}
              <text aria-hidden='true'>{back}</text>
            </div>
          )}
          <text className={`${classPrefix}-left-text`}>{props.left}</text>
        </div>
        {
          props.children && Boolean(props.children) && typeof(props.children[0])==='string' ?
          (<text className={`${classPrefix}-title`}>{props.children}</text>):
          (<div className={`${classPrefix}-title`}>{props.children}</div>)
        }
        <div className={`${classPrefix}-right`}>{rightNode}</div>
      </div>
    )
  }



}

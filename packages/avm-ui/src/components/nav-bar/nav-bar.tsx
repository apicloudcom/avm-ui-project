import classNames from '../../utils/classnames'
import Icon from '../icon'

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

  render = props => {
    props = Object.assign({}, defaultProps, props)
    const {back, backArrow, right, style} = props
    let rightNode;

    if (right) {
      if (typeof right === 'string') {
        rightNode = right;
      } else if (right.children) {
        rightNode = right.children;
      }
    }


    return (
      <div className={classNames(classPrefix)} style={style}>
        <div className={`${classPrefix}-left`} role='button'>
          {back !== null && (
            <div className={`${classPrefix}-back`} onClick={props.onBack}>
              {backArrow && (
                <div className={`${classPrefix}-back-arrow`}>
                  {backArrow === true || backArrow === 'true' ? <Icon code={59988} fontSize="18"/> : backArrow}
                </div>
              )}
              <text aria-hidden='true'>{back}</text>
            </div>
          )}
          <text className={`${classPrefix}-left-text`}>{props.left}</text>
        </div>
        {
          props.children && Boolean(props.children) && typeof (props.children[0]) === 'string' ?
            (<text className={`${classPrefix}-title`}>{props.children}</text>) :
            (<div className={`${classPrefix}-title`}>{props.children}</div>)
        }
        <div className={`${classPrefix}-right`}>{rightNode}</div>
      </div>
    )
  }

  css = () => {
    return `
    .adm-nav-bar {
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 45px;
      border-bottom: none;
      padding: 0 12px;
      white-space: nowrap;
    
      
    }
    .adm-nav-bar-left{
      flex: 1;
      flex-direction: row;
    }
    .adm-nav-bar-right {
      flex: 1;
      flex-direction: row;
      text-align: right;
      justify-content: flex-end;
    }
    
  
    .adm-nav-bar-back {
      display: flex;
      margin-right: 12px;
      flex-direction: row;
      margin: 6px 0;
      cursor: pointer;
    }
    .adm-nav-bar-back-arrow {
      margin-top: 2px;
      font-size: 18px;
      margin-right: 6px;
      flex-direction: row;
    }
  
    .adm-nav-bar-left-text {
      padding: 6px 0;
    }
    .adm-nav-bar-title {
      flex: auto;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      font-size: 18px;
      max-width: 60%;
      text-overflow: ellipsis;
      justify-content: center;
      padding: 0 12px;
    }
    
    `
  }

}

import {ListItem} from '../list/list-item'
import classNames from '../../utils/classnames'
// import {RightOutline} from '../icon/icon'

const classPrefix = `adm-check-list-item`

export class CheckListItem extends Component {
  install = () => {
    console.log('CheckListItem!')
  }

  render = props => {
    const active = props.checked ? props.checked.includes(props.value) : false
    const readOnly = props.readOnly
    const activeIcon = props.activeIcon
    const extra = (
      <div className={`${classPrefix}-extra`}>
        {active ? (activeIcon ?? (<text style={{color: active ? '#9AC200' : '#666'}}>√</text>)) : ''}
      </div>
    )

    return (
      <ListItem
        title={props.title}
        className={classNames({
          [`${classPrefix}-readonly`]: readOnly
        })}
        active={active}
        description={props.description}
        prefix={props.prefix}
        onClick={() => {
          if (readOnly) return
          if (active) {
            props.uncheck(props.value)
          } else {
            props.check(props.value)
          }
          props.onClick?.(props.value, active)
        }}
        arrow={false}
        clickable={!readOnly}
        extra={extra}
        disabled={props.disabled}>
        {props.label}
      </ListItem>
    )  
  }
}

import {ListItem} from '../list/list-item'

import {Icon} from "../icon";
// import {RightOutline} from '../icon/icon'

const classPrefix = `adm-check-list-item`

export class CheckListItem extends Component {

  render = props => {
    const active = props.checked ? props.checked.includes(props.value) : false
    const readOnly = props.readOnly
    const activeIcon = props.activeIcon
    const extra = (
      <div className={`${classPrefix}-extra`}>
        {active ? (activeIcon ?? (<Icon type={'CheckCircleFill'} color={active ? '#9AC200' : '#666'}/>)) : ''}
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
        handleClick={() => {
          if (readOnly) return
          if (active) {
            props.uncheck(props.value)
          } else {
            props.check(props.value)
          }
          props.handleClick?.(props.value, active)
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

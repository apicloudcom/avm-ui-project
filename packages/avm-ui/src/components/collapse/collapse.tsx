import {List} from '../list/list'
import {ListItem} from '../list/list-item'
// import { RightOutline } from '../icon/icon'
import classNames from 'classnames'
import { formatLabel } from '../../utils/format-label'
import spreadIcon from './spread.png'
import disabledSpreadIcon from './disabled_spread.png'

const classPrefix = `adm-collapse`

export type CollapsePanelProps = {
  key: string
  title: Element
  disabled?: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  onClick?: (event: any) => void
}

export class CollapsePanel extends Component {
  render = () => {
    return null
  }
}

class CollapsePanelContent extends Component {
  render = props => {
    const {visible} = props
    return (
      <div
        className={`${classPrefix}-panel-content`}
        style={{height: visible ? 'auto' : 0, animation: 'height .5s'}}>
         <ListItem>{visible && formatLabel(props.children, '', {color: '#999'})}</ListItem>
      </div>
    )
  }
}

export class Collapse extends Component {
  data = {
    activeKey: this.props.accordion ? null : [],
    isInit: true
  }

  setActiveKey = activeKey => {
    this.data.isInit = false
    this.data.activeKey = activeKey

    this.props.onChange && this.props.onChange(this.data.activeKey)
  }

  render = props => {
    // 子数据列表
    const panels = props.children.map(panel => {
      return {...panel.attributes, children: panel.children}
    })
    if (this.data.isInit) {
      this.data.activeKey = props.activeKey || props.defaultActiveKey
        ? (!props.accordion ? (props.activeKey || props.defaultActiveKey) : [props.activeKey || props.defaultActiveKey])
        : (props.accordion ? null : [])
    }
  
    const activeKeyList: any[] = this.data.activeKey === null
      ? []
      : (Array.isArray(this.data.activeKey) ? this.data.activeKey : [this.data.activeKey])

    return (
      <div className={classPrefix}>
        <List>
          {panels.map(panel => {
            const key = panel.key
            const active = activeKeyList.includes(key)
            const handleClick = () => {
              // 开启手风琴模式
              if (props.accordion) {
                this.setActiveKey(active ? [] : [key])
              } else {
                const activekey = active ? activeKeyList.filter(v => v !== key) : [...activeKeyList, key]
                this.setActiveKey(activekey)
              }
              // panel.onClick && panel.onClick(event)
            }

            return (
              <div key={panel.key}>
                <ListItem
                    className={classNames(`${classPrefix}-panel-header`, {
                      [`${classPrefix}-panel-header-disabled`]: panel.disabled,
                    })}
                    onClick={panel.disabled ? undefined : handleClick}
                    arrow={
                      <div
                        className={classNames(`${classPrefix}-arrow`, {
                          [`${classPrefix}-arrow-active`]: active,
                        })}>
                        <img
                          src={panel.disabled ? disabledSpreadIcon  : spreadIcon}
                          alt="spread"
                          style={{transform: `rotate(${active ? 90 : 0}deg)`, animation: 'transform .5s'}}/>
                      </div>
                    }>
                    {formatLabel(panel.title, (panel.disabled ? `${classPrefix}-disabled` : ''))}
                  </ListItem>
                <CollapsePanelContent visible={active}>
                  {panel.children}
                </CollapsePanelContent>
              </div>
            )
          })}
        </List>
      </div>
    )
  }
}
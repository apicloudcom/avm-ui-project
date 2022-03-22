import {List} from '../list/list'
import {ListItem} from '../list/list-item'
import { formatLabel } from '../../utils/format-label'
import Icon from '../icon'

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
        style={{height: visible ? 'auto' : 0}}>
         <ListItem>{visible && formatLabel(props.children, `${classPrefix}-panel-content-text`, {})}</ListItem>
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
              panel.onClick?.()
            }

            const {title: collapseTitle, ...restProps} = panel;

            return (
              <div key={panel.key}>
                <ListItem
                    {...restProps}
                    className={`${classPrefix}-panel-header`}
                    disabled={panel.disabled}
                    onClick={panel.disabled ? undefined : handleClick}
                    arrow={panel.arrow || (active ? <Icon code={60049} color="#bbb"/> : <Icon code={59949} color="#bbb"/>)}>
                    {formatLabel(panel.title)}
                </ListItem>
                <CollapsePanelContent visible={active}>
                  {panel.content || panel.children}
                </CollapsePanelContent>
              </div>
            )
          })}
        </List>
      </div>
    )
  }

  css = () => {
    return `
      .adm-collapse {
        width: 100%;
      }
      .adm-collapse-panel-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: baseline;
        font-size: 16px;
        color: #999;
        overflow: hidden;
      }
      .adm-collapse-panel-content-text {
        color: #666;
        font-size: 16px;
        line-height: 22px;
      }
    `
  }
}

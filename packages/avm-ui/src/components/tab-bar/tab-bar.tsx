import classNames from 'classnames'
import { formatLabel } from '../../utils/format-label'
import Badge from '../badge'

export type TabBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
}

export class TabBarItem extends Component {
  render = () => {
    return null
  }
}

export class TabBar extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey
  }
  setActiveKey = key => {
    this.data.activeKey = key
    this.props.onChange && this.props.onChange(key)
  }

  render = props => {
    const items = props.children && props.children.map(item => item.attributes) || [];
    !this.data.activeKey && (this.data.activeKey = items.length ? items[0].key : null)
    return (
      <div className={classNames('adm-tab-bar', props.className)}>
        {
         items.map(item => {
            const active = item.key === this.data.activeKey

            const iconCls = classNames('adm-tab-bar-item-icon', {
              ['adm-tab-bar-item-icon-active']: active
            })

            const titleCls = classNames('adm-tab-bar-item-title', {
              ['adm-tab-bar-item-title-active']: active
            })

            const renderContent = () => {
              const iconEle = item.icon && (formatLabel(((typeof item.icon) === 'function' ? item.icon(active) : item.icon), iconCls))
              const titleEle = item.title && (formatLabel(item.title, titleCls))
              
              if (iconEle) {
                return (
                  <div className={'tabbar-align-item-center'}>
                    <Badge content={item.badge} className='adm-tab-bar-icon-badge' top="-3px">{iconEle}</Badge>
                    {titleEle}
                  </div>
                )
              }
              if (titleEle) {
                return (
                  <div className={'tabbar-align-item-center'}>
                    <Badge content={item.badge} className='adm-tab-bar-title-badge' top="-3px" right="-3px">{titleEle}</Badge>
                  </div>
                )
              }
              return null
            }
            return (
              <div
                key={item.key}
                onClick={() => {
                  const {key} = item
                  if (item.key === undefined || item.key === null) {
                    return
                  } else {
                    this.setActiveKey(key)
                  }   
                }}
                className={'adm-tab-bar-item'}>
                  {renderContent()}
              </div>
            )
          })
        }
      </div>
    )
  }
}

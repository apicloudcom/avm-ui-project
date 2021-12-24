import classNames from 'classnames'
import { formatLabel } from '../../utils/format-label'
import Badge from '../badge'

// export type TabBarProps = {
//   activeKey?: string | null
//   defaultActiveKey?: string | null
//   onChange?: (key: string) => void
// }

export class TabBar extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey || this.props.tabs[0].key
  }
  setActiveKey = key => {
    this.data.activeKey = key
    this.props.onChange && this.props.onChange(key)
  }

  render = props => {
    return (
      <div className={classNames('adm-tab-bar', props.className)}>
        {
          props.tabs.map(item => {
            const active = item.key === this.data.activeKey

            const iconCls = classNames('adm-tab-bar-item-icon', {
              ['adm-tab-bar-item-icon-active']: active
            })
            const renderContent = () => {
              const iconEle = item.icon && (formatLabel(((typeof item.icon) === 'function' ? item.icon(active) : item.icon), iconCls))

              const titleEle = item.title && (<span className={classNames('adm-tab-bar-item-title', {
                ['adm-tab-bar-item-title-active']: active
              })}>{item.title}</span>)
              
              if (iconEle) {
                return (
                  <div className={'tabbar-align-item-center'}>
                    <Badge content={item.badge} className='adm-tab-bar-icon-badge' top="-10px">{iconEle}</Badge>
                    {titleEle}
                  </div>
                )
              }
              if (titleEle) {
                return (
                  <div className={'tabbar-align-item-center'}>
                    <Badge content={item.badge} className='adm-tab-bar-title-badge' top="-10px" right="-30px">{titleEle}</Badge>
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

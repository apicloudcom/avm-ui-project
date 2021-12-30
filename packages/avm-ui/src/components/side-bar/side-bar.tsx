import classNames from 'classnames'
// import Badge from '../badge'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { Badge } from '../badge/badge'

const classPrefix = `adm-side-bar`
const defaultProps = {
 width:'96px',
}
export type SideBarItemProps = {
  key?: string
  title?: string
  disabled?: boolean
  badge?: HTMLElement
} & NativeProps

export class SideBarItem extends Component {
  render = () => {
    return (
      null
    )
  }
}

export type SideBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps<'--width' | '--height' | '--item-border-radius'>


export class SideBar extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey
  }
  activeItem = (val) => {
    if (!val.attributes.disabled) {
      this.data.activeKey = val.attributes.key
      this.props.onChange && this.props.onChange(val.attributes.key)
    }
  }
  render = props => {
    props = mergeProps(defaultProps, props)
    console.log(props);
    
    const { children,style } = props
    const width = {
      width:props.width
    }
    const fontWeight = {
      fontWeight:'bold'
    }
    const fontWeightNormal = {
      fontWeight:'normal'
    }


    return (
      <div style={style || width} className={classNames(classPrefix)}>
        {
          children.map(item => {
            return (
              <div style={style || width} onClick={this.activeItem.bind(this, item)} className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: this.data.activeKey == item.attributes.key,
                [`${classPrefix}-item-disabled`]: item.attributes.disabled,
              })}>
                <Badge content={item.attributes.badge}>
                  <span style={this.data.activeKey == item.attributes.key?fontWeight:fontWeightNormal} className={classNames(`${classPrefix}-item-active-none`, {
                    [`${classPrefix}-item-text`]: this.data.activeKey == item.attributes.key,
                    [`${classPrefix}-item-disabled`]: item.attributes.disabled,
                  })}>{item.attributes.title}</span>
                </Badge>
              </div>
            )
          })
        }
      </div>
    )
  }

}

import classNames from 'classnames'
// import Badge from '../badge'
// import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { Badge } from '../badge/badge'

const classPrefix = `adm-side-bar`

export type SideBarItemProps = {
  key?: string
  title?: string
  disabled?: boolean
  badge?: HTMLElement
} & NativeProps

export class SideBarItem extends Component {
  data = {

  }
  render = () => {
    // props = mergeProps(props)
    // console.log(props,666);

    // const { title } = props

    return (
      // <span>{ title }111</span>
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
    activeItem: ''
  }
  activeItem = (val) => {
    if (!val.attributes.disabled) {
      console.log(1111, val);
      this.data.activeItem = val.attributes.key
    }
  }
  render = props => {
    const { children } = props

    return (
      <div className={classNames(classPrefix)}>
        {
          children.map(item => {
            return (
              <span onClick={this.activeItem.bind(this, item)} className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: this.data.activeItem == item.attributes.key,
                [`${classPrefix}-item-disabled`]: item.attributes.disabled,
              })}>
                <Badge content={item.attributes.badge}>
                  {item.attributes.title}
                </Badge>
              </span>
            )
          })
        }
      </div>
    )
  }

}

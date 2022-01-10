// import className from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { Popup } from '../popup/popup'
import { DropdownItem } from './item'
import classNames from 'classnames'
// import { Radio } from '../radio/radio'
import '../popup/popup.less'


const classPrefix = `adm-dropdown`

// export type children = {
//   key?: string
// }

export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  onChange?: (key: string | null) => void
  // mask?: boolean;
} & NativeProps




const defaultProps = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  activeKey: ''
}




export class Dropdown extends Component {
  data = {
    visible: false,
    children: [],
    activeKey: this.props.activeKey || this.props.defaultActiveKey,
    list: []
  }
  setVisible = (v, key) => {
    // console.log(v,'children');
    this.props.onChange?.(key);
    this.props.children.forEach(item => {
      if (item.key === key) {
        this.data.list = item.children
      }
    })
    this.data.visible = v
    this.data.activeKey = key
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const { children } = props
    if (this.data.activeKey) {
      this.data.visible = true
      this.props.children.forEach(item => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children
        }
      })

    }
    this.data.children = children
    return (
      <div className={classPrefix}>
        {
          children.map(item => {
            return (
              <div {...item.attributes} className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: item.key === this.data.activeKey
              })} onClick={
                this.setVisible.bind(this, true, item.key)
              }>{item.attributes.title}</div>
            )
          })
        }
        <Popup
          className={'pop'}
          visible={this.data.visible}
          onMaskClick={() => {
            this.setVisible(false, '')
            this.data.list = []
            this.data.visible = false
          }}
          position='top'
        >
          <DropdownItem className={`${classPrefix}-item`} onClick={this.setVisible.bind(this, true)}>{this.data.list}</DropdownItem>
        </Popup>
      </div>
    )
  }
}
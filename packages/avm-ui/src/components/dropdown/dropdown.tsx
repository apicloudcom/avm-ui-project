import className from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { Popup } from '../popup/popup'
import '../popup/popup.less'

const classPrefix = `adm-dropdown`

export type DropdownItemProps = {

}

export class DropdownItem extends Component {
  render = props => {
    console.log(props, 555555);

    return (
      <div>12387888</div>
    )
  }
}



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
}

export class Dropdown extends Component {
  data = {
    visible: false
  }
  setVisible = v => {
    this.data.visible = v
  }

  render = props => {
    props = mergeProps(defaultProps, props)
    const { children } = props
    return (
      <div className={classPrefix}>
        {
          children.map(item => {
            const title = item.children.toString()
            return (
              <div className={`${classPrefix}-item`} onClick={this.setVisible.bind(this, true)}>{title}</div>
            )
          })
        }
        <Popup
          visible={this.data.visible}
          onMaskClick={() => {
            this.setVisible.bind(this, false)
          }}
          position='top'
          bodyStyle={{ minHeight: '300px' }}
        >
          Hello
        </Popup>
      </div>
    )
  }
}
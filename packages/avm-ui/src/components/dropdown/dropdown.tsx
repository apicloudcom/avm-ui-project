import { mergeProps } from '../../utils/with-default-props'
import { NativeProps } from '../../utils/native-props'
import { DropdownItem } from './item'
import classNames from 'classnames'
import { Popup } from '../popup/popup'
import '../popup/popup.less'
import { DownFill } from '../icon/icon'


const classPrefix = `adm-dropdown`


export type DropdownProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  closeOnMaskClick?: boolean
  closeOnClickAway?: boolean
  onChange?: (key: string | null) => void
  arrow?:HTMLElement 
  // mask?: boolean;
} & NativeProps


const defaultProps = {
  defaultActiveKey: null,
  closeOnMaskClick: true,
  closeOnClickAway: true,
  activeKey: '',
  arrow:<DownFill />
}


export class Dropdown extends Component {

  data = {
    visible: false,
    children: [],
    activeKey: this.props.activeKey || this.props.defaultActiveKey,
    list: [],
    isActived: true,
  }
  setVisible = (v, key) => {
    if (key === this.data.activeKey) {
      this.data.visible = false
      this.data.activeKey = ''
    } else {
      this.props.onChange?.(key);
      this.props.children.forEach(item => {
        if (item.key === key) {
          this.data.list = item.children
        }
      })
      this.data.visible = v
      this.data.activeKey = key
    }
  }

  render = props => {
    
    props = mergeProps(defaultProps, props)
    console.log(props,123123123);
    
    const { children } = props
    if (props.activeKey && this.data.isActived) {
      this.data.visible = true
      this.data.isActived = false
      this.props.children.forEach(item => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children
        }
      })
    } else if (props.defaultActiveKey && this.data.isActived) {
      this.data.visible = true
      this.data.isActived = false
      this.props.children.forEach(item => {
        if (item.key === this.data.activeKey) {
          this.data.list = item.children
        }
      })
    }
    this.data.children = children
    return (
      <div className="container">
        <div className={classPrefix}>
          {
            children.map(item => {
              return (
                <div {...item.attributes} className={`${classPrefix}-item`} onClick={
                  this.setVisible.bind(this, true, item.key)
                }>
                  <span className={classNames(`${classPrefix}-default`, {
                    [`${classPrefix}-active`]: item.key === this.data.activeKey,
                    [`${classPrefix}-default`]: item.key !== this.data.activeKey,
                  })}>
                    {item.attributes.title}
                  </span>
                  <div className={classNames('', {
                    ['container-icon']: item.key === this.data.activeKey,
                    ['default-icon']: item.key !== this.data.activeKey,
                  })}>{props.arrow}
                  </div>
                </div>
              )
            })
          }
        </div>
        <Popup
          className={'pop'}
          visible={this.data.visible}
          position="top"
          onMaskClick={() => {
            if (props.closeOnMaskClick && props.closeOnClickAway) {
              this.setVisible(false, '')
              this.data.list = []
              this.data.visible = false
            }
          }}
        >
          <DropdownItem className={`${classPrefix}-item`} onClick={this.setVisible.bind(this, true)}>{this.data.list}</DropdownItem>
        </Popup>
      </div>
    )
  }
}
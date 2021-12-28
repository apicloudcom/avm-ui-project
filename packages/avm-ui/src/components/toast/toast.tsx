import classNames from 'classnames'
import { CheckOutline, CloseOutline } from '../icon/icon'
import Loading from '../loading'
import Mask from '../mask'
import { mergeProps } from '../../utils/with-default-props'
import { GetContainer } from '../../utils/render-to-container'
import { PropagationEvent } from '../../utils/with-stop-propagation'

const classPrefix = `adm-toast`

export interface ToastProps {
  afterClose?: () => void
  maskStyle?: HTMLElement
  maskClassName?: string
  maskClickable?: boolean
  content?: HTMLElement
  icon?: 'success' | 'fail' | 'loading' | HTMLElement
  duration?: number
  position?: 'top' | 'bottom' | 'center'
  visible?: boolean
  getContainer?: GetContainer
  stopPropagation?: PropagationEvent[]
}

const iconsArr = {
  success: <CheckOutline/>, 
  fail: <CloseOutline/>, 
  loading: <Loading color='white' className={`${classPrefix}-loading`} />, 
}

const top =  {
  top: '20%',
  bottom: '80%'
}

const defaultProps = {
  maskClickable: true,
  stopPropagation: ['click'],
}

export class InternalToast extends Component {
  render = props => {
    props = mergeProps(defaultProps, props)

    const { maskClickable, content, icon, position='50%' } = this.props

    console.log(position)
    return (
      <Mask
        visible={props.visible}
        destroyOnClose
        opacity={0}
        disableBodyScroll={!maskClickable}
        getContainer={props.getContainer}
        afterClose={props.afterClose}
        style={{
          pointerEvents: maskClickable ? 'none' : 'auto',
          ...props.maskStyle,
        }}
        className={classNames(`${classPrefix}-mask`, props.maskClassName)}
        stopPropagation={props.stopPropagation}
      >
        <div
          style={{top: ['top', 'bottom'].includes(position) ? top[position] : position}}
          className={classNames(
            `${classPrefix}-wrap`,
            icon ? `${classPrefix}-wrap-icon` : `${classPrefix}-wrap-text`
          )}
        >
          <div className={`${classPrefix}-icon`}>{iconsArr[icon] || icon}</div>
          <text style={{color: '#fff'}}>{content}</text>
        </div>
      </Mask>
    )
  }
}

import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import Popup from '../popup'
import { GetContainer } from '../../utils/render-to-container'
import { formatLabel } from '../../utils/format-label'

const classPrefix = `adm-action-sheet`

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  description?: string
  danger?: boolean
  onClick?: () => void
}

export type ActionSheetProps = {
  visible: boolean
  actions: Action[]
  extra?: Element
  cancelText?: Element
  onAction?: (action: Action, index: number) => void
  onClose?: () => void
  afterClose?: () => void
  onMaskClick?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
  getContainer?: GetContainer
  safeArea?: boolean
}

const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnAction: false,
  closeOnMaskClick: true,
  safeArea: true,
}

export class ActionSheet extends Component {
  data = {
    borderRadiusStyle: {
      borderRadius: '8px 8px 0 0'
    }
  }
  render = props => {
    props = mergeProps(defaultProps, props)

    const btnListEle = props.actions.map((action, index) => {
      const {key, disabled, danger, text, description} = action;
      return (
        <div
          key={key}
          className={`${classPrefix}-button-item-wrapper`}>
          <div
            onClick={() => {
              if (!disabled) {
                action.onClick && action.onClick()
                props.onAction && props.onAction(action, index)
                if (props.closeOnAction) {
                  props.onClose && props.onClose()
                }
              }
            }}
            className={classNames(`${classPrefix}-button-item`, {
              [`${classPrefix}-button-item-danger`]: danger,
              [`${classPrefix}-button-item-disabled`]: disabled,
            })}>
            <span className={classNames(`${classPrefix}-button-item-name`, {
              [`${classPrefix}-button-item-danger-name`]: danger
            })}>{text}</span>
            {description && (
              <span className={`${classPrefix}-button-item-description`}>{description}</span>
            )}
          </div>
        </div>
      )
    })

    return (
      <Popup
        bodyStyle={this.data.borderRadiusStyle}
        visible={props.visible}
        onMaskClick={() => {
          props.onMaskClick?.()
          if (props.closeOnMaskClick) {
            props.onClose?.()
          }
        }}
        afterClose={props.afterClose}
        className={`${classPrefix}-popup`}
        getContainer={props.getContainer}>
        <div className={classPrefix}>
          {props.extra && formatLabel(props.extra, `${classPrefix}-extra`)}
          <div className={`${classPrefix}-button-list`}>
            {btnListEle}
          </div>

          {props.cancelText && (
            <div className={`${classPrefix}-cancel`}>
              <div className={`${classPrefix}-button-item-wrapper`}>
                <div
                  className={`${classPrefix}-button-item`}
                  onClick={() => {
                    props.onClose?.()
                  }}>{formatLabel(props.cancelText, `${classPrefix}-button-item-name`)}</div>
              </div>
            </div>
          )}
        </div>
      </Popup>
    )
  }
}

import classNames from '../../utils/classnames'
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
  cancelText: null,
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
    props = Object.assign({}, defaultProps, props)

    const btnListEle = props.actions.map((action, index) => {
      const {key, disabled, danger, text, description} = action;
      return (
        <div
          key={key}
          className={`${classPrefix}-button-item-wrapper`}>
          <div
            onClick={() => {
              if (disabled !== true) {
                action.onClick && action.onClick()
                props.onAction && props.onAction(action, index)
                if (props.closeOnAction) {
                  props.onClose()
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
          {
            (props.extra || props.extraDesc) && <div className={`${classPrefix}-header`}>
              {props.extra && formatLabel(props.extra, `${classPrefix}-extra`)}
              {props.extraDesc && formatLabel(props.extraDesc, `${classPrefix}-extra-desc`)}
            </div>
          }
          <div className={`${classPrefix}-button-list`}>
            {btnListEle}
          </div>

          {props.cancelText && (
            <div className={`${classPrefix}-cancel`}>
              <div className={`${classPrefix}-button-item-wrapper`}>
                <div
                  className={`${classPrefix}-button-item`}
                  onClick={() => {
                    props.onClose && props.onClose()
                  }}>{formatLabel(props.cancelText, `${classPrefix}-button-item-cancel`)}</div>
              </div>
            </div>
          )}
        </div>
      </Popup>
    )
  }

  css = () => {
    return `
    .adm-action-sheet-header {
      padding: 18px 16px;
      border-bottom: 1px solid #eee;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .adm-action-sheet-extra {
      display: flex;
      color: #333;
      font-size: 16px;
    }
    .adm-action-sheet-extra-desc {
      font-size: 14px;
      color: #999;
      line-height: 20px;
      padding-top: 8px;
    }
    .adm-action-sheet-button-item-wrapper {
      background-color: #ffffff;
      border-top: 1px solid #eee;
    }
    .adm-action-sheet-button-item {
      padding: 14px;
      text-align: center;
      border-radius: 0;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .adm-action-sheet-button-item-name {
      color: #333;
      font-size: 16px;
    }
    .adm-action-sheet-button-item-cancel {
      color: #646566;
    }
    .adm-action-sheet-button-item-description {
      font-size: 14px;
      color: #999;
      padding-top: 4px;
    }
    .adm-action-sheet-button-item-danger-name {
      color: #FA6400;
    }
    .adm-action-sheet-button-item-disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.4;
    }
    .adm-action-sheet-cancel {
      background-color: #f2f2f2;
      padding-top: 8px;
    }
    `
  }
}

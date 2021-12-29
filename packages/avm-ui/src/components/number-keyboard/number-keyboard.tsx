import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { shuffle } from '../../utils/shuffle'
import Popup from '../popup'
import { GetContainer } from '../../utils/render-to-container'
import DownOutlineSrc from './img/downoutline.png'
import TextDeletionOutlineSrc from './img/textDeletionOutline.png'

const classPrefix = 'adm-number-keyboard'

export type NumberKeyboardProps = {
  visible?: boolean
  title?: string
  getContainer?: GetContainer
  confirmText?: string | null
  customKey?: '-' | '.' | 'X'
  randomOrder?: boolean
  showCloseButton?: boolean
  onInput?: (v: string) => void
  onDelete?: () => void
  onClose?: () => void
  onConfirm?: () => void
  afterShow?: () => void
  afterClose?: () => void
  closeOnConfirm?: boolean
}

const defaultProps = {
  defaultVisible: false,
  randomOrder: false,
  showCloseButton: true,
  confirmText: null,
  closeOnConfirm: true
}

export class NumberKeyboard extends Component {
  data = {
    popupBodyStyle: {
      background: '#f5f5f5'
    }
  }
  render = props => {
    props = mergeProps(defaultProps, props)
    const {
      visible,
      title,
      getContainer,
      confirmText,
      customKey,
      randomOrder,
      showCloseButton,
      onInput,
      onDelete,
    } = props


    const keys = () => {
      const defaultKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      const keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys
      keyList.push('0')
      if (confirmText) {
        keyList.push(customKey || '')
      } else {
        keyList.splice(9, 0, customKey || '')
        keyList.push('BACKSPACE')
      }
      return keyList
    }

    // 点击键盘按键
    const onKeyPress = (key: string) => {
      switch (key) {
        case 'BACKSPACE':
          onDelete?.()
          break
        case 'OK':
          props.onConfirm?.()
          if (props.closeOnConfirm) {
            props.onClose?.()
          }
          break
        default:
          onInput?.(key)
          break
      }
    }

    // 渲染 title 和 close button
    const renderHeader = () => {
      if (!showCloseButton && !title) return null
      return (
        <div
          className={classNames(`${classPrefix}-header`, {
            [`${classPrefix}-header-with-title`]: !!title,
          })}
        >
          {title && <span className={`${classPrefix}-title`}>{title}</span>}
          {showCloseButton && (
            <div
              className={classNames(`${classPrefix}-header-close-button`, {
                [`${classPrefix}-header-with-title-close-button`]: !!title
              })}
              onClick={() => {
                props.onClose?.()
              }}
              role='button'
              title='CLOSE'>
              <img src={DownOutlineSrc} alt="downoutline"/>
            </div>
          )}
        </div>
      )
    }

    // 渲染基础键盘按键
    const renderKey = (key: string, index: number) => {
      const isNumberKey = /^\d$/.test(key)
      const keyCls = classNames(`${classPrefix}-key`, {
        [`${classPrefix}-key-number`]: isNumberKey,
        [`${classPrefix}-key-sign`]: !isNumberKey && key,
        [`${classPrefix}-key-mid`]: index === 9 && !!confirmText,
      })

      return (
        <div
          key={key}
          className={keyCls}
          onClick={() => key && onKeyPress(key)}
          title={key}
          role='button'>
          {
            key === 'BACKSPACE'
              ? <img src={TextDeletionOutlineSrc} alt="textDeletionOutline"/>
              : <span className={`${classPrefix}-key-text`}>{key}</span>
          }
        </div>
      )
    }

    return (
      <Popup
        visible={visible}
        getContainer={getContainer}
        mask={false}
        afterClose={props.afterClose}
        afterShow={props.afterShow}
        className={`${classPrefix}-popup`}
        bodyStyle={this.data.popupBodyStyle}>
        <div className={classPrefix}>
          {renderHeader()}
          <div className={`${classPrefix}-wrapper`}>
            <div
              className={classNames(`${classPrefix}-main`, {
                [`${classPrefix}-confirmed-style`]: !!confirmText,
              })}>
              {keys().map((key, index) => renderKey(key, index))}
            </div>
            {!!confirmText && (
              <div className={`${classPrefix}-confirm`}>
                <div
                  className={`${classPrefix}-key-extra ${classPrefix}-key-bs`}
                  onClick={() => onKeyPress('BACKSPACE')}
                  title='BACKSPACE'
                  role='button'>
                  <img src={TextDeletionOutlineSrc} alt="textDeletionOutline"/>
                </div>
                <span
                  className={`${classPrefix}-key-extra ${classPrefix}-key-ok`}
                  onClick={() => onKeyPress('OK')}
                  role='button'>
                  {confirmText}
                </span>
              </div>
            )}
          </div>
        </div>
      </Popup>
    )
  }
}

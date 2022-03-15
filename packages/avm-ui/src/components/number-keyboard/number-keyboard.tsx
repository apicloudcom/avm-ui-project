import classNames from '../../utils/classnames'
import { shuffle } from '../../utils/shuffle'
import Popup from '../popup'
import { GetContainer } from '../../utils/render-to-container'
// import DownOutlineSrc from './img/downoutline.png'
// import TextDeletionOutlineSrc from './img/textDeletionOutline.png'

import {DownOutline, TextDeletionOutline} from '../icon/icon'

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
  closeOnConfirm: true,
  isShowClearBtn: true
}

export class NumberKeyboard extends Component {
  data = {
    popupBodyStyle: {
      background: '#f5f5f5'
    }
  }
  render = props => {
    props = Object.assign({}, defaultProps, props)
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
      isShowClearBtn
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
        case 'CLEAR':
          props.onClearAll?.() // 清空
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
              {/* <img src={DownOutlineSrc} alt="downoutline"/> */}
              <DownOutline color="#666"/>
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
          role='button'
          style={{marginRight: (index+1)%3 !== 0 ? '8px' : 0}}>
          {
            key === 'BACKSPACE'
              ? <TextDeletionOutline color="#333"/>
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
               {isShowClearBtn && <div
                  className={`${classPrefix}-key-extra ${classPrefix}-key-clear`}
                  onClick={() => onKeyPress('CLEAR')}
                  title='CLEAR'
                  role='button'>
                  <text className={`${classPrefix}-key-clear-text`}>清空</text>
                </div>}
                <div
                  className={classNames(`${classPrefix}-key-extra`, `${classPrefix}-key-bs`, {
                    [`${classPrefix}-key-bs-hasclear`]: isShowClearBtn
                  })}
                  onClick={() => onKeyPress('BACKSPACE')}
                  title='BACKSPACE'
                  role='button'>
                  {/* <img src={TextDeletionOutlineSrc} alt="textDeletionOutline"/> */}
                  <TextDeletionOutline color="#333"/>
                </div>
                <div
                  className={classNames(`${classPrefix}-key-extra`, `${classPrefix}-key-ok`, {
                    [`${classPrefix}-key-ok-hasclear`]: isShowClearBtn
                  })}
                  onClick={() => onKeyPress('OK')}
                  role='button'>
                  <span className={`${classPrefix}-key-ok-text`}>{confirmText}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Popup>
    )
  }
  css = () => {
    return `
      .adm-number-keyboard {
        padding: 0 0 8px 8px;
        background: #f2f3f5;
        width: 100%;
      }
      .adm-number-keyboard-main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }
      .adm-number-keyboard-confirmed-style {
        width: 75%;
      }
      .adm-number-keyboard-popup {
        width: 100%;
        user-select: none;
        z-index: 1050;
      }
      .adm-number-keyboard-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .adm-number-keyboard-header {
        height: 34px;
        line-height: 34px;
        border-top: 1px solid #f5f5f5;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        color: #999;
        background-color: #fff;
      }
      .adm-number-keyboard-header-close-button {
        padding: 0 12px;
        height: 34px;
        align-items: center;
        justify-content: center;
      }
      .adm-number-keyboard-header-with-title {
        justify-content: space-between;
      }
      .adm-number-keyboard-header-with-title-close-button {
        padding-right: 0;
      }
      .adm-number-keyboard-title {
        color: #999;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .adm-number-keyboard-confirm {
        width: 25%;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .adm-number-keyboard-key {
        width: 31.5%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        box-sizing: border-box;
        border-top: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        background: #f5f5f5;
        margin-top: 8px;
      }
      .adm-number-keyboard-key-text {
        font-size: 22px;
      }
      .adm-number-keyboard-key-mid {
        width: 63%;
      }
      .adm-number-keyboard-key-sign {
        background: #fff;
      }
      .adm-number-keyboard-key-sign:active {
        background-color: #f2f2f2;
      }
      .adm-number-keyboard-key-extra {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-top: 8px;
        margin-left: 8px;
        margin-right: 8px;
      }
      .adm-number-keyboard-key-number {
        background-color: #fff;
      }
      .adm-number-keyboard-key-number:active {
        background-color: #f2f2f2;
      }
      .adm-number-keyboard-key-ok {
        display: inline-block;
        background-color: #9AC200;
        text-align: center;
        margin-top: 8px;
        align-items: center;
        justify-content: center;
        height: 104px;
      }
      .adm-number-keyboard-key-ok-text {
        color: #fff;
        font-size: 16px;
      }
      .adm-number-keyboard-key-bs {
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        height: 104px;
      }
      .adm-number-keyboard-key-bs-hasclear {
        height: 48px;
      }
      .adm-number-keyboard-key-clear {
        height: 48px;
      }
      .adm-number-keyboard-key-clear-text {
        color: #333;
        font-size: 16px;
      }
    `
  }
}

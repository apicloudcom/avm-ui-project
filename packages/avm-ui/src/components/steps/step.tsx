import classNames from '../../utils/classnames'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-step`

export class Step extends Component {
  
  render = props => {
    const {
      title = "步骤标题",
      description = "步骤的详情描述",
      status = 'wait',
      direction,
      curIndex,
      totalLen,
      isDot = false
    } = props

    const titleCls = classNames(`${classPrefix}-title`, `${classPrefix}-title-${status}`);
    const descCls = classNames(`${classPrefix}-description`, `${classPrefix}-${direction}-content-description`);
    const dotCls = classNames(`${classPrefix}-dot`, `${classPrefix}-dot-${status}`);

    const dotEle = <text className={classNames(`${classPrefix}-dottext`, `${classPrefix}-dottext-${status}`)}>
      {status === 'finish' ? '√' : (status === 'error' ? '!' : (Number(curIndex) + 1))}
    </text>
    return (
      <div
        className={classNames(
          `${classPrefix}`,
          `${classPrefix}-${direction}`
        )}>
        {/* 指示条 */}
        <div className={classNames(
          `${classPrefix}-indicator`,
          `${classPrefix}-${direction}-indicator`)}>
          {/* 点 */}
          {props.icon ? props.icon : (isDot ? (<div className={dotCls}></div>) : dotEle)}
          {/* 线 */}
          {curIndex !== totalLen - 1 && (<div
            className={classNames(
              `${classPrefix}-line`,
              `${classPrefix}-${direction}-line`,
              `${classPrefix}-line-${status}`
            )}></div>)}
        </div>

        {/* 步骤条显示文本 */}
        <div className={classNames(
          `${classPrefix}-content`,
          `${classPrefix}-${direction}-content`)}>
          {/* 标题 */}
          {formatLabel(title, titleCls)}
          {/* 描述 */}
          {!!description && formatLabel(description, descCls)}
        </div>
      </div>
    )
  }
  css = () => {
    return `
    .adm-step-indicator {
      display: flex;
      align-items: center;
    }
    .adm-step-content {
      width: 95%;
    }
    .adm-step-title {
      color: #333;
      width: 100%;
      white-space: wrap;
      font-size: 14px;
      line-height: 20px;
    }
    .adm-step-description {
      width: 100%;
      white-space: wrap;
      font-size: 12px;
      color: #999;
      line-height: 16px;
    }
    .adm-step-horizontal {
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    .adm-step-horizontal-indicator {
      width: 100%;
      height: 24px;
      flex-direction: row;
    }
    .adm-step-horizontal-line {
      flex: 1;
      height: 1px;
      background: #e8e8e8;
    }
    .adm-step-horizontal-content {
      padding-top: 2px;
    }
    .adm-step-horizontal-content-description {
      margin-top: 2px;
    }
    .adm-step-vertical {
      flex-direction: row;
      align-items: flex-start;
    }
    .adm-step-vertical-indicator {
      width: 24px;
      height: 100%;
      margin-right: 8px;
      flex-direction: column;
    }
    .adm-step-vertical-line {
      flex: 1;
      width: 1px;
      background: #e8e8e8;
    }
    .adm-step-vertical-content {
      flex: auto;
      margin: 0 0 15px 0;
    }
    .adm-step-vertical-content-description {
      padding-top: 2px;
    }
    .adm-step-line-wait {
      background: #ddd;
    }
    .adm-step-line-finish {
      background: #9ac200;
    }
    .adm-step-line-error {
      background: #e02020;
    }
    .adm-step-dot {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      z-index: 6;
      background-color: #ddd;
    }
    .adm-step-dot-wait {
      background-color: #ddd;
    }
    .adm-step-dot-process {
      background-color: #9ac200;
    }
    .adm-step-dot-finish {
      background-color: #9ac200;
    }
    .adm-step-dot-error {
      background-color: #e02020;
    }
    .adm-step-dottext {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      color: #fff;
      font-size: 12px;
      text-align: center;
      line-height: 18px;
    }
    .adm-step-dottext-wait {
      background: #ddd;
      color: #fff;
    }
    .adm-step-dottext-error {
      background: #e02020;
    }
    .adm-step-dottext-process {
      background: #9ac200;
    }
    .adm-step-dottext-finish {
      background: #9ac200;
    }
    `
  }
}

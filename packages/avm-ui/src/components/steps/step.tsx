import classNames from 'classnames'
import { formatLabel } from '../../utils/format-label'

const classPrefix = `adm-step`

export class Step extends Component {
  install = () => {
    console.log('Step')
  }

  render = props => {
    const { title, description, status = 'wait', direction, curIndex, totalLen } = props

    const titleCls = classNames(`${classPrefix}-title`, `${classPrefix}-title-${status}`);
    const descCls = classNames(`${classPrefix}-description`, `${classPrefix}-${direction}-content-description`);
    const dotCls = classNames(`${classPrefix}-dot`, `${classPrefix}-dot-${status}`);
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
          <div className={dotCls}></div>
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
}

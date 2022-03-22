import classNames from '../../utils/classnames'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-list-item`
import {Icon} from "../icon";

export class ListItem extends Component {
  install = () => {
    console.log('ListItem!');
  }

  render = props => {
    const active = props.active || false;
    const clickable = props.clickable ?? !!props.onClick

    const arrow = props.arrow === undefined ? clickable : props.arrow

    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : 'auto';

    const disabledClass = props.disabled && 'list-disabled'

    const childCls = classNames(`${classPrefix}-children`, {
      [`${classPrefix}-children-active`]: active
    });
    const prefixCls = classNames(`${classPrefix}-content-prefix`, disabledClass);
    const prefixStyles = {width: prefixWidth}

    const extraCls = classNames(`${classPrefix}-content-extra`, disabledClass);

    const childEles = formatLabel(props.children, childCls)
    const prefixEles = formatLabel(props.prefix, prefixCls, prefixStyles)
    const extraEles = formatLabel(props.extra, extraCls)

    const content = (
      <div className={`${classPrefix}-content`}>
        {props.prefix && prefixEles}

        <div className={classNames(`${classPrefix}-content-main`, disabledClass)}>
          {props.title && (
            <span className={classNames(`${classPrefix}-title`, {
              [`${classPrefix}-title-active`]: active
            })}>{props.title}</span>
          )}
          {childEles}
          {props.description && (
            <span className={`${classPrefix}-description`}>
              {props.description}
            </span>
          )}
        </div>
        {props.extra && extraEles}
        {arrow && (
          <div className={classNames(`${classPrefix}-content-arrow`, disabledClass)}>
            {arrow === true ? <Icon code={60019} color={`${active ? '#9AC200' : '#666'}`}/> : arrow}
          </div>
        )}
      </div>
    )

    const listItemCls = classNames(
      `${classPrefix}`,
      clickable ? ['adm-plain-anchor'] : [],
      props.disabled && `${classPrefix}-disabled`
    )

    const listItemEvent = props.disabled ? undefined : props.onClick

    return (
      <div className={listItemCls} onClick={listItemEvent}>{content}</div>
    )
  }
}

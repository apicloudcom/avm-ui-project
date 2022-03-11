import classNames from '../../utils/classnames'
import {formatLabel} from '../../utils/format-label'

const classPrefix = `adm-list-item`

// import rightArrowIcon from './img/rightArrow.png'
import {DownOutline} from '../icon/icon'
export class ListItem extends Component {
  install = () => {
    console.log('ListItem!');
  }

  render = props => {
    const clickable = props.clickable ?? !!props.onClick

    const arrow = props.arrow === undefined ? clickable : props.arrow

    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : 'auto';

    const disabledClass = props.disabled && 'list-disabled'

    const childCls = `${classPrefix}-children`;
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
            <span className={`${classPrefix}-title`}>{props.title}</span>
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
            {/* {arrow === true ? <img src={rightArrowIcon} alt="rightArrow"/> : arrow} */}
            {arrow === true ? <DownOutline/> : arrow}
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

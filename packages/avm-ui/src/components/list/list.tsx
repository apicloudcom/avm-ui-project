import classNames from '../../utils/classnames'

const classPrefix = `adm-list`

const defaultProps = {
  mode: 'default',
}

export class List extends Component {
  install = () => {
    console.log('List!')
  }

  render = props => {
    props = Object.assign({}, defaultProps, props);
    return <div className={classNames(classPrefix, `${classPrefix}--${props.mode}`)}>
      <div className={`${classPrefix}--inner`}>{props.children}</div>
    </div>
  }

  css = () => {
    return `
      .adm-list {
        background-color: #ffffff;
        overflow: hidden;
        font-size: 17px;
      }
      .adm-list--inner {
        margin-bottom: -1px;
      }
      .adm-list--default {
        border: solid 1px #eee;
        border-right: none;
        border-left: none;
      }
      .adm-list--card {
        margin: 12px;
        border-radius: 8px;
      }
      .adm-list-item {
        width: 100%;
        display: block;
        padding-left: 12px;
      }
      .adm-list-item-title {
        font-size: 14px;
        color: #333;
        padding-bottom: 8px;
      }
      .adm-list-item-title-active {
        color: #9AC200;
      }
      .adm-list-item-description {
        color: #999;
        font-size: 12px;
        padding-top: 8px;
      }
      .adm-list-item-children {
        font-size: 16px;
        color: #333;
      }
      .adm-list-item-children-active {
        color: #9AC200;
      }
      .adm-list-item-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 12px 12px 12px 0;
        border-bottom: solid 1px #e8e8e8;
      }
      .adm-list-item-content-prefix {
        padding-right: 12px;
      }
      .adm-list-item-content-main {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .adm-list-item-content-extra {
        padding-left: 12px;
        color: #999;
        font-size: 16px;
      }
      .adm-list-item-content-arrow {
        display: flex;
        align-items: center;
        padding-left: 12px;
        font-size: 16px;
        color: #999;
      }
      .adm-list-item-content-arrow span {
        font-size: 16px;
      }
      .list-disabled {
        cursor: not-allowed;
        opacity: 0.3;
        pointer-events: none;
      }
    `
  }
}

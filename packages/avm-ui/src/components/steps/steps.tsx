import classNames from '../../utils/classnames'

import {Step} from './step'

const classPrefix = `adm-steps`

const defaultProps = {
  current: 0,
  direction: 'horizontal',
}

export class Steps extends Component {
  

  render = props => {
    props = Object.assign({}, defaultProps, props)

    const {direction, current} = props

    const list = props.children.map(item => {
      return {
        ...item.attributes,
        children: item.children
      }
    })

    const stemItem = list.map((item, index) => {
      let {status} = item;

      if (index < current) {
        status = status || 'finish'
      } else if (index === current) {
        status = status || 'process'
      } else {
        status = status || 'wait'
      }

      return (
        <Step
          {...item}
          status={status}
          direction={direction}
          totalLen={list.length}
          curIndex={index}/>
      )
    })

    return (
      <div className={classNames(classPrefix, `${classPrefix}-${direction}`)}>
        {stemItem}
      </div>
    )
  }
  css = () => {
    return `
      .adm-steps {
        width: 100%;
      }
      .adm-steps-horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 8px 0;
      }
      .adm-steps-vertical {
        padding: 8px 16px;
      }
    `
  }
}

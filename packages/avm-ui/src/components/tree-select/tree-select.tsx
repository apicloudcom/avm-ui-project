import classNames from '../../utils/classnames'
import { NativeProps } from '../../utils/native-props'
import { getTreeDeep } from '../../utils/tree'
import {UiwCheck} from '../icon/icon'

const classPrefix = `adm-tree-select`

export interface TreeSelectOption {
  [key: string]: any
}

export type TreeSelectProps = {
  options: TreeSelectOption[]
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[], extend: { options: TreeSelectOption[] }) => void
  fieldNames?: { label: string; value: string; children: string }
} & NativeProps

const defaultProps = {
  options: [],
  fieldNames: {},
  defaultValue: [],
}

export class TreeSelect extends Component {
  data = {
    value: '',
    defaultValue: ''
  }

  setValue = (value) => {
    this.data.value = value
  }

  render = props => {
    props = Object.assign({},defaultProps, props)
    this.data.defaultValue = props.defaultValue
    const labelName = props.fieldNames.label || 'label'
    const valueName = props.fieldNames.value || 'value'
    const childrenName = props.fieldNames.children || 'children'
    const [deep, optionsMap, optionsParentMap] = (() => {
      const deep: any = getTreeDeep(props.options, childrenName)
      const optionsMap = new Map<string, TreeSelectOption>()
      const optionsParentMap = new Map<string, TreeSelectOption | undefined>()
      function traverse(
        current: TreeSelectOption | undefined,
        children: TreeSelectOption[]
      ) {
        children.forEach(item => {
          optionsParentMap.set(item[valueName], current)
          optionsMap.set(item[valueName], item)
          if (item[childrenName]) {
            traverse(item, item[childrenName])
          }
        })
      }
      traverse(undefined, props.options)

      return [deep, optionsMap, optionsParentMap]
    })()

    const onItemSelect = (node: TreeSelectOption) => {
      // 找到父级节点
      const parentNodes: TreeSelectOption[] = []
      let current: TreeSelectOption | undefined = node
      while (current) {
        parentNodes.unshift(current)
        const next = optionsParentMap.get(current[valueName])
        current = next
      }

      const values = parentNodes.map(i => i[valueName])
      this.setValue(values)
      props.onChange?.(values, {
        options: parentNodes,
      })
    }

    const renderItems = (
      columnOptions: TreeSelectOption[] = [],
      index: number
    ) => {
      return columnOptions.map(item => {
        const isActive = item[valueName] === this.data.value[index]
        return (
          <div
            key={item[valueName]}
            className={classNames(isActive ?`${classPrefix}-item-active`:`${classPrefix}-item-normal` ,`${classPrefix}-item`)}
            onClick={() => {
              if (!isActive) {
                onItemSelect(item)
              }
            }}
          >
            {index===0 && isActive?(
              // <div className={classNames(index===0 && isActive?`${classPrefix}-item-line-active`:'${classPrefix}-item-line-none')}></div>
              <div className={`${classPrefix}-item-line-active`}></div>
            ):null}
            <text className={classNames(isActive ? `${classPrefix}-item-text-active` : `${classPrefix}-item-text-noactive`)}>{item[labelName]}</text>
            {
              isActive && deep===2 && index+1===deep ?( <div className="adm-tree-select-checked">
              <UiwCheck fontSize="18" color="#9AC200"/>
            </div>):null
            }
           
          </div>
        )
      })
    }

    const renderColumns = () => {
      const columns: any[] = []
      for (let i = 0; i < deep; i++) {
        let width = `${100 / deep}%`

        // 两列的第一列宽度为 33.33，两列的第二列为 66.67%
        if (deep === 2 && i === 0) {
          width = `33.33%`
        }
        if (deep === 2 && i === 1) {
          width = `66.67%`
        }
        const column = (
          <div
            key={i}
            className={classNames(`adm-tree-select-column${i}`,`adm-tree-select-column`)}
            style={{ width }}
          >
            {renderItems(
              i === 0
                ? props.options
                : optionsMap?.get(this.data.value[i - 1])?.[childrenName],
              i
            )}
          </div>
        )
        columns.push(column)
      }
      return columns
    }

    return (
      <div className={classPrefix}>{renderColumns()}</div>
    )
  }

  css = () => {
    return `
    .adm-tree-select {
      height: 100%;
      background-color: #ffffff;
      flex-direction: row;
    }
    .adm-tree-select-column {
      overflow-y: auto;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
    }
    .adm-tree-select-column0 {
      background-color: #f5f5f5;
    }
    .adm-tree-select-column1 {
      background-color: #fafafa;
    }
  
    .adm-tree-select-item {
      padding: 15px 0 15px 20px;
      justify-content: center;
    }
    .adm-tree-select-item-active {
      font-weight: bold;
      background-color: white;
    }
    .adm-tree-select-item-normal {
      font-weight: bold;
      background-color: rgba(0,0,0,0);
      position:relative
    }
    .adm-tree-select-item-text-active {
      font-size: 16px;
      color: #9AC200;
      font-weight: bold;
      background-color: none;
    }
    .adm-tree-select-item-text-noactive {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      background-color: none;
    }
    .adm-tree-select-item-line-active {
      height:16px;
      width: 3px;
      background: #9AC200;
      position:absolute;
      left:0; 
      top: 50%;
    }
    .adm-tree-select-item-line-none {
      display:none;
    }
    .adm-tree-select-checked {
      position:absolute;
      right: 15px;
      top:50%;
    }
    
    `
  }
}

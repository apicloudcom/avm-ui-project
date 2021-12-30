import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import { getTreeDeep } from '../../utils/tree'
import { mergeProps } from '../../utils/with-default-props'

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
    props = mergeProps(defaultProps, props)
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
            className={classNames(`${classPrefix}-item`, {
              [`${classPrefix}-item-active`]: isActive,
            })}
            onClick={() => {
              if (!isActive) {
                onItemSelect(item)
              }
            }}
          >
            <text className={classNames(`${classPrefix}-item-text`,isActive ? `${classPrefix}-item-active` : `${classPrefix}-item-noactive`)}>{item[labelName]}</text>
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
            className={classNames(`${classPrefix}-column`)}
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
}

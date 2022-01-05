import './dropdown.less'
import { Dropdown, DropdownItem } from './dropdown'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { DropdownProps, DropdownItemProps } from './dropdown'

export default attachPropertiesToComponent(Dropdown, {
    Item: DropdownItem,
  })

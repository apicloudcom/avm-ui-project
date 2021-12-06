import './checkbox.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { CheckboxGroup } from './checkboxGroup'
import { Checkbox } from './checkbox'

export type { CheckboxValue, CheckboxProps } from './checkbox'

export default attachPropertiesToComponent(Checkbox, {
  Group: CheckboxGroup,
})

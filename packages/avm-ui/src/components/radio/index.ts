import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Group } from './group'
import { Radio } from './radio'

export default attachPropertiesToComponent(Radio, {
  Group,
})

avm.define('avm-radio', Radio)
avm.define('avm-radio-group', Group)

import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Collapse, CollapsePanel } from './collapse'

export type { CollapsePanelProps } from './collapse'

export default attachPropertiesToComponent(Collapse, {
  Panel: CollapsePanel,
})

avm.define('avm-collapse', Collapse)
avm.define('avm-collapse-panel', CollapsePanel)

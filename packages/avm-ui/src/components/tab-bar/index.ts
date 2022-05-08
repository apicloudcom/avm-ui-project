import {TabBar, TabBarItem} from './tab-bar'
import {attachPropertiesToComponent} from '../../utils/attach-properties-to-component'

export type {TabBarProps} from './tab-bar'

export default attachPropertiesToComponent(TabBar, {
  Item: TabBarItem,
})

avm.define('avm-tabbar', TabBar)
avm.define('avm-tabbar-item', TabBarItem)
avm.define('avm-tab-bar', TabBar)
avm.define('avm-tab-bar-item', TabBarItem)

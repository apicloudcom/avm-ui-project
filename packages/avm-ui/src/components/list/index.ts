import './list.less'
import {List} from './list'
import {ListItem} from './list-item'

import {attachPropertiesToComponent} from '../../utils/attach-properties-to-component'

const properties = {
  Item: ListItem,
};

export default attachPropertiesToComponent(List, properties);

avm.define('avm-list', List)
avm.define('avm-list-item', ListItem)

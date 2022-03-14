import './badge.less'
import {Badge, dot} from "./badge";
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export default attachPropertiesToComponent(Badge, {
    dot,
  })

avm.define('avm-badge', Badge);
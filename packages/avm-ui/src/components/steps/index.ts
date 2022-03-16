import './steps.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Steps } from './steps'
import {Step} from './step'

export default attachPropertiesToComponent(Steps, {
    Step,
  })

  avm.define('avm-steps', Steps)
  avm.define('avm-step', Step)
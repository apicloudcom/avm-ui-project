import DefaultErrorIcon from './img/default.png'
import Busy from './img/busy.png'
import DisconnectedIcon from './img/disconnected.png'
import EmptyErrorIcon from './img/empty.png'

export const iconRecord: Record<
  'default' | 'disconnected' | 'empty' | 'busy',
  string
> = {
  default: DefaultErrorIcon,
  busy: Busy,
  disconnected: DisconnectedIcon,
  empty: EmptyErrorIcon,
}

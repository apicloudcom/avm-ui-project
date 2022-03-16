import { Swiper } from './swiper'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { SwiperItem } from './swiper-item'

export default attachPropertiesToComponent(Swiper, {
  Item: SwiperItem,
})

avm.define('avm-swiper', Swiper)
avm.define('avm-swiper-item', SwiperItem)

import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import CarouselList from './CarouselList'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Carousel)
        registerComponent(app, CarouselItem)
        registerComponent(app, CarouselList)
    }
}

use(Plugin)

export default Plugin

export {
    Carousel as BCarousel,
    CarouselItem as BCarouselItem,
    CarouselList as BCarouselList
}

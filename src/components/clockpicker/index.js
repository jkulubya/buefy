import Clockpicker from './Clockpicker'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Clockpicker)
    }
}

use(Plugin)

export default Plugin

export {
    Clockpicker as BClockpicker
}

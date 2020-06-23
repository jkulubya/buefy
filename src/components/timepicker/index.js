import Timepicker from './Timepicker'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Timepicker)
    }
}

use(Plugin)

export default Plugin

export {
    Timepicker as BTimepicker
}

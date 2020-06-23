import Datepicker from './Datepicker'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Datepicker)
    }
}

use(Plugin)

export default Plugin

export {
    Datepicker as BDatepicker
}

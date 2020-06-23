import Datetimepicker from './Datetimepicker'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Datetimepicker)
    }
}

use(Plugin)

export default Plugin

export {
    Datetimepicker as BDatetimepicker
}

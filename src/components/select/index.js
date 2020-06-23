import Select from './Select'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Select)
    }
}

use(Plugin)

export default Plugin

export {
    Select as BSelect
}

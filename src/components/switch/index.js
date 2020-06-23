import Switch from './Switch'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Switch)
    }
}

use(Plugin)

export default Plugin

export {
    Switch as BSwitch
}

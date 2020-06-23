import Icon from './Icon'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Icon)
    }
}

use(Plugin)

export default Plugin

export {
    Icon as BIcon
}

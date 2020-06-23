import Tooltip from './Tooltip'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Tooltip)
    }
}

use(Plugin)

export default Plugin

export {
    Tooltip as BTooltip
}

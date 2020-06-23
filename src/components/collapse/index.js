import Collapse from './Collapse'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Collapse)
    }
}

use(Plugin)

export default Plugin

export {
    Collapse as BCollapse
}

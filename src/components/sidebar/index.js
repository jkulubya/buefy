import Sidebar from './Sidebar'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Sidebar)
    }
}

use(Plugin)

export default Plugin

export {
    Sidebar as BSidebar
}

import Tabs from './Tabs'
import TabItem from './TabItem'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Tabs)
        registerComponent(app, TabItem)
    }
}

use(Plugin)

export default Plugin

export {
    Tabs as BTabs,
    TabItem as BTabItem
}

import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Dropdown)
        registerComponent(app, DropdownItem)
    }
}

use(Plugin)

export default Plugin

export {
    Dropdown as BDropdown,
    DropdownItem as BDropdownItem
}

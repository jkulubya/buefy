import Taginput from './Taginput'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Taginput)
    }
}

use(Plugin)

export default Plugin

export {
    Taginput as BTaginput
}

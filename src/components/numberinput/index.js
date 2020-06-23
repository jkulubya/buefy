import Numberinput from './Numberinput'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Numberinput)
    }
}

use(Plugin)

export default Plugin

export {
    Numberinput as BNumberinput
}

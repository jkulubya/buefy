import Input from './Input'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Input)
    }
}

use(Plugin)

export default Plugin

export {
    Input as BInput
}

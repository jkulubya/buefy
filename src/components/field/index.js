import Field from './Field'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Field)
    }
}

use(Plugin)

export default Plugin

export {
    Field as BField
}

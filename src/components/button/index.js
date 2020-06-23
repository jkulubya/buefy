import Button from './Button'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Button)
    }
}

use(Plugin)

export default Plugin

export {
    Button as BButton
}

import Progress from './Progress'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Progress)
    }
}

use(Plugin)

export default Plugin

export {
    Progress as BProgress
}

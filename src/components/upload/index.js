import Upload from './Upload'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Upload)
    }
}

use(Plugin)

export default Plugin

export {
    Upload as BUpload
}

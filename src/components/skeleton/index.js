import Skeleton from './Skeleton'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Skeleton)
    }
}

use(Plugin)

export default Plugin

export {
    Skeleton as BSkeleton
}

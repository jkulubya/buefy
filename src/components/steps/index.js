import Steps from './Steps'
import StepItem from './StepItem'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Steps)
        registerComponent(app, StepItem)
    }
}

use(Plugin)

export default Plugin

export {
    Steps as BSteps,
    StepItem as BStepItem
}

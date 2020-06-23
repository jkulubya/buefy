import * as components from './components'

import { merge } from './utils/helpers'
import config, { setOptions, setVueInstance } from './utils/config'
import { use, registerComponentProgrammatic } from './utils/plugins'

import ConfigComponent from './utils/ConfigComponent'

const Buefy = {
    install(app, options = {}) {
        setVueInstance(app)
        // Options
        setOptions(merge(config, options, true))
        // Components
        for (let componentKey in components) {
            app.use(components[componentKey])
        }
        // Config component
        registerComponentProgrammatic(app, 'config', ConfigComponent)
    }
}

use(Buefy)

export default Buefy

// export all components as vue plugin
export * from './components'
// export programmatic component
export { DialogProgrammatic } from './components/dialog'
export { LoadingProgrammatic } from './components/loading'
export { ModalProgrammatic } from './components/modal'
export { NotificationProgrammatic } from './components/notification'
export { SnackbarProgrammatic } from './components/snackbar'
export { ToastProgrammatic } from './components/toast'
export { default as ConfigProgrammatic } from './utils/ConfigComponent'
// export helpers
export * from './utils/helpers'

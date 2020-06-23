import Checkbox from './Checkbox'
import CheckboxButton from './CheckboxButton'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Checkbox)
        registerComponent(app, CheckboxButton)
    }
}

use(Plugin)

export default Plugin

export {
    Checkbox as BCheckbox,
    CheckboxButton as BCheckboxButton
}

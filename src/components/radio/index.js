import Radio from './Radio'
import RadioButton from './RadioButton'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Radio)
        registerComponent(app, RadioButton)
    }
}

use(Plugin)

export default Plugin

export {
    Radio as BRadio,
    RadioButton as BRadioButton
}

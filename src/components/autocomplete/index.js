import Autocomplete from './Autocomplete'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Autocomplete)
    }
}

use(Plugin)

export default Plugin

export {
    Autocomplete as BAutocomplete
}

import Message from './Message'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Message)
    }
}

use(Plugin)

export default Plugin

export {
    Message as BMessage
}

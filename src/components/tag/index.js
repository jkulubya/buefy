import Tag from './Tag'
import Taglist from './Taglist'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Tag)
        registerComponent(app, Taglist)
    }
}

use(Plugin)

export default Plugin

export {
    Tag as BTag,
    Taglist as BTaglist
}

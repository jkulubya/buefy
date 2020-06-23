import Pagination from './Pagination'
import PaginationButton from './PaginationButton'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Pagination)
        registerComponent(app, PaginationButton)
    }
}

use(Plugin)

export default Plugin

export {
    Pagination as BPagination,
    PaginationButton as BPaginationButton
}

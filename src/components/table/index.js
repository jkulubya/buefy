import Table from './Table'
import TableColumn from './TableColumn'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(app) {
        registerComponent(app, Table)
        registerComponent(app, TableColumn)
    }
}

use(Plugin)

export default Plugin

export {
    Table as BTable,
    TableColumn as BTableColumn
}

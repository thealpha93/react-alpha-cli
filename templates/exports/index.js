const rootTemplates = require('./rootTemplates')
const storeTemplates = require('./storeTemplates')
const serviceTemplates = require('./serviceTemplates')
const routerTemplates = require('./routerTemplates')
const pagesTemplates = require('./pagesTemplates')
const layoutsTemplates = require('./layoutsTemplates')
const componentsTemplates = require('./componentsTemplates')

const templates = {
    ...rootTemplates,
    ...storeTemplates,
    ...serviceTemplates,
    ...routerTemplates,
    ...pagesTemplates,
    ...layoutsTemplates,
    ...componentsTemplates
}

module.exports = templates
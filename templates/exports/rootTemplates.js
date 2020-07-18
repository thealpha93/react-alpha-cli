const Root = require('../Root')
const Index = require('../index')
const App = require('../App')
const Routes = require('../utilities/routes')
const AppCss = require('../App-css')
const Logo = require('../logo-svg')

const rootTemplates = {
    'src/Root.js': Root,
    'src/index.js': Index,
    'src/App.js': App,
    'src/App.css': AppCss,
    'src/logo.svg': Logo,
    'src/utilities/Routes.js': Routes,
}

module.exports = rootTemplates
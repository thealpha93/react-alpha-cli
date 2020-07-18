const Home = require('../pages/Home')
const Login = require('../pages/Login')
const LoginCss = require('../pages/Login/Login.module-css')
const Index = require('../pages')

module.exports = {
    'src/pages/index.js': Index,
    'src/pages/Login/index.js': Login,
    'src/pages/Login/Login.module.css': LoginCss,
    'src/pages/Home/index.js': Home
}
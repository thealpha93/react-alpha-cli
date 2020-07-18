const Index = require('../store/index')
const RootReducer = require('../store/rootReducer')
const RootSaga = require('../store/rootSaga')
const AuthActions = require('../store/auth/actions')
const AuthReducer = require('../store/auth/reducer')
const AuthSaga = require('../store/auth/saga')

module.exports = {
    'src/store/index.js': Index,
    'src/store/rootReducer.js': RootReducer,
    'src/store/rootSaga.js': RootSaga,
    'src/store/auth/actions.js': AuthActions,
    'src/store/auth/reducer.js': AuthReducer,
    'src/store/auth/saga.js': AuthSaga,
}
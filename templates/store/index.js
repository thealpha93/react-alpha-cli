module.exports = `import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./rootReducer";
import * as sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();


// Redux dev tools
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composed = reduxDevTools
  ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  : compose(applyMiddleware(sagaMiddleware));

export default createStore(reducer, composed);
sagas.registerWithMiddleware(sagaMiddleware)
`
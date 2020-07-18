module.exports = `import { types } from "./actions";

const initialState = {
  isLoggedIn: false,
  loggingIn: false,
  error: null,
  user: null,
};

// strategies
const strategies = {
  [types.REQUEST_LOGIN]: requestLogin,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_ERROR]: loginError,
  [types.REQUEST_LOGOUT]: requestLogout,
  [types.LOGOUT_SUCCESS]: logoutSuccess,
  [types.LOGOUT_ERROR]: logoutError,
  __default__: (state) => state,
}

// Reducer boiler plate
export default function reducer(state = initialState, action) {
  const transformer = strategies[action.type]
    ? strategies[action.type]
    : strategies.__default__;
  return transformer(state, action);
}

// Functions
function requestLogin(state) {
  return { ...state, loggingIn: true, error: null };
}

function loginSuccess(state, action) {
  return {
    ...state,
    loggingIn: false,
    isLoggedIn: true,
    user: action.payload,
  };
}

function loginError(state, action) {
  return { ...state, loggingIn: false, user: null, error: action.payload };
}

function requestLogout(state) {
  return { ...state, isLoggedIn: true, error: null };
}

function logoutSuccess() {
  return initialState
}

function logoutError(state, action) {
  return { ...state, isLoggedIn: true, error: action.payload };

}`
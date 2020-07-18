module.exports = `import { types } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService, LogoutService } from "../../service/authService";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSagaLogin() {
  yield takeLatest(types.REQUEST_LOGIN, workerSagaLogin);
}

function* workerSagaLogin({ payload }) {
  const token = yield call(LoginService, payload);
  if (token) {
    token && localStorage.setItem("user", token);

    // dispatch a success action to the store with logged in response
    yield put({ type: types.LOGIN_SUCCESS, token });
  } else {
    // dispatch an error action to the store with logged in response
    yield put({
      type: types.LOGIN_ERROR,
      payload: { message: "something went wrong" },
    });
  }
}

export function* watcherSagaLogout() {
  yield takeLatest(types.REQUEST_LOGOUT, workerSagaLogout);
}

function* workerSagaLogout() {
    try {
      yield call(LogoutService);
      localStorage.clear();
      yield put({ type: types.LOGOUT_SUCCESS });
    } catch (error) {
      yield put({ type: types.LOGOUT_ERROR, payload: error });
    }
  }
`
module.exports = `
import * as authSaga from "./auth/saga";

const sagas = {
  ...authSaga,
};

export function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}`
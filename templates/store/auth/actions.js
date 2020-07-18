module.exports = `export const types = {
    REQUEST_LOGIN: "[AUTH] Request login",
    LOGIN_SUCCESS: "[AUTH] Login Success",
    LOGIN_ERROR: "[AUTH] Login Error",
    REQUEST_LOGOUT: "[AUTH] Request logout",
    LOGOUT_SUCCESS: "[AUTH] Logout Success",
  };
  
  export const RequestLogin = (payload) => {
    return {
      type: types.REQUEST_LOGIN,
      payload,
    };
  };
  
  export const LoginSuccess = (user) => {
    return {
      type: types.LOGIN_SUCCESS,
      payload: user,
    };
  };
  
  // Logout
  export const RequestLogout = () => {
    return {
      type: types.REQUEST_LOGOUT,
    };
  };
  `;

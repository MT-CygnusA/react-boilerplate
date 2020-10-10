import { getAuthData, login, resetAuthData, setAuthData } from '../../api/auth.api';
import { AuthRequest } from '../../interfaces/api.interface';
import { authLogin, authLoginFailure, authLoginSuccess, authLogout } from './actions';
import { ThunkResult } from '../index';
import { isAuthenticated } from './selectors';

export const restoreSession = (): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  console.log('Restore session');
  const sessionData = getAuthData();
  if (sessionData && !isAuthenticated(getState())) {
    setAuthData(sessionData);
    dispatch(authLoginSuccess(sessionData));
  }
};

export const signIn = (data: AuthRequest): ThunkResult<Promise<void>> => async (dispatch) => {
  dispatch(authLogin());
  try {
    const authData = await login(data);
    setAuthData(authData);
    dispatch(authLoginSuccess(authData));
  } catch (error) {
    dispatch(authLoginFailure(error.response?.data.message || 'Error'));
  }
};

export const logout = (): ThunkResult<Promise<void>> => async (dispatch) => {
  resetAuthData();
  dispatch(authLogout());
  window.location.href = "/";
};

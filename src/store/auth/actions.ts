import { action } from 'typesafe-actions';
import { AuthData } from '../../interfaces/api.interface';

export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';

export const authLogout = () => action(AUTH_LOGOUT_REQUEST);
export const authLogin = () => action(AUTH_LOGIN_REQUEST);
export const authLoginSuccess = ({ token, expire }: AuthData) => action(AUTH_LOGIN_SUCCESS, { token, expire });
export const authLoginFailure = (error: string) => action(AUTH_LOGIN_FAILURE, error);

export type AuthAction =
  | ReturnType<typeof authLogout>
  | ReturnType<typeof authLogin>
  | ReturnType<typeof authLoginSuccess>
  | ReturnType<typeof authLoginFailure>;

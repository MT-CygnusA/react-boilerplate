import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT_REQUEST, AuthAction } from './actions';

export type AuthState = {
  isLoading: boolean;
  token: string | null;
  expire: string | null;
  error: string | null;
};

const initialState: AuthState = {
  isLoading: false,
  token: null,
  expire: null,
  error: null,
};

const auth = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        token: null,
        expire: null,
        isLoading: false,
      };
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        expire: action.payload.expire,
        isLoading: false,
        error: null,
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default auth;

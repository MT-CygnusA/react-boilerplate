import { AppState } from '../index';

export const getAuthError = (state: AppState) => state.auth.error;

export const isAuthenticated = (state: AppState) => Boolean(state.auth.token);

export const isLoading = (state: AppState) => state.auth.isLoading;

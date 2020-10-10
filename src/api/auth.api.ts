import internalAPI from './internalAPI';
import { APIResponse, AuthData, AuthRequest, AuthResponse } from '../interfaces/api.interface';
import { StorageService } from '../services/storage.service';

export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await internalAPI.post<AuthRequest, APIResponse<AuthResponse>>('auth/login', { ...data });
  return response.data;
};

export const setAuthData = ({ access_token, expire } : AuthData): void => {
  internalAPI.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  StorageService.set<AuthData>('auth', { access_token, expire});
};

export const getAuthData = (): AuthData | null => {
  return StorageService.get('auth');
};

export const resetAuthData = (): void => {
  internalAPI.defaults.headers.common['Authorization'] = '';
  StorageService.remove('auth');
};

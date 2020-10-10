import internalAPI from './internalAPI';
import { APIResponse, AuthData, AuthRequest, AuthResponse } from '../interfaces/api.interface';
import { StorageService } from '../services/storage.service';

export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await internalAPI.post<AuthRequest, APIResponse<AuthResponse>>('login', { ...data });
  return response.data;
};

export const setAuthData = ({ token, expire } : AuthData): void => {
  internalAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  StorageService.set<AuthData>('auth', { token, expire});
};

export const getAuthData = (): AuthData | null => {
  return StorageService.get('auth');
};

export const resetAuthData = (): void => {
  internalAPI.defaults.headers.common['Authorization'] = '';
  StorageService.remove('auth');
};

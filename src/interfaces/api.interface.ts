export interface APIResponse<T> extends Response {
  data: T;
}

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthData {
  expire: string;
  token: string;
}

export interface AuthResponse extends AuthData {
  code: number;
}

import axios from 'axios';
import { getAuthData, resetAuthData } from './auth.api';

const internalAPI = axios.create({
  baseURL: 'https://example.com/',
});

internalAPI.interceptors.request.use(
  (config) => {
    const authData = getAuthData();
    if (authData?.token) {
      config.headers['Authorization'] = 'Bearer ' + authData.token;
    }

    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

internalAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && getAuthData()) {
      resetAuthData();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default internalAPI;

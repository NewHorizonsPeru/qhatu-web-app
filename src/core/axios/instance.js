import axios from 'axios';
import TokenService from '../services/TokenService';

const instance = axios.create({
  baseURL: 'https://localhost:44315/api',
});

instance.interceptors.request.use(
  (config) => {
    if (TokenService.getUserData() !== null) {
      const token = TokenService.getAccessToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

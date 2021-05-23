import axios from 'axios';
import { BASE_URL } from '../constants/config';
import { getToken } from '../utils/storageUtils';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60 * 60 * 5,
  headers: {
    Authorization: `Bearer ${getToken}`,
  },
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// Response interceptor
axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error));

// Auth
const login = (params) => axiosInstance.post('/auth/login', params);
const register = (params) => axiosInstance.post('/auth/register', params);

export default {
  login,
  register
};

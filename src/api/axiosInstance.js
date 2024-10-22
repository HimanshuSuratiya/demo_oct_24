import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://api.example.com',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-storage');
  const {isAuthenticated, accessToken} = JSON.parse(token)?.state || {}
  if (isAuthenticated && accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;

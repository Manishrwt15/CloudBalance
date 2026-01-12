import axios from 'axios'
import { persistor } from '../store/index';
import { store } from '../store/index';
import {showError} from './toast'
const { dispatch } = store;


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})


axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  showError("Request error. Please try again.");
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        showError("Session expired. Please log in again.");
        localStorage.clear();
        persistor.purge();
        dispatch({ type: 'LOGOUT' });
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance

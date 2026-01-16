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
  const token = localStorage.getItem('authToken');

    if (error.response) {
      const status = error.response.status;

      if (status === 401){
        token != null && showError("Session expired. Please log in again.");
        localStorage.removeItem('authToken'); 
        persistor.purge();
        dispatch({ type: 'LOGOUT' });
      }
      else if (status === 403) {
        showError("Access Denied! You don't have permission for this action.");
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance

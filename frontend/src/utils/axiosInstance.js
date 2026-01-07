import axios from 'axios'

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
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        alert('Session expired. Please login again.');

        localStorage.clear();
        window.location.href = 'cloudbalance/login';
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance

import axiosInstance from '../utils/axiosInstance';

export const getUser = () => {
    return axiosInstance.get('/dashboard/user');
}

export const createUser = (userData) => {
    return axiosInstance.post('/dashboard/user/add', userData);
}

export const updateUser = (userId, userData) => {
    return axiosInstance.put(`/dashboard/user/edit/${userId}`, userData);
}


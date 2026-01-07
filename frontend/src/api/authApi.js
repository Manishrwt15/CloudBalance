import axiosInstance from '../utils/axiosInstance';

export const login = async (email, password) => {
    const response = await axiosInstance.post('/cloudbalance/login', { email, password });
    return response.data;
};


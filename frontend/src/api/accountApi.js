import axiosInstance from '../utils/axiosInstance';

const createAccount = async (accountData) => {
    return axiosInstance.post('/dashboard/onboarding', accountData);
};

const getAccounts = async () => {
    return axiosInstance.get('/dashboard/accounts');
};

const getAccountDetails = async (accountId) => {
    return axiosInstance.get(`/dashboard/account/${accountId}`);
};

const getCustomerAccounts = async () => {
  return axiosInstance.get('/dashboard/customer/accounts');
};

export { createAccount, getAccounts, getAccountDetails, getCustomerAccounts};


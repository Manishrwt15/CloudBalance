export const SET_SELECTED_ACCOUNT = 'SET_SELECTED_ACCOUNTS';
export const SET_ACCOUNT = 'SET_ACCOUNTS';

export const setSelectedAccount = (accountId) => {
    return {
        type : SET_SELECTED_ACCOUNT,
        payload : accountId
    }
}

export const setAccounts = (accounts) => {
    return {
        type: SET_ACCOUNT,
        payload: accounts
    }
}
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => {
    return {
        type: LOGIN,
        payload: user
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};


// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const loginSuccess = (user, token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: { user, token },
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

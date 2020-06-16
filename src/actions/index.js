import { apiUrl } from '../config';
import cookie from 'react-cookies';
import store from '../store';
import history from '../history';
const axios = require('axios');

/*==============================================     Login     ==============================================*/

const login = (accessToken, error) => ({
    type: 'LOG_IN',
    accessToken: accessToken,
    error: error
});

const onLogin = (username, password) => async dispatch => {
    try {
        const res = await axios.post(`${apiUrl}/auth/login`, {
            username: username,
            password: password
        });

        const { token } = res.data;

        cookie.save('CryptoBankAccessToken', token, { path: '/', expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) });
        dispatch(login(token, null));

        history.replace({ pathname: '/' });
    } catch (error) {
        dispatch(login(null, error.response.data.message));
    }
};

/*==============================================     Logout     ==============================================*/

const logout = () => ({
    type: 'LOG_OUT'
});

const onLogout = () => async dispatch => {
    cookie.remove('CryptoBankAccessToken');
    dispatch(logout());
    history.replace({ pathname: '/login' });
};


/*==============================================     GetUserInfo     ==============================================*/

const setUserInfo = (userInfo) => ({
    type: 'SET_USER_INFO',
    userInfo: userInfo
});

const onGetUserInfo = () => async dispatch => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    if (!accessToken) {
        accessToken = cookie.load('CryptoBankAccessToken');
    }

    try {
        const userInfo = await axios.get(`${apiUrl}/users/me`, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        dispatch(setUserInfo(userInfo.data));
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

/*==============================================     GetUserByAccountNumber     ==============================================*/

const onGetUserByAccountNumber = async (account_number) => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.get(`${apiUrl}/users/${account_number}`, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        return res.data.full_name;
    } catch (error) {
        return '';
    }
}

/*==============================================     SendMoneyToOthers     ==============================================*/

const newTransaction = () => ({
    type: 'NEW_TRANSACTION',
});

const completedTransaction = () => ({
    type: 'COMPLETED_TRANSACTION'
});

const onSendMoneyToOthers = (receiver) => async dispatch => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.post(`${apiUrl}/transactions`, receiver, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        dispatch(setUserInfo(res.data));
        dispatch(newTransaction());
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

const RestoreAccessToken = (accessToken) => ({
    type: 'RESTORE_TOKEN',
    accessToken: accessToken
});


export {
    onLogin,
    onLogout,
    onGetUserByAccountNumber,
    RestoreAccessToken,
    onGetUserInfo,
    onSendMoneyToOthers,
    newTransaction,
    completedTransaction
};

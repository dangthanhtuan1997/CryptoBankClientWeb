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
        const res = await axios.post(`${apiUrl}/auth/user/login`, {
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

const onGetUserByAccountNumber = async (accountNumber, scope, partner) => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.get(`${apiUrl}/users/${accountNumber}?scope=${scope}&partner=${partner}`, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        return res.data.full_name;
    } catch (error) {
        return '';
    }
}

/*==============================================     Transactions     ==============================================*/

const setPopup = (status, title, detail = '') => ({
    type: 'SET_POPUP',
    status: status,
    title: title,
    detail: detail
});

const clearPopup = () => ({
    type: 'CLEAR_POPUP'
});

const setTransactions = (transactions) => ({
    type: 'SET_TRANSACTIONS',
    transactions: transactions
});

const onGetTransactions = () => async dispatch => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.get(`${apiUrl}/transactions/user`, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        dispatch(setTransactions(res.data));
        return res.data;
    } catch (error) {
        alert(JSON.stringify(error.response.data.message));
    }
}

/*==============================================     SendMoneyToOthers     ==============================================*/

const onCreateNewTransaction = (transaction) => async dispatch => {
    const state = store.getState();
    const accessToken = state.userReducer.accessToken;
    const transactions = state.transactionReducer.data;

    try {
        const res = await axios.post(`${apiUrl}/transactions/user`, transaction, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        if (transaction.type === 'transfer') {
            dispatch(setPopup('success', 'pending-transaction'));
            alert(res.data.otp)
        }
        else {
            if (transactions) {
                transactions.unshift(res.data.transaction);
            }

            dispatch(setPopup('success', 'success-debt-remind'));
            dispatch(setTransactions(transactions));
        }
    } catch (error) {
        dispatch(setPopup('error', 'error-transaction', JSON.stringify(error.response.data.message)));
    }
}

const onGetOTP = (transactionId) => async dispatch => {
    const state = store.getState();
    const accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.get(`${apiUrl}/transactions/otp?transaction_id=${transactionId}`, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        dispatch(setPopup('success', 'pending-transaction'));
        alert(res.data.otp);
    } catch (error) {
        dispatch(setPopup('error', 'error-transaction', JSON.stringify(error.response.data.message)));
    }
}

const onConfirmSendMoneyToOthers = (otp) => async dispatch => {
    const state = store.getState();
    const accessToken = state.userReducer.accessToken;
    const transactions = state.transactionReducer.data;
    const data = { otp };

    try {
        const res = await axios.post(`${apiUrl}/transactions/user/confirm`, data, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        if (transactions) {
            if (res.data.transaction.type === 'transfer') {
                transactions.unshift(res.data.transaction);
            }
            else {
                transactions[transactions.findIndex(item => item._id === res.data.transaction._id)].status = 'confirmed';
            }
        }

        dispatch(setUserInfo(res.data.depositor));
        dispatch(setPopup('success', 'success-transaction'));
        dispatch(setTransactions(res.data.transactions));
    } catch (error) {
        dispatch(setPopup('error', 'error-transaction', JSON.stringify(error.response.data.message)));
    }
}

/*==============================================     UpdatePassword     ==============================================*/

const onUpdatePassword = (oldPassword, newPassword) => async dispatch => {
    const state = store.getState();
    const accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.patch(`${apiUrl}/users/password`, { oldPassword, newPassword }, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });
        dispatch(setPopup('success', 'success-update-password'));
    } catch (error) {
        dispatch(setPopup('error', 'error-update-password', error.response.data.message));
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
    onCreateNewTransaction,
    setPopup,
    clearPopup,
    onGetTransactions,
    onConfirmSendMoneyToOthers,
    onUpdatePassword,
    onGetOTP
};

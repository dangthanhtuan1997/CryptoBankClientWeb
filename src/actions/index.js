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

const onGetUserByAccountNumber = async (accountNumber, type, partner) => {
    const state = store.getState();
    let accessToken = state.userReducer.accessToken;

    try {
        const res = await axios.get(`${apiUrl}/users/${accountNumber}?type=${type}&partner=${partner}`, {
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

const newSuccessTransaction = () => ({
    type: 'NEW_SUCCESS_TRANSACTION',
});

const newFailTransaction = (failReason) => ({
    type: 'NEW_FAIL_TRANSACTION',
    failReason: failReason
});

const completedTransaction = () => ({
    type: 'COMPLETED_TRANSACTION'
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
        alert(JSON.stringify('get error ', error.response.data.message));
    }
}

/*==============================================     SendMoneyToOthers     ==============================================*/

const onSendMoneyToOthers = (transaction, type, partner) => async dispatch => {
    const state = store.getState();
    const accessToken = state.userReducer.accessToken;
    const transactions = state.transactionReducer.data;
    transaction.type = type;
    transaction.partner = partner;

    if (transaction.receiver.full_name === '') {
        return dispatch(newFailTransaction('Không tìm thấy người nhận.'));
    }

    if (isNaN(transaction.amount) || transaction.amount <= 0) {
        return dispatch(newFailTransaction('Số tiền chuyển không hợp lệ.'));
    }

    if (state.userReducer.userInfo.balance - transaction.amount < 0) {
        return dispatch(newFailTransaction('Không đủ số dư để thực hiện giao dịch.'));
    }

    try {
        const res = await axios.post(`${apiUrl}/transactions/user`, transaction, {
            headers: {
                "x-access-token": `JWT ${accessToken}`
            }
        });

        if (transactions) {
            transactions.unshift(res.data.transaction);
        }

        dispatch(setUserInfo(res.data.depositor));
        dispatch(newSuccessTransaction());
        dispatch(setTransactions(transactions));
    } catch (error) {
        dispatch(newFailTransaction(JSON.stringify(error.response.data.message)));
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
    newSuccessTransaction,
    newFailTransaction,
    completedTransaction,
    onGetTransactions
};

import { apiUrl } from '../config';
import cookie from 'react-cookies';
import store from '../store';
import history from '../history';
const axios = require('axios');

/*==============================================     Login     ==============================================*/

const Login = (accessToken, error) => ({
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
        dispatch(Login(token, null));

        history.replace({ pathname: '/' });
    } catch (error) {
        dispatch(Login(null, error.response.data.message));
    }
};

/*==============================================     Logout     ==============================================*/

const Logout = () => ({
    type: 'LOG_OUT'
});

const onLogout = () => async dispatch => {
    cookie.remove('CryptoBankAccessToken');
    dispatch(Logout());
};


/*==============================================     GetUserInfo     ==============================================*/

const SetUserInfo = (userInfo) => ({
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
        
        dispatch(SetUserInfo(userInfo.data));
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

/*==============================================     Register     ==============================================*/

const Register = (error) => ({
    type: 'REGISTER',
    error: error
});

const onRegister = (username, password) => async dispatch => {
    try {
        await axios.post(`${apiUrl}/auth/signup`, {
            username: username,
            password: password
        });
        dispatch(onLogin(username, password));
    } catch (error) {
        console.log(error.response.data);
        dispatch(Register(error.response.data.message));
    }
}

const RestoreAccessToken = (accessToken) => ({
    type: 'RESTORE_TOKEN',
    accessToken: accessToken
});


export { onLogin, onLogout, onRegister, RestoreAccessToken, onGetUserInfo };

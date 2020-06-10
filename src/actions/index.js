import { apiUrl } from '../config';
import cookie from 'react-cookies';
import store from '../store';
import { Redirect } from 'react-router-dom';
import history from '../history';
const axios = require('axios');

/*==============================================     Login     ==============================================*/

const Login = (userToken, error) => ({
    type: 'LOG_IN',
    userToken: userToken,
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

        history.push('/');
    } catch (error) {
        dispatch(Login(null, error.response.data.message));
    }
};

/*==============================================     Logout     ==============================================*/

const Logout = () => ({
    type: 'LOG_OUT'
});

const onLogout = () => async dispatch => {
    //await SecureStore.deleteItemAsync('userToken');
    dispatch(Logout());
};


/*==============================================     Register     ==============================================*/

const Register = (error) => ({
    type: 'REGISTER',
    error: error
});

const onRegister = (username, password, navigation) => async dispatch => {
    try {
        await axios.post(`${apiUrl}/auth/signup`, {
            username: username,
            password: password
        });
        dispatch(onLogin(username, password, navigation));
    } catch (error) {
        console.log(error.response.data);
        dispatch(Register(error.response.data.message));
    }
}

const RestoreUserToken = (usertoken) => ({
    type: 'RESTORE_TOKEN',
    userToken: usertoken
});


export { onLogin, onLogout, onRegister, RestoreUserToken };

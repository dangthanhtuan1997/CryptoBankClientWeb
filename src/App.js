import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import history from './history';
import { RestoreAccessToken } from './actions/index';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import DebtPage from './pages/DebtPage';
import CardPage from './pages/CardPage';
import FriendPage from './pages/FriendPage';

import TransactionModal from './components/TransactionModal';
import RemindTransactionModal from './components/RemindTransactionModal';
import OTPModal from './components/OTPModal';
import SuccessfulModal from './components/SuccessfulModal';
import ErrorModal from './components/ErrorModal';
import ChangePasswordModal from './components/ChangePasswordModal';

import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './config';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = cookie.load('CryptoBankAccessToken');
  return (
    <Route {...rest} render={props => (
      accessToken ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

const socket = io(config.socketUrl);

function App(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = cookie.load('CryptoBankAccessToken');

    if (accessToken) {
      const { RestoreAccessToken } = props;
      RestoreAccessToken(accessToken);
    }
  }, []);

  useEffect(() => {
    if (props.user.userInfo) {
      socket.emit('init', props.user.userInfo.account_number);
    }
  }, [props.user.userInfo]);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <>
          <div className="nk-app-root">
            <div className="nk-main ">
              <Menu />
              <div className="nk-wrap ">
                <Header />
                <PrivateRoute exact path="/" component={DashboardPage} />
                <PrivateRoute exact path="/transactions" component={TransactionsPage} />
                <PrivateRoute exact path="/personal-info" component={PersonalInfoPage} />
                <PrivateRoute exact path="/friends" component={FriendPage} />
                <PrivateRoute exact path="/debt" component={DebtPage} />
                <PrivateRoute exact path="/card" component={CardPage} />
                <Footer />

              </div>
            </div>
          </div>
        </>
      </Switch>

      <ErrorModal></ErrorModal>
      <SuccessfulModal></SuccessfulModal>
      <OTPModal></OTPModal>
      <TransactionModal></TransactionModal>
      <RemindTransactionModal></RemindTransactionModal>
      <ChangePasswordModal></ChangePasswordModal>
    </Router>
  );
}

export default connect(state => {
  return {
    user: state.userReducer
  }
}, dispatch => {
  return {
    RestoreAccessToken: (accessToken) => dispatch(RestoreAccessToken(accessToken)),
  }
})(App);
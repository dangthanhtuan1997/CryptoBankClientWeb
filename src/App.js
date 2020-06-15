import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import cookie from 'react-cookies';
import history from './history';
import { RestoreAccessToken } from './actions/index';
import { connect } from 'react-redux';
import TransactionModal from './components/TransactionModal';
import ConfirmTransactionModal from './components/ConfirmTransactionModal';
import ConfirmedTransactionModal from './components/ConfirmedTransactionModal';
import RemindTransactionModal from './components/RemindTransactionModal';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

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

function App(props) {
  useEffect(() => {
    const accessToken = cookie.load('CryptoBankAccessToken');

    if (accessToken) {
      const { RestoreAccessToken } = props;
      RestoreAccessToken(accessToken);
    }
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <div className="nk-app-root">
          <div className="nk-main ">
            <Menu />
            <div className="nk-wrap ">
              <Header />
              <PrivateRoute exact path="/" component={DashboardPage} />
              <Footer />
            </div>
          </div>
        </div>
      </Switch>
      
      <TransactionModal />
      <ConfirmTransactionModal />
      <ConfirmedTransactionModal />
      <RemindTransactionModal />
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
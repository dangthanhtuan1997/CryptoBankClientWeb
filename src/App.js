import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import cookie from 'react-cookies';
import history from './history';
import { RestoreAccessToken } from './actions/index';
import { connect } from 'react-redux';

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
        <PrivateRoute exact path="/" component={DashboardPage} />
      </Switch>
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
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import cookie from 'react-cookies';
import history from './history';

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

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
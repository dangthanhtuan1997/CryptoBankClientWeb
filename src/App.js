import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import cookie from 'react-cookies';
import store from './store';
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
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
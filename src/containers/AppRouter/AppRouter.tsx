import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginPage from '../LoginPage';
import DashboardPage from '../Dashboard';
import PrivateRoute from './PrivateRoute';
import { AppDispatch } from '../../store';
import { restoreSession } from '../../store/auth/thunk';

const mapDispatchToProps = (dispatch: AppDispatch) => bindActionCreators({ restoreSession }, dispatch);
type AppRouterProps = ReturnType<typeof mapDispatchToProps>;


const AppRouter: React.FC<AppRouterProps> = ({ restoreSession }) => {

  useEffect(() => {
    // Restoring the session if token is in localStorage
    restoreSession();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(undefined, mapDispatchToProps)(AppRouter);

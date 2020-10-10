import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppDispatch, AppState } from '../../store';
import { isAuthenticated } from '../../store/auth/selectors';
import { logout } from '../../store/auth/thunk';
import { AuthenticatedLayout } from '../../components/AuthenticatedLayout/AuthenticatedLayout';

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: isAuthenticated(state),
});
const mapDispatchToProps = (dispatch: AppDispatch) => bindActionCreators({ logout }, dispatch);

type PrivateRouteProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteProps;


const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, isAuthenticated, logout, location, ...rest }) => {
  if (!Component) return null;

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return (
            <AuthenticatedLayout onLogout={handleLogout}>
              <Component {...props} />
            </AuthenticatedLayout>
          );
        }}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

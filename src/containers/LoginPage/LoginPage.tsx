import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react';

import { AppDispatch, AppState } from '../../store';
import { getAuthError, isAuthenticated, isLoading } from '../../store/auth/selectors';
import { signIn } from '../../store/auth/thunk';

const mapStateToProps = (state: AppState) => ({
  error: getAuthError(state),
  isAuthenticated: isAuthenticated(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => bindActionCreators({ signIn }, dispatch);

type LoginPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const LoginPage: React.FC<LoginPageProps> = ({ isLoading, isAuthenticated, error, signIn }) => {
  // TODO: use Formik instead of local state, link: https://github.com/formium/formik
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  if (isAuthenticated) {
    return <Redirect to="/feed" />;
  }

  const handleSubmit = () => {
    signIn({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" data-test-id='loginPage'>
      <Grid.Column style={{ maxWidth: 450 }}>
        {error && (
          <Message
            error
            header="Login error"
            content={error}
            data-test-id='loginErrorMessage'
          />
        )}
        <Form size="large" onSubmit={handleSubmit} loading={isLoading}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              value={username}
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(e, { value }) => setUsername(value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e, { value }) => setPassword(value)}
            />

            <Button color="teal" fluid size="large" data-test-id='loginSubmit'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

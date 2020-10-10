import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import configureStore from './store';
import AppRouter from './containers/AppRouter/AppRouter';

const store = configureStore();

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
};

export default hot(App);

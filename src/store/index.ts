import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReviewAction } from './review/actions';
import { AuthAction } from './auth/actions';
import auth from './auth/reducers';
import review from './review/reducers';

const rootReducer = combineReducers({
  auth,
  review,
});

export type RootAction = ReviewAction | AuthAction;

export type AppState = ReturnType<typeof rootReducer>;

export type ThunkResult<R> = ThunkAction<R, AppState, null, RootAction>;

export type AppDispatch = ThunkDispatch<AppState, null, RootAction>;

const configureStore = (preloaderState: Partial<AppState> = {}) => {
  const middleware: Middleware[] = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleware);

  return createStore(rootReducer, preloaderState, middleWareEnhancer);
};

export default configureStore;

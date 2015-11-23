import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import { syncReduxAndRouter } from 'redux-simple-router';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  const history = createBrowserHistory();
  syncReduxAndRouter(history, store);
  return store;
}

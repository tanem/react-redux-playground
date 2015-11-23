import { combineReducers } from 'redux';
import counter from './counter';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  counter,
  router
});

export default rootReducer;

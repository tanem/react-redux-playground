import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default configureStore([ thunk ]);

function configureStore(middleware = []) {
  return function mockStore(getState) {
    function mockStoreWithoutMiddleware() {
      const receivedActions = [];
      return {
        
        getReceivedActions() {
          return receivedActions;
        },

        getState() {
          return typeof getState === 'function' ?
            getState() :
            getState;
        },

        dispatch(action) {
          receivedActions.push(action);
        }
        
      };

    }

    const mockStoreWithMiddleware = applyMiddleware(
      ...middleware
    )(mockStoreWithoutMiddleware);

    return mockStoreWithMiddleware();
  };

}

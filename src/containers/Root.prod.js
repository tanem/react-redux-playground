import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createBrowserHistory';
import configureRoutes from '../routes';
import App from './App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        {configureRoutes(createHistory(), App)}
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

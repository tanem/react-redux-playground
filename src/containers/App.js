import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';
import Button from '../components/button';

export class App extends Component {
  render() {
    const {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
      counter
    } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <Button clickHandler={increment}>+</Button>
        {' '}
        <Button clickHandler={decrement}>-</Button>
        {' '}
        <Button clickHandler={incrementIfOdd}>Increment if odd</Button>
        {' '}
        <Button clickHandler={incrementAsync}>Increment async</Button>
      </p>
    );
  }
}

App.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component, PropTypes } from 'react';
import Button from './Button';

export default class Counter extends Component {
  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
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

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

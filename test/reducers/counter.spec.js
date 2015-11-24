import expect from 'expect';
import deepFreeze from 'deep-freeze';
import counter from '../../src/reducers/counter';
import * as types from '../../src/constants/ActionTypes';

describe('counter reducer', () => {

  it('should handle initial state', () => {
    expect(counter(undefined, {})).toBe(0);
  });

  it('should handle INCREMENT_COUNTER', () => {
    const action = { type: types.INCREMENT_COUNTER };
    deepFreeze(action);
    expect(counter(undefined, action)).toBe(1);
  });

  it('should handle DECREMENT_COUNTER', () => {
    const action = { type: types.DECREMENT_COUNTER };
    deepFreeze(action);
    expect(counter(1, action)).toBe(0);
  });

});

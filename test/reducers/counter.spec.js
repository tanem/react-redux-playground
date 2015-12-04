import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import counter from '../../src/reducers/counter';
import * as types from '../../src/constants/ActionTypes';

describe('counter reducer', () => {

  it('should handle initial state', () => {
    const actual = counter(undefined, {});
    const expected = 0;

    expect(actual).to.equal(expected);
  });

  it('should handle INCREMENT_COUNTER', () => {
    const action = { type: types.INCREMENT_COUNTER };
    deepFreeze(action);

    const actual = counter(undefined, action);
    const expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should handle DECREMENT_COUNTER', () => {
    const action = { type: types.DECREMENT_COUNTER };
    deepFreeze(action);

    const actual = counter(1, action);
    const expected = 0;

    expect(actual).to.equal(expected);
  });

});

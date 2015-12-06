import { expect } from 'chai';
import sinon from 'sinon';
import * as actions from '../../src/actions/counter';
import * as types from '../../src/constants/ActionTypes';
import mockStore from '../fixtures/mockStore';

describe('counter actions', () => {

  it('increment should create increment action', () => {
    const actual = actions.increment();
    const expected = { type: types.INCREMENT_COUNTER };

    expect(actual).to.deep.equal(expected);
  });

  it('decrement should create decrement action', () => {
    const actual = actions.decrement();
    const expected = { type: types.DECREMENT_COUNTER };

    expect(actual).to.deep.equal(expected);
  });

  it('incrementIfOdd should create increment action if counter is odd', () => {
    const store = mockStore({ counter: 1 });
    
    store.dispatch(actions.incrementIfOdd());
      
    const actual = store.getReceivedActions();
    const expected = [{ type: types.INCREMENT_COUNTER }];

    expect(actual).to.deep.equal(expected);
    
  });

  it('should not create increment action if counter is even', () => {
    const store = mockStore({ counter: 2 });
    
    store.dispatch(actions.incrementIfOdd());
      
    const actual = store.getReceivedActions();
    const expected = [];

    expect(actual).to.deep.equal(expected);
  });

  it('incrementAsync should create increment action with default delay of 1000ms', () => {
    const clock = sinon.useFakeTimers();
    const store = mockStore({ counter: 0 });
    
    store.dispatch(actions.incrementAsync());
    clock.tick(1000);

    const actual = store.getReceivedActions();
    const expected = [{ type: types.INCREMENT_COUNTER }];

    expect(actual).to.deep.equal(expected);

    clock.uninstall();
  });

  it('incrementAsync should create increment action with custom delay of 500ms', () => {
    const clock = sinon.useFakeTimers(); 
    const store = mockStore({ counter: 0 });
    
    store.dispatch(actions.incrementAsync(500));
    clock.tick(500);

    const actual = store.getReceivedActions();
    const expected = [{ type: types.INCREMENT_COUNTER }];

    expect(actual).to.deep.equal(expected);

    clock.uninstall();
  });

});

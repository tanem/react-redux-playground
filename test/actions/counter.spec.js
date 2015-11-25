import expect from 'expect';
import lolex from 'lolex';
import * as actions from '../../src/actions/counter';
import * as types from '../../src/constants/ActionTypes';

describe('counter actions', () => {

  it('increment should create increment action', () => {
    expect(actions.increment()).toEqual({ type: types.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).toEqual({ type: types.DECREMENT_COUNTER });
  });

  it('incrementIfOdd should create increment action if counter is odd', () => {
    const dispatch = expect.createSpy();
    const getState = () => ({ counter: 1 });

    actions.incrementIfOdd()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({ type: types.INCREMENT_COUNTER });
    expect.restoreSpies();
  });

  it('incrementIfOdd should not create increment action if counter is even', () => {
    const dispatch = expect.createSpy();
    const getState = () => ({ counter: 2 });

    actions.incrementIfOdd()(dispatch, getState);

    expect(dispatch).toNotHaveBeenCalled();
    expect.restoreSpies();
  });

  it('incrementAsync should create increment action', () => {
    const clock = lolex.install();
    const dispatch = expect.createSpy();

    actions.incrementAsync()(dispatch);
    clock.tick(1000);

    expect(dispatch).toHaveBeenCalledWith({ type: types.INCREMENT_COUNTER });

    expect.restoreSpies();
    clock.uninstall();
  });

});

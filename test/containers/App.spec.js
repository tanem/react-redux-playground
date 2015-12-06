import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { App } from '../../src/containers/App';
import Button from '../../src/components/button';
import { createRenderer as shallowRenderer } from 'react-addons-test-utils';

const setup = () => {
  const props = {
    increment: spy(),
    decrement: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    counter: 0
  };

  const renderer = shallowRenderer();
  renderer.render(<App {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output
  };
};

describe('App container', () => {

  it('should output the clicked count', () => {
    const { output } = setup();

    const actual = output.props.children.slice(0, 3).join('');
    const expected = 'Clicked: 0 times';

    expect(actual).to.equal(expected);
  });

  describe('increment button', () => {

    it('should render correctly', () => {
      const { output, props } = setup();
      const button = output.props.children[4];

      expect(button.type).to.equal(Button);
      expect(button.props.clickHandler).to.equal(props.increment);
    });

    it('should call the increment function when clicked', () => {
      const { output, props } = setup();
      const button = output.props.children[4];

      button.props.clickHandler();

      expect(props.increment.callCount).to.equal(1);
    });

  });

  describe('decrement button', () => {

    it('should render correctly', () => {
      const { output, props } = setup();
      const button = output.props.children[6];

      expect(button.type).to.equal(Button);
      expect(button.props.clickHandler).to.equal(props.decrement);
    });

    it('should call the decrement function when clicked', () => {
      const { output, props } = setup();
      const button = output.props.children[6];

      button.props.clickHandler();

      expect(props.decrement.callCount).to.equal(1);
    });

  });

  describe('incrementIfOdd button', () => {

    it('should render correctly', () => {
      const { output, props } = setup();
      const button = output.props.children[8];

      expect(button.type).to.equal(Button);
      expect(button.props.clickHandler).to.equal(props.incrementIfOdd);
    });

    it('should call the incrementIfOdd function when clicked', () => {
      const { output, props } = setup();
      const button = output.props.children[8];

      button.props.clickHandler();

      expect(props.incrementIfOdd.callCount).to.equal(1);
    });

  });

  describe('incrementAsync button', () => {

    it('should render correctly', () => {
      const { output, props } = setup();
      const button = output.props.children[10];

      expect(button.type).to.equal(Button);
      expect(button.props.clickHandler).to.equal(props.incrementAsync);
    });

    it('should call the incrementAsync function when clicked', () => {
      const { output, props } = setup();
      const button = output.props.children[10];

      button.props.clickHandler();

      expect(props.incrementAsync.callCount).to.equal(1);
    });

  });

});

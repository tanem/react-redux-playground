import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Button from '../../../src/components/button';

describe('button component', () => {

  it('should render correctly', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    const clickHandler = () => {};
    shallowRenderer.render(<Button clickHandler={clickHandler}>+</Button>);

    const result = shallowRenderer.getRenderOutput();

    expect(result.props.onClick).toBe(clickHandler);
    expect(result.props.children).toBe('+');
  });

});

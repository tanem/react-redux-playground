import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import createHistory from 'history/lib/createMemoryHistory';
import configureRoutes from '../../src/routes';

describe('router', () => {

  const App = () => <div>app</div>;
  let node;

  beforeEach(() => node = document.createElement('div'));
  afterEach(() => unmountComponentAtNode(node));

  it('should render the index route', done => {
    render(
      configureRoutes(createHistory('/'), App),
      node,
      () => {
        expect(node.textContent).toEqual('app');
        done();
      }
    );
  });

});

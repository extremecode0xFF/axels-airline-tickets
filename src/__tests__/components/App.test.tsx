import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../redux/store';

describe('App', () => {
  test('match snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

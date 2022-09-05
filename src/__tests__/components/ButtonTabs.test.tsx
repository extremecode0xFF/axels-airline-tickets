import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ButtonTabs } from '../../components';

import { configFilterTabs } from '../../configs/params';
import store from '../../redux/store';

describe('ButtonTabs', () => {
  test('match snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <ButtonTabs config={configFilterTabs} />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

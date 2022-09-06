import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ButtonTabs } from '../../components';

import { configFilterTabs } from '../../data/configs/params';
import store from '../../redux/store';

describe('ButtonTabs', () => {
  test('it should match a snapshot', () => {
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

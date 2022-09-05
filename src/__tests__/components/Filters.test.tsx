import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Filters } from '../../components';

import { configFilterCheckbox } from '../../configs/params';
import store from '../../redux/store';

describe('Filters', () => {
  test('match snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Filters
              name="Количество пересадок"
              config={configFilterCheckbox}
            />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

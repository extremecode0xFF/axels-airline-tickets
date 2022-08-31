import React from 'react';
import { render } from '@testing-library/react';
import store from '../../redux/store';

import App from '../../App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('App make snapshot', () => {
    const app = (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    render(app);
    expect(app).toMatchSnapshot();
  });
});

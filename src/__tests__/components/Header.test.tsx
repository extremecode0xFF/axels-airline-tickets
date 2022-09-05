import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '../../components';

describe('Header', () => {
  test('match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

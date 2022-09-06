import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '../../components';

describe('Header', () => {
  test('it should match a snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonMore } from '../../components';

describe('ButtonMore', () => {
  test('it should match a snapshot', () => {
    const tree = renderer.create(<ButtonMore onClick={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

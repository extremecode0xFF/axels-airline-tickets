import React from 'react';
import renderer from 'react-test-renderer';

import { Ticket } from '../../components';

import FAKE_TICKETS from '../../data/constants/fakeTickets';

describe('Ticket', () => {
  const tickets = FAKE_TICKETS;
  test('it should match a snapshot', () => {
    const tree = renderer.create(<Ticket {...tickets[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

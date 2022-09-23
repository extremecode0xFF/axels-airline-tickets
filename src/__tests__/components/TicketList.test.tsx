import React from 'react';
import renderer from 'react-test-renderer';

import { TicketList } from '../../components';

import FAKE_TICKETS from '../../data/constants/fakeTickets';

describe('TicketList', () => {
  const tickets = FAKE_TICKETS;
  test('it should match a snapshot', () => {
    const tree = renderer
      .create(<TicketList tickets={tickets} visibleTickets={5} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

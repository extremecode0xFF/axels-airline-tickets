import FAKE_TICKETS from '../../data/constants/fakeTickets';
import { CHEAPEST, FASTEST, OPTIMAL } from '../../data/constants/queries';
import { sortTicketsByCurrentQueryParam } from '../../helpers/sortTickets';

describe('helper/filterTicketsByQueryParams', () => {
  const [ticket0, ticket1, ticket2, ticket3] = FAKE_TICKETS;
  test('sort order: price ascending', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, CHEAPEST)).toEqual([
      ticket2,
      ticket0,
      ticket1,
      ticket3,
    ]));

  test('sort order: fastest', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, FASTEST)).toEqual([
      ticket3,
      ticket2,
      ticket0,
      ticket1,
    ]));

  test('sort order: optimal', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, OPTIMAL)).toEqual([
      ticket2,
      ticket0,
      ticket1,
      ticket3,
    ]));
});

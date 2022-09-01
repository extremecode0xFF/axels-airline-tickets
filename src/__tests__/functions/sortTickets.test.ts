import FAKE_TICKETS from '../../data/constants/fakeTickets';
import { CHEAPEST, FASTEST, OPTIMAL } from '../../data/constants/queries';
import { sortTicketsByCurrentQueryParam } from '../../helpers/sortTickets';

describe('helper/filterTicketsByQueryParams', () => {
  const [t0, t1, t2, t3] = FAKE_TICKETS;
  test('sort order: price ascending', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, CHEAPEST)).toEqual([
      t2,
      t0,
      t1,
      t3,
    ]));

  test('sort order: fastest', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, FASTEST)).toEqual([
      t3,
      t2,
      t0,
      t1,
    ]));

  test('sort order: optimal', () =>
    expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, OPTIMAL)).toEqual([
      t2,
      t0,
      t1,
      t3,
    ]));
});

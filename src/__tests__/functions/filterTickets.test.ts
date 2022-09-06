import { filterTicketsByQueryParams } from '../../helpers/filterTickets';
import FAKE_TICKETS from '../../data/constants/fakeTickets';
import {
  TRANSFER_0,
  TRANSFER_1,
  TRANSFER_2,
  TRANSFER_3,
} from '../../data/constants/queries';

describe('helper/filterTicketsByQueryParams', () => {
  const [trans0, trans1, trans2, trans3] = FAKE_TICKETS;

  test('must be contains 0 stops tickets', () =>
    expect(filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_0])).toEqual([
      trans0,
    ]));

  test('must be contains 1 stops tickets', () =>
    expect(filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_1])).toEqual([
      trans1,
    ]));

  test('must be contains 2 stops tickets', () =>
    expect(filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_2])).toEqual([
      trans2,
    ]));

  test('must be contains 3 stops tickets', () =>
    expect(filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_3])).toEqual([
      trans3,
    ]));

  test('must be contains 0 and 1 stops tickets', () =>
    expect(
      filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_0, TRANSFER_1])
    ).toEqual([trans0, trans1]));

  test('must be contains 2 and 3 stops tickets', () =>
    expect(
      filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_2, TRANSFER_3])
    ).toEqual([trans2, trans3]));

  test('must be contains 1 and 3 stops tickets', () =>
    expect(
      filterTicketsByQueryParams(FAKE_TICKETS, [TRANSFER_1, TRANSFER_3])
    ).toEqual([trans1, trans3]));
});

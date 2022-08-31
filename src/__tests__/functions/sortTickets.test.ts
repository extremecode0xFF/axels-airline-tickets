import { sortTicketsByCurrentQueryParam } from '../../helpers/sortTickets'
import FAKE_TICKETS from '../../data/constants/fakeTickets'
import { CHEAPEST } from '../../data/constants/queries'
import { Ticket } from '../../types/api'

describe('helper/filterTicketsByQueryParams', () => {
    const deepClone: Ticket[] = JSON.parse(JSON.stringify(FAKE_TICKETS))
    const result = deepClone.sort((ticket, nextTicket) => ticket.price - nextTicket.price)
    test('sort order: price ascending',()=> {
        expect(sortTicketsByCurrentQueryParam(FAKE_TICKETS, CHEAPEST)).toEqual(result)
    })
})

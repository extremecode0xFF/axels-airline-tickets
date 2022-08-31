import { CHEAPEST, FASTEST, OPTIMAL } from '../data/constants/queries';
import { Ticket } from '../types/api';
import { QuerySort } from '../types/queries';

const sortTicketsByCurrentQueryParam = (
  tickets: Ticket[],
  urlQueryParam: QuerySort
) => {
  if (tickets.length < 2) return tickets;
  const deepCloneTickets: Ticket[] = JSON.parse(JSON.stringify(tickets));

  switch (urlQueryParam) {
    case CHEAPEST:
      deepCloneTickets.sort(
        (ticket, nextTicket) => ticket.price - nextTicket.price
      );
      break;
    case FASTEST:
      deepCloneTickets.sort(
        (ticket, nextTicket) =>
          ticket.segments[0].duration +
          ticket.segments[1].duration -
          (nextTicket.segments[0].duration + nextTicket.segments[1].duration)
      );
      break;
    case OPTIMAL:
      deepCloneTickets.sort(
        (ticket, nextTicket) =>
          ticket.price +
          ticket.segments[0].duration +
          ticket.segments[1].duration -
          (nextTicket.price +
            nextTicket.segments[0].duration +
            nextTicket.segments[1].duration)
      );
      break;
    default:
  }
  return deepCloneTickets;
};

export { sortTicketsByCurrentQueryParam };

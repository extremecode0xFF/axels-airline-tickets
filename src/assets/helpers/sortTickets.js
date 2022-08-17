import { getCurrentQueryParams } from './queryParams';

const sortTicketsByCurrentQueryParam = (tickets, urlQueryParams) => {
  if (tickets.length < 2) return tickets;

  const deepCloneTickets = structuredClone(tickets);
  const currentQueryParam = getCurrentQueryParams(urlQueryParams, [
    'cheapest',
    'fastest',
    'optimal',
  ]);

  if (currentQueryParam === 0) return tickets;

  switch (currentQueryParam[0]) {
    case 'cheapest':
      deepCloneTickets.sort(
        (ticket, nextTicket) => ticket.price - nextTicket.price
      );
      break;
    case 'fastest':
      deepCloneTickets.sort(
        (ticket, nextTicket) =>
          ticket.segments[0].duration +
          ticket.segments[1].duration -
          (nextTicket.segments[0].duration + nextTicket.segments[1].duration)
      );
      break;
    case 'optimal':
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

import { Ticket } from '../types/api';

const filterTicketsByStops = (stopsCount: number) => (tickets: Ticket[]) =>
  tickets.filter((ticket) => {
    let result = true;
    ticket.segments.forEach(({ stops }) => {
      if (stops.length !== stopsCount) {
        result = false;
      }
    });
    return result;
  });

const filterTicketsByQueryParams = (
  tickets: Ticket[],
  urlQueryParams: string[]
) => {
  if (tickets.length < 2) return tickets;

  return urlQueryParams.length === 0
    ? tickets
    : urlQueryParams.reduce<Ticket[]>((acc, param) => {
        if (param.startsWith('transfer')) {
          const transfers = Number(param.slice('transfer'.length));
          acc.push(...filterTicketsByStops(transfers)(tickets));
        }
        return acc;
      }, []);
};

export { filterTicketsByQueryParams };

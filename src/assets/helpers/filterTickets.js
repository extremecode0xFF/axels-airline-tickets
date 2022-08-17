import { getCurrentQueryParams } from './queryParams';

const filterTicketsByStops = (stopsCount) => (tickets) =>
  tickets.filter((ticket) => {
    let result = true;
    ticket.segments.forEach(({ stops }) => {
      if (stops.length !== stopsCount) {
        result = false;
      }
    });
    return result;
  });

const filterTicketsByQueryParams = (tickets, urlQueryParams) => {
  if (tickets.length < 2) return tickets;

  const currentQueryParams = getCurrentQueryParams(urlQueryParams, [
    'transfer0',
    'transfer1',
    'transfer2',
    'transfer3',
  ]);

  return currentQueryParams.length === 0
    ? tickets
    : currentQueryParams.reduce((acc, param) => {
        if (param.startsWith('transfer')) {
          const transfers = Number(param.slice('transfer'.length));
          acc.push(...filterTicketsByStops(transfers)(tickets));
        }
        return acc;
      }, []);
};

export { filterTicketsByQueryParams };

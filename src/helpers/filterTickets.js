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

  return urlQueryParams.length === 0
    ? tickets
    : urlQueryParams.reduce((acc, param) => {
        if (param.startsWith('transfer')) {
          const transfers = Number(param.slice('transfer'.length));
          acc.push(...filterTicketsByStops(transfers)(tickets));
        }
        return acc;
      }, []);
};

export { filterTicketsByQueryParams };

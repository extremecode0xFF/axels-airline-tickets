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

export { filterTicketsByStops };

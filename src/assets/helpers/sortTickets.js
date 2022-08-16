const sortTicketsByPrice = (tickets) => tickets.sort((ticket,nextTicket)=>ticket.price < nextTicket.price)

export { sortTicketsByPrice }
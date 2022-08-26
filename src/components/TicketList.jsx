import React from 'react';

import { Container } from 'react-bootstrap';
import Ticket from './Ticket';

const TicketList = ({ tickets, visibleTickets }) => (
  <Container>
    {tickets.slice(0, visibleTickets).map((value, index) => (
      <Ticket key={index} {...value} />
    ))}
  </Container>
);

export default TicketList;

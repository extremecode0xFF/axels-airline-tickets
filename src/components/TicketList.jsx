import React from 'react';

import { Container } from 'react-bootstrap';
import Ticket from './Ticket';

const TicketList = ({ tickets }) => (
  <Container>
    {tickets.map((value, index) => (
      <Ticket key={index} {...value} />
    ))}
  </Container>
);

export default TicketList;

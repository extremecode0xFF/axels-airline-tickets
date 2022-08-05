import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { createFakeTickets } from '../assets/helpers/fakeTickets';
import Ticket from './Ticket';

export default function TicketList() {
  const [tickets] = useState(createFakeTickets(5));
  return (
    <Container>
      {tickets.map((value, index) => (
        <Ticket key={index} {...value} />
      ))}
    </Container>
  );
}

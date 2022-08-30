import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Ticket } from '../components/index';

import { Ticket as TypeTicket } from '../types/api';

type PropTypes = {
  tickets: TypeTicket[];
  visibleTickets: number;
};

const TicketList: FC<PropTypes> = ({ tickets, visibleTickets }) => (
  <Container>
    {tickets.slice(0, visibleTickets).map((value, index) => (
      <Ticket key={index} {...value} />
    ))}
  </Container>
);

export default TicketList;

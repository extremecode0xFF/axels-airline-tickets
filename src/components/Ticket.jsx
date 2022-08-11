import React from 'react';

import { Image, Container } from 'react-bootstrap';
import { ContainerTicket } from '../styled/Ticket';

import {
  parseToHourMinutes,
  addMinutesToDate,
  timeConvert,
} from '../assets/helpers/parseDate';
import { getPostfix } from '../assets/helpers/stringEdit';
import airlineLogo from '../assets/images/airlines_logo.png';

const Ticket = ({ price, carrier, segments }) => (
  <ContainerTicket gap={3} className="mb-3 p-4 bg-white rounded">
    <Container className="d-flex justify-content-between align-items-center">
      <span className="price">{`${price.toLocaleString()} P`}</span>
      <Image src={airlineLogo} alt="airline_log"></Image>
    </Container>

    {segments.map(({ origin, destination, date, stops, duration }, index) => (
      <Container key={index} className="d-flex justify-content-between">
        <Container className="d-flex flex-column p-0">
          <span className="title">{`${origin}-${destination}`}</span>
          <span className="info">{`${parseToHourMinutes(
            date
          )} - ${parseToHourMinutes(addMinutesToDate(date, duration))}`}</span>
        </Container>
        <Container className="d-flex flex-column p-0">
          <span className="title text-uppercase">В пути</span>
          <span className="info">{timeConvert(duration)}</span>
        </Container>
        <Container className="d-flex flex-column p-0">
          <span className="title text-uppercase">{`${stops.length} ${getPostfix(
            stops.length
          )}`}</span>
          <span className="info">{stops.join(',')}</span>
        </Container>
      </Container>
    ))}
  </ContainerTicket>
);

export default Ticket;

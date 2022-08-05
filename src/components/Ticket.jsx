import React from 'react';
import { Image, Container, Stack } from 'react-bootstrap';
import styled from 'styled-components';
import {
  parseToHourMinutes,
  addMinutesToDate,
  timeConvert,
} from '../assets/helpers/parseDate';
import { getPostfix } from '../assets/helpers/stringEdit';
import airlineLogo from '../assets/images/airlines_logo.png';

const ContainerHeader = styled(Container)`
  .price {
    color: #2196f3;
    font-size: 24px;
  }
`;

const ContainerBody = styled(Container)`
  .body-title {
    font-size: 12px;
    color: #a0b0b9;
    line-height: 18px;
    margin-bottom: 3px;
  }
  .body-info {
    font-size: 14px;
    line-height: 14px;
  }
`;

export default function Ticket({ price, carrier, segments }) {
  return (
    <Stack gap={3} className="mb-3 p-4 bg-white rounded">
      <ContainerHeader className="d-flex justify-content-between align-items-center">
        <span className="price">{`${price} P`}</span>
        <Image src={airlineLogo} alt="airline_log"></Image>
      </ContainerHeader>

      {segments.map(({ origin, destination, date, stops, duration }, index) => (
        <ContainerBody key={index} className="d-flex justify-content-between">
          <Container className="d-flex flex-column p-0">
            <span className="body-title">{`${origin}-${destination}`}</span>
            <span className="body-info">{`${parseToHourMinutes(
              date
            )} - ${parseToHourMinutes(
              addMinutesToDate(date, duration)
            )}`}</span>
          </Container>
          <Container className="d-flex flex-column p-0">
            <span className="body-title text-uppercase">В пути</span>
            <span className="body-info">{timeConvert(duration)}</span>
          </Container>
          <Container className="d-flex flex-column p-0">
            <span className="body-title text-uppercase">{`${
              stops.length
            } ${getPostfix(stops.length)}`}</span>
            <span className="body-info">{stops.join(',')}</span>
          </Container>
        </ContainerBody>
      ))}
    </Stack>
  );
}

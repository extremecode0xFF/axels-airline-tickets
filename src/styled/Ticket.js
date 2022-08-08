import styled from 'styled-components';
import { Stack } from 'react-bootstrap';

const ContainerTicket = styled(Stack)`
  .price {
    color: var(--ticket-price-color);
    font-size: var(--ticket-price-size);
  }
  .title {
    font-size: 12px;
    color: var(--ticket-title-color);
    margin-bottom: 3px;
  }
  .info {
    font-size: 14px;
    line-height: 14px;
  }
`;

export { ContainerTicket };

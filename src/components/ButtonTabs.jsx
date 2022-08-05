import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled(Container)`
  .btn {
    transition: all 0.2s ease-out;
    border-color: #dad9d9;
    background-color: white;
    font-size: 12px;
    padding: 20px 0;
    :hover,
    :active,
    :focus {
      background-color: #2196f3;
      color: white;
      border: 1px solid black;
    }
    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export default function ButtonTabs() {
  return (
    <Style className="mb-3">
      <ButtonToolbar>
        <ButtonGroup className="w-100" size="dm">
          <Button className="text-uppercase" variant="light">
            самый дешевый
          </Button>
          <Button className="text-uppercase" variant="light">
            самый быстрый
          </Button>
          <Button className="text-uppercase" variant="light">
            оптимальный
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Style>
  );
}

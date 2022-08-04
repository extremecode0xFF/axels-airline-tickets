import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled(Container)`
  .btn {
    transition: all 0.2s ease-out;
    border-color: #dad9d9;
    line-height: 45px;
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
    <Style>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="w-100" size="lg">
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

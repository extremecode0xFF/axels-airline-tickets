import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled(Container)`
  .btn {
    transition: all 0.2s ease-out;
    line-height: 50px;
    background-color: #2196f3;
    :focus {
      outline: none;
      box-shadow: none;
    }
    :hover {
      background-color: #0186f3;
      border: 1px solid black;
    }
  }
`;

export default function ButtonMore() {
  return (
    <Styles>
      <Button className="w-100" size="lg">
        Показать еще пять билетов!
      </Button>
    </Styles>
  );
}

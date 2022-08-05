import React from 'react';
import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  background: #fff;
  border-radius: 5px;
  color: #4a4a4a;
  font-size: 12px;

  .content,
  .form-check,
  input,
  label {
    cursor: pointer;
  }

  .form-check label {
    width: 100%;
  }

  .form-check-input {
    border-radius: 2px;
  }

  .content {
    transition: all 0.2s ease-in-out;
    font-weight: 400;
    font-size: 13px;
    :hover {
      background: #2196f31f;
    }
  }
`;

export default function Filters({ name, checkBoxList }) {
  return (
    <Styles className="mb-3 shadow-sm">
      <Form>
        <p className="text-uppercase mx-3 my-0 pt-4 pb-2">{name}</p>
        {checkBoxList.map((type, i) => {
          return (
            <Container key={i} className="content p-0 py-2">
              <Form.Check
                className="mx-3 user-select-none"
                type="checkbox"
                id={type}
                label={type}
              />
            </Container>
          );
        })}
      </Form>
    </Styles>
  );
}

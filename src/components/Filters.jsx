import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { ContainerFilters } from '../styled/Filters';

export default function Filters({ name, checkBoxList }) {
  return (
    <ContainerFilters className="mb-3 shadow-sm">
      <Form>
        <p className="text-uppercase mx-3 my-0 pt-4 pb-2">{name}</p>
        {checkBoxList.map((type, i) => {
          return (
            <Container key={i} className="content p-0 py-2">
              <Form.Check
                className="d-flex justify-content-between align-items-center mx-3 user-select-none"
                type="checkbox"
                id={type}
                label={type}
              />
            </Container>
          );
        })}
      </Form>
    </ContainerFilters>
  );
}

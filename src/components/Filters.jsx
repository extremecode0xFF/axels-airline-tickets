import React from 'react';

import { Container, Form } from 'react-bootstrap';
import { ContainerFilters } from '../styled/Filters';

import { useSearchParams } from 'react-router-dom';

const Filters = ({ name, config }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    const [key, value] = event.target.value.split(',');

    if (searchParams.has(key)) {
      searchParams.delete(key);
    } else {
      searchParams.append(key, value);
    }

    setSearchParams(searchParams);
  };

  return (
    <ContainerFilters className="mb-3 shadow-sm">
      <Form>
        <p className="text-uppercase mx-3 my-0 pt-4 pb-2">{name}</p>
        {config.map((param, i) => {
          return (
            <Container key={i} className="content p-0 py-2">
              <Form.Check
                className="d-flex justify-content-between align-items-center mx-3 user-select-none"
                type="checkbox"
                id={Object.keys(param.query)}
                label={param.title}
                value={Object.entries(param.query).join()}
                onChange={handleChange}
                checked={searchParams.has(Object.keys(param.query))}
              />
            </Container>
          );
        })}
      </Form>
    </ContainerFilters>
  );
};

export default Filters;

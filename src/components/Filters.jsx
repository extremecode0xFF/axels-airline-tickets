import React from 'react';

import { Container, Form } from 'react-bootstrap';
import { ContainerFilters } from '../styled/Filters';

import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';

const Filters = ({ name, config }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initCheckedByURL = () =>
    config.reduce((acc, val) => {
      const key = val.query;
      if (searchParams.has(key)) {
        acc.push(key);
      }
      return acc;
    }, []);

  const formik = useFormik({
    initialValues: {
      checkAll: false,
      checked: initCheckedByURL(),
    },
  });

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      searchParams.append(value, '');
    } else {
      searchParams.delete(value);
    }
    setSearchParams(searchParams);
  };

  return (
    <ContainerFilters className="mb-3 shadow-sm">
      <p className="text-uppercase mx-3 my-0 pt-4 pb-2">{name}</p>
      {config.map(({ title, query }, i) => {
        return (
          <Container key={i} className="content p-0 py-2">
            <Form.Check
              className="d-flex justify-content-between align-items-center mx-3 user-select-none"
              name="checked"
              id={query}
              label={title}
              value={query}
              onChange={(e) => {
                formik.handleChange(e);
                handleChange(e);
              }}
              checked={formik.values.checked.includes(query)}
            />
          </Container>
        );
      })}
      {/*<pre>{JSON.stringify(formik.values, null, 2)}</pre>*/}
    </ContainerFilters>
  );
};

export default Filters;

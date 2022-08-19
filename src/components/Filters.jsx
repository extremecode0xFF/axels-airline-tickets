import React, { useMemo, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { Container, Form } from 'react-bootstrap';
import { ContainerFilters } from '../styled/Filters';

const Filters = memo(({ name, config }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initParams = useMemo(
    () =>
      config.reduce((acc, { query }) => {
        if (searchParams.has(query)) {
          acc[query] = true;
        } else {
          acc[query] = false;
        }
        return acc;
      }, {}),
    []
  );

  const formik = useFormik({
    initialValues: {
      checkAll: false,
      checked: initParams,
    },
  });

  const handleChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      searchParams.set(id, '');
    } else {
      searchParams.delete(id);
    }
    setSearchParams(searchParams);
  };

  const handleChangeAll = (event) => {
    const { checked } = event.target;
    const resultField = {};
    for (const param in formik.values.checked) {
      if (checked) {
        searchParams.set(param, '');
        resultField[param] = true;
      } else {
        searchParams.delete(param, '');
        resultField[param] = false;
      }
    }
    formik.setFieldValue(`checked`, resultField);
    setSearchParams(searchParams);
  };

  return (
    <ContainerFilters className="mb-3 shadow-sm">
      <p className="text-uppercase mx-3 my-0 pt-4 pb-2">{name}</p>
      <Container className="content p-0 py-2">
        <Form.Check
          className="d-flex justify-content-between align-items-center mx-3 user-select-none"
          label="Все"
          id="checkAll"
          onChange={(e) => {
            formik.handleChange(e);
            handleChangeAll(e);
          }}
          checked={formik.values.checkAll}
        />
      </Container>
      {config.map(({ title, query }) => {
        return (
          <Container key={query} className="content p-0 py-2">
            <Form.Check
              className="d-flex justify-content-between align-items-center mx-3 user-select-none"
              name={`checked[${query}]`}
              id={query}
              label={title}
              value={formik.values.checked[query]}
              onChange={(e) => {
                formik.handleChange(e);
                handleChange(e);
              }}
              checked={formik.values.checked[query]}
            />
          </Container>
        );
      })}
    </ContainerFilters>
  );
});

export default Filters;

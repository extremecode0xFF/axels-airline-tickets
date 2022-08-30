import React, { useEffect, useMemo, memo, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { Container, Form } from 'react-bootstrap';
import { ContainerFilters } from '../styled/Filters';

import { setFilteredTickets } from '../redux/ducks/tickets';
import { ConfigParams } from '../types/config';

interface PropTypes {
  name: string;
  config: ConfigParams[];
}

const Filters = memo<PropTypes>(({ name, config }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const initParams = useMemo(
    () =>
      config.reduce<Record<string, boolean>>((acc, { query }) => {
        if (searchParams.has(query)) {
          acc[query] = true;
        } else {
          acc[query] = false;
        }
        return acc;
      }, {}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const formik = useFormik({
    initialValues: {
      checkAll: false,
      checked: initParams,
    },
    onSubmit() {},
  });

  useEffect(() => {
    const params = Object.keys(formik.values.checked).reduce<string[]>(
      (acc, param) => {
        let isChecked = formik.values.checked[param];
        if (isChecked) {
          acc.push(param);
        }
        return acc;
      },
      []
    );
    dispatch(setFilteredTickets(params));
  }, [dispatch, formik.values.checked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.currentTarget;
    if (checked) {
      searchParams.set(id, '');
    } else {
      searchParams.delete(id);
    }
    setSearchParams(searchParams);
  };

  const handleChangeAll = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    const newCheckedField: Record<string, boolean> = {};
    for (const param in formik.values.checked) {
      if (checked) {
        searchParams.set(param, '');
        newCheckedField[param] = true;
      } else {
        searchParams.delete(param);
        newCheckedField[param] = false;
      }
    }
    formik.setFieldValue(`checked`, newCheckedField);
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
          onChange={(event) => {
            formik.handleChange(event);
            handleChangeAll(event);
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
              onChange={(event) => {
                formik.handleChange(event);
                handleChange(event);
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

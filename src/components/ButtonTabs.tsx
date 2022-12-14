import React, { useMemo, memo, useEffect, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { Button, ButtonGroup } from 'react-bootstrap';
import { ContainerButtonTabs } from '../styled/ButtonTabs';

import { setSortTickets } from '../redux/ducks/tickets';
import { ConfigParams } from '../types/config';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { QuerySort } from '../types/queries';

interface PropTypes {
  config: ConfigParams<QuerySort>[];
}

const ButtonTabs = memo<PropTypes>(({ config }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tickets = useTypedSelector((state) => state.tickets);
  const dispatch = useDispatch();

  const initTabsByURL = useMemo(
    () =>
      config.reduce((acc, { query }) => {
        if (searchParams.has(query)) {
          acc = query;
        }
        return acc;
      }, ''),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const formik = useFormik({
    initialValues: { radio: initTabsByURL },
    onSubmit() {},
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const key = event.currentTarget.value;
    if (searchParams.has(key)) return;
    config.forEach((val) => {
      const param = val.query;
      if (searchParams.has(param)) {
        searchParams.delete(param);
      }
    });
    searchParams.append(key, '');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (formik.values.radio && tickets.length) {
      dispatch(setSortTickets(formik.values.radio));
    }
  }, [dispatch, formik.values.radio, tickets.length]);

  return (
    <ContainerButtonTabs className="mb-3">
      <ButtonGroup className="w-100" size="lg">
        {config.map(({ title, query }, index) => (
          <Button
            className="text-uppercase"
            variant="light"
            key={index}
            id={query}
            name="radio"
            value={query}
            onClick={(event) => {
              formik.handleChange(event);
              handleClick(event);
            }}
            disabled={query === formik.values.radio}
          >
            {title}
          </Button>
        ))}
      </ButtonGroup>
    </ContainerButtonTabs>
  );
});

export default ButtonTabs;

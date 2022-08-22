import React, { useMemo, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { Button, ButtonGroup } from 'react-bootstrap';
import { ContainerButtonTabs } from '../styled/ButtonTabs';

const ButtonTabs = memo(({ config }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initTabsByURL = useMemo(
    () =>
      config.reduce((acc, { query }) => {
        if (searchParams.has(query)) {
          acc = query;
        }
        return acc;
      }, ''),
    []
  );

  const formik = useFormik({ initialValues: { radio: initTabsByURL } });

  const handleClick = (event) => {
    const key = event.target.value;
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

  return (
    <ContainerButtonTabs className="mb-3">
      <ButtonGroup className="w-100" size="dm">
        {config.map(({ title, query }, index) => (
          <Button
            className="text-uppercase"
            variant="light"
            key={index}
            id={query}
            name="radio"
            value={query}
            onClick={(e) => {
              formik.handleChange(e);
              handleClick(e);
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

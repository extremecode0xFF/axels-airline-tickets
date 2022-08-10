import React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';
import { ContainerButtonTabs } from '../styled/ButtonTabs';

import { useSearchParams } from 'react-router-dom';

const ButtonTabs = ({ config }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (event) => {
    if (!event.target.value) return;
    const [key, value] = event.target.value.split(',');
    if (searchParams.has(key)) return;

    config.forEach((val) => {
      const [param] = Object.keys(val.query);
      if (searchParams.has(param)) {
        searchParams.delete(param);
      }
    });

    searchParams.append(key, value);

    setSearchParams({
      ...Object.fromEntries([...searchParams]),
    });
  };

  return (
    <ContainerButtonTabs className="mb-3">
      <ButtonGroup className="w-100" size="dm" onClick={handleClick}>
        {config.map((filter, index) => (
          <Button
            className="text-uppercase"
            variant="light"
            key={index}
            id={filter.title}
            value={Object.entries(filter.query).join()}
            disabled={searchParams.has(Object.keys(filter.query))}
          >
            {filter.title}
          </Button>
        ))}
      </ButtonGroup>
    </ContainerButtonTabs>
  );
};

export default ButtonTabs;

import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { ContainerButtonTabs } from '../styled/ButtonTabs';

export default function ButtonTabs() {
  return (
    <ContainerButtonTabs className="mb-3">
      <ButtonToolbar>
        <ButtonGroup className="w-100" size="dm">
          <Button className="text-uppercase" variant="light">
            самый дешевый
          </Button>
          <Button className="text-uppercase" variant="light">
            самый быстрый
          </Button>
          <Button className="text-uppercase" variant="light">
            оптимальный
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </ContainerButtonTabs>
  );
}

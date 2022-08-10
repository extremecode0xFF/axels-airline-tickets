import React from 'react';

import { Button } from 'react-bootstrap';
import { ContainerButtonMore } from '../styled/ButtonMore';

const ButtonMore = () => (
  <ContainerButtonMore>
    <Button className="w-100" size="lg">
      Показать еще 5 билетов!
    </Button>
  </ContainerButtonMore>
);

export default ButtonMore;

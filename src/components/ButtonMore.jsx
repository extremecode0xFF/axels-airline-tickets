import React from 'react';

import { Button } from 'react-bootstrap';
import { ContainerButtonMore } from '../styled/ButtonMore';

const ButtonMore = ({ setShowMore }) => (
  <ContainerButtonMore>
    <Button
      className="w-100 mb-3"
      size="lg"
      onClick={() => setShowMore((prev) => (prev += 5))}
    >
      Показать еще 5 билетов!
    </Button>
  </ContainerButtonMore>
);

export default ButtonMore;

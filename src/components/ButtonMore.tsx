import React, { FC } from 'react';

import { Button } from 'react-bootstrap';
import { ContainerButtonMore } from '../styled/ButtonMore';

type PropTypes = {
  onClick: () => void;
};

const ButtonMore: FC<PropTypes> = ({ onClick }) => (
  <ContainerButtonMore>
    <Button className="w-100 mb-3" size="lg" onClick={onClick}>
      Показать еще 5 билетов!
    </Button>
  </ContainerButtonMore>
);

export default ButtonMore;

import React, { FC } from 'react';

import { Button } from 'react-bootstrap';
import { ContainerButtonMore } from '../styled/ButtonMore';

type PropTypes = {
  setShowMore: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonMore: FC<PropTypes> = ({ setShowMore }) => (
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

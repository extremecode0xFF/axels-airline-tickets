import styled from 'styled-components';

import { Container } from 'react-bootstrap';

const ContainerButtonTabs = styled(Container)`
  .btn {
    transition: var(--transition);
    border-color: var(--btn-border-color);
    background-color: var(--btn-color);
    font-size: var(--text-size);
    padding: 20px 0;
    :hover,
    :active,
    :focus {
      background-color: var(--btn-color-alt);
      color: white;
      border: var(--btn-border);
    }
    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export { ContainerButtonTabs };

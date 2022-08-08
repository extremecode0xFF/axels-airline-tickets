import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const ContainerButtonMore = styled(Container)`
  .btn {
    transition: var(--transition);
    line-height: 50px;
    background-color: var(--btn-color-alt);
    :focus {
      outline: none;
      box-shadow: none;
    }
    :hover {
      background-color: var(--btn-color-focus);
      border: var(--btn-border);
    }
  }
`;

export { ContainerButtonMore };

import styled from 'styled-components';

const ContainerFilters = styled.div`
  background: var(--background-color);
  border-radius: 5px;
  color: var(--filter-color);

  .content,
  .form-check,
  input,
  label {
    cursor: pointer;
  }

  .form-check label {
    width: 100%;
    align-self: end;
  }

  .form-check-input {
    border-radius: 2px;
  }

  .content {
    transition: var(--transition);
    font-weight: 400;
    font-size: 13px;
    :hover {
      background: var(--filter-color-hover);
    }
  }
`;

export { ContainerFilters };

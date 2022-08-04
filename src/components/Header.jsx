import React from 'react';
import logo from '../assets/images/Logo.svg';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.header`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export default function Header() {
  return (
    <Styles>
      <Image src={logo} alt="logo" />
    </Styles>
  );
}

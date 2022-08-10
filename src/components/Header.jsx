import React from 'react';

import { Image, Container } from 'react-bootstrap';

import logo from '../assets/images/logo.svg';

const Header = () => (
  <Container className="d-flex justify-content-center py-5">
    <Image src={logo} alt="logo" />
  </Container>
);

export default Header;

import React from 'react';

import { Image, Container } from 'react-bootstrap';

const Header: React.FC = () => (
  <Container className="d-flex justify-content-center py-5">
    <Image src="images/header_logo.svg" alt="logo" />
  </Container>
);

export default Header;

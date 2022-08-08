import React from 'react';
import logo from '../assets/images/logo.svg';
import { Image, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Container className="d-flex justify-content-center py-5">
      <Image src={logo} alt="logo" />
    </Container>
  );
}

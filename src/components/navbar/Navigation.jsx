import React from 'react';
import logo from './../../assets/img/logo.png';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

const Navigation = () => {
  return (
    <Navbar bg='light' variant='light' expand='lg'>
      <Navbar.Brand href='/'>
        <Image src={logo} roundedCircle />
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/artists'>Artists</Nav.Link>
        <Nav.Link href='/albums'>Albums</Nav.Link>
        <Nav.Link href='/tracks'>Tracks</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
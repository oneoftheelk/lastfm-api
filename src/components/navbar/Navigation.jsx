import React from 'react';
import logo from './../../assets/img/logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <Image src={logo} roundedCircle />
      </Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link href='/artists'><h4>Artists</h4></Nav.Link>
        <Nav.Link href='/albums'><h4>Albums</h4></Nav.Link>
        <Nav.Link href='/tracks'><h4>Tracks</h4></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
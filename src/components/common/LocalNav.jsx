import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const LocalNav = (props) => {
  return (
      <Navbar bg='light' variant='light'>
        <Nav className='ml-auto'>
          <Nav.Link href='/artists/charts'><h5>Artists charts</h5></Nav.Link>
          <Nav.Link href='/artists/find'><h5>Find artist</h5></Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default LocalNav;
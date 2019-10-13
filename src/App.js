import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navigation';
import Artists from './components/artists/Artists';

import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
      
        <Switch>
          <Route path='/artists' component={Artists} />
        </Switch>
      </Container>
    </>
  );
}

export default App;

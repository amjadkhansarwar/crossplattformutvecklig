import React from 'react';
import './App.css';
import {Nav, Navbar,Container} from 'react-bootstrap'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contect from './components/Contect'

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to="/" >home</Link></Nav.Link>
      <Nav.Link> <Link to="/about" >about</Link></Nav.Link>
      <Nav.Link> <Link to="/contect" >contect</Link></Nav.Link>
    </Nav>
    <Route component={About} path="/"></Route>
    <Route component={Contect} path="/"></Route>
    <Route component={Home} path="/"></Route>
    </Container>
  </Navbar>
  </Router>
    </div>
  );
}

export default App;

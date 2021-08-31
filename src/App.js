import logo from './logo.svg';

import { Route, Link, HashRouter as Router } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Resume from './Resume'
import Work from './Work'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">Anthony Luo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/work">Professional Experience</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;

const Projects = ({ match }) => (
  <header className="light-header">
    <h1>Projects page under development! Come back soon</h1>
  </header>
)


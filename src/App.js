import logo from './logo.svg';

import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import About from './About'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Router>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Anthony Luo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="work">Professional Experience</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="projects/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="projects/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="projects/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="projects">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="About">About</Nav.Link>
                <Nav.Link href="Resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Project} />
      </div>
    </Router>
  );
}

export default App;

const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload. <br></br>
      Website in progress :D
    </p>
    <a
      className="App-link"
      href="https://github.com/antholuo"
      target="_blank"
      rel="noopener noreferrer"
    >
      Go to my github
    </a>
  </header>
);
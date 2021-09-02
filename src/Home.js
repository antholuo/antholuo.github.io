import React from 'react'

import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


import { Route, Link, HashRouter as Router } from 'react-router-dom'

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
/>



class Home extends React.Component {
    render() {
        return (
            <>
                <div className="home-splash">
                    <Container className="home-splash-header">
                        <Row>
                            <header>
                                Hi! My name is Anthony Luo.
                            </header>
                        </Row>
                        <Row style={{ padding: 40 }}>
                            <header>
                                I'm an undergraduate Computer Engineering student at the University of Waterloo. <br></br>
                            </header>
                        </Row>
                        <Row>
                            <div class="chevron-container">
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                                <div class="chevron"></div>
                                <span class="chevron-text">Scroll down</span>
                            </div>
                        </Row>
                    </Container>

                </div>
                <div>
                    <header className="light-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p style={{fontSize: 35}}>
                            This site is currently in progress :D. Expect updates regularly! Currenty functioning:
                        </p>
                        <Container>
                            <Row>
                                <Col>
                                <Button as={Link} to="/projects" variant="link" style={{fontSize: 25}}>Projects</Button>|
                                <Button as={Link} to="/work" variant="link" style={{fontSize: 25}}>Work Experience</Button>|
                                <Button as={Link} to="/about" variant="link" style={{fontSize: 25}}>About</Button>|
                                <Button as={Link} to="/resume" variant="link" style={{fontSize: 25}}>Resume</Button>|
                                <Button as={Link} to="https://github.com/antholuo" variant="link" style={{fontSize: 25}}>GitHub</Button>|
                                <Button as={Link} to="https://www.linkedin.com/in/antholuo" variant="link" style={{fontSize: 25}}>LinkedIn</Button>
                                </Col>
                            </Row>
                        </Container>
                    </header>
                </div>
                <section>
                    <div className="projects-hexagon-gallery">
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                        <div className="projects-hex"></div>
                    </div>
                </section>
            </>
        )
    }
}
export default Home
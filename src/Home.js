import React from 'react'

import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                        <p>
                            Hi There! My name's Anthony Luo. <br></br> I'm an undergraduate Computer Engineering student at the University of Waterloo.
                        </p>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            This site is currently in progress :D. Expect updates regularly!
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
                </div>
            </>
        )
    }
}
export default Home
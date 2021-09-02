import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';

import { Route, Link, useHistory, HashRouter as Router } from 'react-router-dom'

import img from './media/pfp.jpg'

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about-title">
          <Container>
            <Row>
              <p className="header">Fancy seeing you here, eh?</p>
            </Row>
            <Row style={{ padding: 50 }}>
              <Col xs={12} md={3}>
                <Image src={img} roundedCircle fluid className="pfp-image" />
              </Col>
              <Col xs={12} md={9}>
                <p className="info-header">I'm a Computer Engineering undergraduate student at the <a
                  href="https://uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of Waterloo
                </a>, but you already knew that, didn't you? <br></br>
                  I work with embedded systems and firmware, as well as with FPGA's and ASIC's. I also happen to love table tennis and camping!</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text">Below are some of my most commonly used languages and tools :D</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Altium & Kicad</p>
              </Col>
              <Col>
                <p>Questa Formal</p>
              </Col>
              <Col>
                <p>System Verilog & VHDL</p>
              </Col>
              <Col>
                <p>C & C++</p>
              </Col>
              <Col>
                <p>Python & Java</p>
              </Col>
              <Col>
                <p>Git/VCS & Jenkins</p>
              </Col>
              <Col>
                <p>Tensorflow & SciKit</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <section className="about-hexagon-gallery">
            <a href="/" className="about-hex">
              <p>Home</p>
            </a>"
            <a href="/#/work" className="about-hex">
              <p>Work Experience</p>
            </a>
            <a href="/#/projects" className="about-hex">
              <p>Projects</p>
            </a>
            <a href="/#/resume" className="about-hex">
              <p>Resume</p>
            </a>
            <a href="https://github.com/antholuo" className="about-hex" target="_blank"
                            rel="noopener noreferrer">
              <p>Github</p>
            </a>


          </section>
        </div>
      </>
    )
  }
}
export default About
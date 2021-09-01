import React from 'react'
import './About.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

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
                <p className="info-header">I'm a Computer Engineering undergraduate student at the University of Waterloo, but you already knew that, didn't you? <br></br>
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
        <div className="education">
          EDUCAYSHEN
        </div>
        <Container style={{padding: 80}}>
          <div class="hexaline">
            <div class="hexa empty"></div>
            <div class="hexa">
              <span class="hexa_text">Toutes nos Créations</span>
            </div>
          </div>
          <div class="hexaline">
            <div class="hexa">
              <span class="hexa_text">Aller sur le Forum</span>
            </div>
            <div class="hexa empty"></div>
            <div class="hexa">
              <span class="hexa_text">Notre Philosophie</span>
            </div>
          </div>
          <div class="hexaline">
            <div class="hexa">
              <span class="hexa_text">Inscription<br />Connexion</span>
            </div>
            <div class="hexa">
              <span class="hexa_text">Equipe d'HexaDev</span>
            </div>
          </div>
          <div class="hexaline">
            <div class="hexa empty"></div>
            <div class="hexa empty"></div>
            <div class="hexa"></div>
          </div>
          <div class="hexaline">
            <div class="hexa">
              <span class="hexa_text">Amis et Partenaires</span>
            </div>
            <div class="hexa empty"></div>
            <div class="hexa empty"></div>
            <div class="hexa">
              <span class="hexa_text">Nous<br />Soutenir</span>
            </div>
          </div>
        </Container>

      </>
    )
  }
}
export default About
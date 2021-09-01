import React from 'react'

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
            <p className="header">Hi! My name's anthony. Nice to meet you.</p>
            <Row>
              <Col xs={12} md={4}>
                <Image src={img} roundedCircle fluid/>
              </Col>
              <Col xs={12} md={8}>
                <p className="header">THIS IS SOME MORE STUFF ABOUT ME I'lL JUST KEEP TYPING UNTIL IT WORKS OUT YUP</p>
              </Col>
            </Row>
          </Container>

        </div>
      </>
    )
  }
}
export default About
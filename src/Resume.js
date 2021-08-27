import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import resume from './media/resume.png';
import resume_pdf from './media/resume.pdf';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
/>

class About extends React.Component {
    render() {
        return (
            <Container fluid="md">
                <Col>
                    <Row><br></br></Row>
                    <Row>
                        <img src={resume}/>
                    </Row>
                </Col>
                <Button href={resume_pdf} download="resume_Anthony_Luo.pdf" variant="outline-secondary">Download</Button>
                <Row><br></br></Row>
                <Row><br></br></Row>
            </Container>
        )
    }
}
export default About
import React from 'react'

import './Work.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
/>

class Work extends React.Component {
    render() {
        return (
            <Container className="Container">
                <Row></Row>
                <Row className="justify-content-sm-center">
                    <Col>
                        <p className="work-header">Company One</p>
                        <p className="work-info-l">
                            Year, Month - Year, Month
                        </p>
                    </Col>
                    <Col>
                    <p className="work-header">Position One</p>
                    Info one
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col>ESNTUIDAENSIDOE HTSDI TOEUHSDI  TSOEDITSHOEDITSAODITHSOED TSF>PT HIDOETI DOEHTSID  TSOHDITSOE DI TSOEHDI  TSHODI TS OPEDITSOD I TNS </Col>
                </Row>
            </Container>
        )
    }
}
export default Work
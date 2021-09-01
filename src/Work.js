import React from 'react'

import './Work.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

{/* <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
/>  */}

<link rel = "stylesheet" href = "Work.css"/>

class Work extends React.Component {
    /*render() {
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
    }*/

    render() {
        return (
            <container>
                <div class="title">
                    <p class="header" >Work Experience</p>
                    <hr class="title-line"></hr>

                    <p class="text">Welcome! Feel free to take a look around. For projects and tabs, please use the navbar at the top of this page.</p>

                </div>

                <div class="box">

                    <div class="work">
                        <p class="header">Ciena Canada</p>
                        <hr class="body-line"></hr>

                        <p> September 2021 - December 2021 </p>
                    </div>
                    <div class="description">
                        <p class="header"> Co-op: ASIC/FPGA Development </p>
                        <p>
                            I am currently working on the design and development of Ciena's next-generation Optical ASIC!
                        </p>
                        <a href="https://www.ciena.ca/">Ciena Canada |  https://www.ciena.ca/</a>
                    </div>
                </div>
                <div class="box">
                    <div class="work">
                        <p class="header">Ciena Canada</p>
                        <hr class="body-line"></hr>

                        <p> January 2021 - April 2021 </p>
                    </div>
                    <div class="description">
                        <p class="header"> Co-op: Digital ASIC/FPGA Verification </p>
                        <p>
                            During my first four month co-op term with Ciena, I worked with the optical ASIC development and verification teams to provide design and verification tools. Some highlights include: <br></br>
                            <ul>
                                <li>Writing development tools in System Verilog</li>
                                <li>Creating wrappers, design checks, and automation scripts in Python</li>
                                <li>Integrating design checks into Jenkins builds using Bash and Makefiles</li>
                                <li>Worked within a Fedora Linux environment_</li>
                            </ul>
                        </p>
                        <a href="https://www.ciena.ca/">Ciena Canada |  https://www.ciena.ca/</a>
                    </div>
                </div>
                <div class="box">
                    <div class="work">
                        <p class="header">The Secret Lab</p>
                        <hr class="body-line"></hr>

                        <p> May 2016 - current </p>
                    </div>
                    <div class="description">
                        <p class="header">Fulltime - Senior Web Developer</p>
                        <p>As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more. Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.</p>
                        <a href="url">Eindhoven |  http://startselect.com</a>
                    </div>
                </div>
            </container>
        )
    }
}
export default Work
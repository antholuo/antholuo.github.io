import React from 'react'

import './Projects.css';

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


class Projects extends React.Component {
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
                        /*<section>
                <div class="project-hexaline"> 

                    <div class="project-hexa">
                        <span class="project-hexa_text">Toutes nos Créations</span>
                    </div>
                    <div class="project-hexa">
                        <span class="project-hexa_text">Toutes nos Créations</span>
                    </div>
                </div>


                <div class="project-hexaline">
                <div class="project-hexa">
                        <span class="project-hexa_text">Aller sur le Forum</span>
                    </div>
                    <div class="project-hexa">
                        <span class="project-hexa_text">Aller sur le Forum</span>
                    </div>

                    <div class="project-hexa">
                        <span class="project-hexa_text">Notre Philosophie</span>
                    </div>

                </div>


                <div class="project-hexaline">
                    <div class="project-hexa">
                        <span class="project-hexa_text">Inscription<br/>Connexion</span>
                    </div>
                    <div class="project-hexa">
                        <span class="project-hexa_text">Equipe d'HexaDev</span>
                    </div>
                </div>

               
                <div class="project-hexaline">
                <div class="project-hexa">
                        <span class="project-hexa_text">Aller sur le Forum</span>
                    </div>
                    <div class="project-hexa">
                        <span class="project-hexa_text">Aller sur le Forum</span>
                    </div>

                    <div class="project-hexa">
                        <span class="project-hexa_text">Notre Philosophie</span>
                    </div>

                </div>
                </section> 
    }*/

    render() {
        return (
            <section class="projects-hexagon-gallery">
                <div class="projects-hex">
                    <img class = "projects-img" src="https://images.pexels.com/photos/1421264/pexels-photo-1421264.jpeg?cs=srgb&dl=aerial-aerial-photo-aerial-photography-1421264.jpg&fm=jpg" alt="some"></img>
                    <p> UWUWUWU</p>
                    <div class = "projects-overlay"> PROJECT TITLE </div>
                </div>
                <div class="projects-hex"></div>

                <div class="projects-hex"></div>
                <div class="projects-hex"></div>
                <div class="projects-hex"></div>

                <div class="projects-hex"></div>
                <div class="projects-hex"></div>

                <div class="projects-hex"></div>
                <div class="projects-hex"></div>
                <div class="projects-hex"></div>
           
            </section>

                
        )
    }
}
export default Projects
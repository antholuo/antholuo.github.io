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

    render(){
        return (
            <section>
                <div class = "title">
                    Experiences
                    <p> aljkhsdfgashgjdfchkasd asdhgfasghdfkc aghdfas ghafgd kgh asfdghkfas a kjysdghakjdh anhdfahjndfhjad adfgh</p>

                </div>

                <div class = "line">                     
                    <hr></hr>
                </div>

                <div class = "box">

                    <div class = "work">
                        <p class = "header">Startselect | Online Prepaid Services</p>
                        <p> May 2016 - current </p>
                    </div>
                    <div class = "description">
                        <p class = "header"> Fulltime - Senior Web Developer </p>
                        <p> Working as a Senior Devloper on a large european based webshop for digital games and gifrcards. The application is Laravel based and as a team we are working in a fully scrum way.</p>
                        <p>  Eindhoven |  http://startselect.com </p>
                    </div>
                </div>
                <div class = "box">
                    <div class = "work"> 
                        <p class = "header">The Secret Lab</p>
                        <p> May 2016 - current </p>
                    </div>
                    <div class = "description">
                        <p class = "header">Fulltime - Senior Web Developer</p>
                        <p>As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more. Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.</p>
                        <p> Amsterdam |  http://thesecretlab.nl</p>
                    </div>
                </div>
                <div class = "box">
                <div class = "work"> 
                        <p class = "header">The Secret Lab</p>
                        <p> May 2016 - current </p>
                    </div>
                    <div class = "description">
                        <p class = "header">Fulltime - Senior Web Developer</p>
                        <p>As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more. Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.</p>
                        <p> Amsterdam |  http://thesecretlab.nl</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Work
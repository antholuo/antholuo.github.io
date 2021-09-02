import React from 'react'

import './Projects.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import spike from './media/proj/spike.jpg';
import robo from './media/proj/2381.jpg';
import hex from './media/proj/hex.jfif';
import rnm from './media/proj/rnm75.png';
import roborace from './media/proj/Roborace.jpg';
import ecor1052 from './media/proj/ecor1052.jpg';
import slav from './media/proj/slav.jpg';
import ece106 from './media/proj/ece106.jpg';

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

    // hexagon is a border/outline thing and there's an image inside with a project title
    // and then on hover the image darkens and the title slides up and away and info about the project slides up
    // and then on click the bg image turns grey or wtv and the outline of the hexagon slowly zooms outwards to fill the entire screen with grey
    // and then you arrive at your new project page !
    render() {
        return (
            <section class="projects-hexagon-gallery">
                <div class="projects-hex" type="button">
                    <img class="projects-img" src={spike} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> WARG - spike</p>
                        <p style={{ fontSize: 20 + 'px' }}> c++ | STM Cube Ide | git </p>
                        <p class="projects-description"> worked with WARG team to develop gimbal stabilization and path-management systems for our SPIKE plane </p>
                    </div>
                    {/* <div class = "projects-overlay"> 
                    <p>LEARN MORE</p>
                    </div> */}
                </div>
                
                <div class="projects-hex" type="button">
                    <img class="projects-img" src={robo} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> 2381 Robotics</p>
                        <p style={{ fontSize: 20 + 'px' }}> C | Adaptive Pure Pursuit | Inventor </p>
                        <p class="projects-description"> For 3 years I was the team captain of 2381 robotics, and I worked to consistently grow and improve the team by working on both hardware and software design. </p>
                    </div>

                </div>

                

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={hex} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> WARG - 2022 Plane</p>
                        <p style={{ fontSize: 20 + 'px' }}> More details to come </p>
                        <p class="projects-description"> aljhsdgkasj dajkhgdkajsf dhjkasfdkhgaf hgasfdkghfaskghdfa  shgdfahskd  faghsdfhgas fdhgasfd ahsd ah ada dadfasdfas fs f sfdasfasf asf asf ahjgfd jahf dghjadfhga dhadhgfa jhgdf ahjgfdhagjsfdhgasfdjhgasfd ghjasfdghjaf dkhasfdkhgasfdjhga </p>
                    </div>

                </div>
                
                <div class="projects-hex" type="button">
                    <img class="projects-img" src="https://images.pexels.com/photos/1421264/pexels-photo-1421264.jpeg?cs=srgb&dl=aerial-aerial-photo-aerial-photography-1421264.jpg&fm=jpg" alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> AI Music Generator</p>
                        <p style={{ fontSize: 20 + 'px' }}> Python | Tensorflow | Music 21 </p>
                        <p class="projects-description"> A bot that automatically generates new music in a similar style to the given input using linear and non-linear models to extrapolate data. Built and developed within an Ubuntu Virtual machine </p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={ece106} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> Fringe Field Capacitance Rainfall Senor</p>
                        <p style={{ fontSize: 20 + 'px' }}> Arduino | ECE 106 </p>
                        <p class="projects-description"> Designed a custom pcb that is designed to leverage fringe fields to measure the amount of rain/moisture through a windshield/acrylic barrier through changes in capacitance. Designed as a final project for ece 106 </p>
                    </div>

                </div>
                <div class="projects-hex" type="button">
                    <img class="projects-img" src={roborace} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> Deep Learning Object Detector</p>
                        <p style={{ fontSize: 20 + 'px' }}> Python | Keras | Tensorflow | Open CV</p>
                        <p class="projects-description"> As part of an autonomous vehicle team, I implemented multiple object detection architectures in Python/C++ using Qt, OpenCV, Tensorflow, and Keras. Architectures included YOLO, R-CNN's, and Siam-Mask(-r). Our team followed an Agile approach throughout the entire development process</p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={ecor1052} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> Facial Recognition & Classification System</p>
                        <p style={{ fontSize: 20 + 'px' }}> Raspberry Pi | Servos | Tf | Python | Pillow </p>
                        <p class="projects-description"> I used network-linked raspberry Pi 4's to interface with external I/O Devices csuch as displays, speakers, leds, and cameras in order to run my custom machine learning model for facial recognition and classification. The program works by taking a face and classifying it, and then using tuned PID algorithms we can maintain visual lock with a target and use a relational database to lookup the persons information. </p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={rnm} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> RNM 75E</p>
                        <p style={{ fontSize: 20 + 'px' }}> KiCad | Altium | SolidWorks </p>
                        <p class="projects-description"> Designed a custom keyboard PCB and case using KiCad Altium and SolidWorks </p>
                    </div>
                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={slav} alt="some"></img>
                    <div class="projects-text">
                        <p style={{ fontSize: 50 + 'px' }}> SLAV - Live Sound Engineer</p>
                        <p style={{ fontSize: 20 + 'px' }}> X32 | FOH Sound Engineer </p>
                        <p class="projects-description"> With SLAV, I was in charge of the execution and deployment of sound related to most events, including setup, teardown, and live mixing during concerts, shows, and other activities. </p>
                    </div>

                </div>



            </section>


        )
    }
}
export default Projects
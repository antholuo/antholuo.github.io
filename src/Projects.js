import React, {Component} from 'react'

import './Projects.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overdrive from 'react-overdrive'


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

    // hexagon is a border/outline thing and there's an image inside with a project title
    // and then on hover the image darkens and the title slides up and away and info about the project slides up
    // and then on click the bg image turns grey or wtv and the outline of the hexagon slowly zooms outwards to fill the entire screen with grey
    // and then you arrive at your new project page !


    // state = {active: false};
    // handleClick = () => {
    //     this.setState(currentState => {
    //         return {active: !currentState.active};
    //     });
    // }
    testing() {
        alert('hello!')

        return (
            <container>
            </container>
        )

    }

    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        const isActive = this.state.isActive;
  
        return (
            <body>
                
                <div className = {isActive ? "projects-open-hex-wrapper": null}></div>
                <div className = {isActive ? "projects-open-hex" : null}>
                    {isActive? <section class = "projects-onclick-hex">
                        <img class = "projects-onclick-img" src={spike} alt="some">
                        </img>
                        <div class = "projects-clip"></div>


                        <div class = "projects-onclick-text">
                            <p class = "date"> date - date</p>

                            <p class = "title"> PORJECT TITKLE </p>
                            <hr class = "line"></hr>
                            <p class = "body-text">  aghdfghad ahdfahgdhagdfghasfd hafdhafdhad a asdfhasdfha ahsgfd hagdhadfhas ahsfdahjsg alkjsdh aj asgdjahsgdja dafgdafdhgafdghafdhfa adfa jd aj jada dahdfahdf aakja jdfakdfakhgf</p>
                            <p class = "skills"> SKILL SKILL SKILL SKILL</p>

                        </div>
                    </section>: null}
                </div> 
           

            <div className = {isActive ? "projects-white-box" :null} type = "button" onClick = {this.handleToggle}></div>

            <section class="projects-hexagon-gallery">
                <div class="projects-hex" type="button" onClick={this.handleToggle}>
                    <img class="projects-img" src={spike} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> WARG - spike</p>
                        <p class = "projects-text-blurb"> c++ | STM Cube Ide | git </p>
                        <p class="projects-description"> worked with WARG team to develop gimbal stabilization and path-management systems for our SPIKE plane </p>
                    </div>
                    {/* <div class = "projects-overlay"> 
                    <p>LEARN MORE</p>
                    </div> */}
                </div>
                
                <div class="projects-hex" type="button">
                    <img class="projects-img" src={robo} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> 2381 Robotics</p>
                        <p class = "projects-text-blurb"> C | Adaptive Pure Pursuit | Inventor </p>
                        <p class="projects-description"> For 3 years I was the team captain of 2381 robotics, and I worked to consistently grow and improve the team by working on both hardware and software design. </p>
                    </div>

                </div>

                

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={hex} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> WARG - 2022 Plane</p>
                        <p class = "projects-text-blurb"> More details to come </p>
                        <p class="projects-description"> aljhsdgkasj dajkhgdkajsf dhjkasfdkhgaf hgasfdkghfaskghdfa  shgdfahskd  faghsdfhgas fdhgasfd ahsd ah ada dadfasdfas fs f sfdasfasf asf asf ahjgfd jahf dghjadfhga dhadhgfa jhgdf ahjgfdhagjsfdhgasfdjhgasfd ghjasfdghjaf dkhasfdkhgasfdjhga </p>
                    </div>

                </div>
                
                <div class="projects-hex" type="button">
                    <img class="projects-img" src="https://images.pexels.com/photos/1421264/pexels-photo-1421264.jpeg?cs=srgb&dl=aerial-aerial-photo-aerial-photography-1421264.jpg&fm=jpg" alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> AI Music Generator</p>
                        <p class = "projects-text-blurb"> Python | Tensorflow | Music 21 </p>
                        <p class="projects-description"> A bot that automatically generates new music in a similar style to the given input using linear and non-linear models to extrapolate data. Built and developed within an Ubuntu Virtual machine </p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={ece106} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> Fringe Field Capacitance Rainfall Senor</p>
                        <p class = "projects-text-blurb"> Arduino | ECE 106 </p>
                        <p class="projects-description"> Designed a custom pcb that is designed to leverage fringe fields to measure the amount of rain/moisture through a windshield/acrylic barrier through changes in capacitance. Designed as a final project for ece 106 </p>
                    </div>

                </div>
                <div class="projects-hex" type="button">
                    <img class="projects-img" src={roborace} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> Deep Learning Object Detector</p>
                        <p class = "projects-text-blurb"> Python | Keras | Tensorflow | Open CV</p>
                        <p class="projects-description"> As part of an autonomous vehicle team, I implemented multiple object detection architectures in Python/C++ using Qt, OpenCV, Tensorflow, and Keras. Architectures included YOLO, R-CNN's, and Siam-Mask(-r). Our team followed an Agile approach throughout the entire development process</p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={ecor1052} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> Facial Recognition & Classification System</p>
                        <p class = "projects-text-blurb"> Raspberry Pi | Servos | Tf | Python | Pillow </p>
                        <p class="projects-description"> Custom machine learning model for facial recognition and classification. Tuned PID algorithms on network Pi 4's can maintain visual lock with a target and use a relational database to lookup information.</p>
                    </div>

                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={rnm} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> RNM 75E</p>
                        <p class = "projects-text-blurb"> KiCad | Altium | SolidWorks </p>
                        <p class="projects-description"> Designed a custom keyboard PCB and case using KiCad Altium and SolidWorks </p>
                    </div>
                </div>

                <div class="projects-hex" type="button">
                    <img class="projects-img" src={slav} alt="some"></img>
                    <div class="projects-text">
                        <p class = "projects-text-title"> SLAV - Live Sound Engineer</p>
                        <p class = "projects-text-blurb"> X32 | FOH Sound Engineer </p>
                        <p class="projects-description"> With SLAV, I was in charge of the execution and deployment of sound related to most events, including setup, teardown, and live mixing during concerts, shows, and other activities. </p>
                    </div>

                </div>



            </section>
            </body>

        )
    }
}
export default Projects
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

<link rel="stylesheet" href="Work.css" />

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
                            As part of my second term working on the design and development of Ciena's optical ASIC, most of my tasks revolved around designing subchip-level RTL code using System Verilog.
                            <ul>
                              <li> Implemented new translational subchip layer for register accesses between Ciena internal protocol and external (generic) register protocols, including design for backpressure and flow control, increasing bandwidth by 20 times.</li>
                              <li> Created subchip Serdes onramp/offramp logic within 400G subchip. </li>
                              <li> Used a variety of tools such as Questa, Synopsys DVE & Simulation to verify read/write timings. </li>
                              <li> Wrote basic UVM tests to read, write, and mirror data to the registers. </li>
                              <li> Used tools such as WaveDrom, Git, Vim, Synopsys VCS, Verilog AUTO, and gradle throughout the work term. </li>
                              <li> Worked in Fedora Linux </li>
                            </ul>
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
                                <li>Writing development tools in System Verilog.</li>
                                <li>Creating wrappers, design checks, and automation scripts in Python.</li>
                                <li>Integrating design checks into Jenkins builds using Bash and Makefiles.</li>
                                <li>Worked within a Fedora Linux environment.</li>
                                <li>Used clearcase to version control, checkin, checkout, and submit code.</li>
                                <li>Aided in the transition from clearcase to git.</li>
                            </ul>
                        </p>
                        <a href="https://www.ciena.ca/">Ciena Canada |  https://www.ciena.ca/</a>
                    </div>
                </div>
                <div class="box">
                    <div class="work">
                        <p class="header">Nokia</p>
                        <hr class="body-line"></hr>

                        <p> May 2019 - August 2019 </p>
                    </div>
                    <div class="description">
                        <p class="header">Co-op: Software Engineering</p>
                        <p>As part of the Nokia Convergent Charging team, I wrote tools for internal testing as well as features for our client 5g servers.</p>
                        <ul>
                            <li>Developed and operated within a RedHat Enterprise Linux environment.</li>
                            <li>Wrote tools and features using Java in Eclipse.</li>
                            <li>Submitted and debugged features using Python and Bash with git as a Version Control System.</li>
                            <li>Worked independently to solve problems and learn the code repository.</li>
                            <li>Developed strong working relationships with team members through an Agile team approach.</li>
                        </ul>
                        <a href="https://www.nokia.com/">Nokia |  https://www.nokia.com/</a>
                    </div>
                </div>
                <div class="box">
                    <div class="work">
                        <p class="header">2381 & 4862 Robotics</p>
                        <hr class="body-line"></hr>

                        <p> March 2019 - May 2021 </p>
                    </div>
                    <div class="description">
                        <p class="header">Part Time: Robotics Team Mentor</p>
                        <p>
                            After the end of my competitive Robotics career, I have been working closely with the teams at 2381 Kernel Bye and 4862 Coltenoids as a mentor and teacher for newer students. Some of my responsibilities included:
                            <ul>
                                <li>Teaching sfotware principles such as git, PID's, or Localization to incoming students.</li>
                                <li>Teaching hardware principles such as CAD and safe equipment operation to incoming and younger students.</li>
                                <li>Working closely with the team to help them develop and grow ideas on their own.</li>
                                <li>Help team members reflect on their performance at competitions and find ways towards improving the whole team.</li>
                                <li>Organize and schedule events and travel for the team.</li>
                            </ul>
                        </p>
                        <a href="https://2381.ca/">2381 Robotics |  https://2381.ca/</a>
                    </div>
                </div>
                <div class="box">
                    <div class="work">
                        <p class="header">City of Ottawa</p>
                        <hr class="body-line"></hr>

                        <p> January 2016 - August 2021 </p>
                    </div>
                    <div class="description">
                        <p class="header">Part Time: Specialist Sports Instructor</p>
                        <p>Since starting my volunteering in 2014, I have actively been a part of leading sports programs at various City of Ottawa facilities.
                            Throughout my time, I have worked with clients of all ages to help them reach their goals in various disciplines such as Table Tennis, Badminton, Rock Climbing, and Swimming!
                            <br></br>
                            I have learned a lot about building strong working relationships not only with clients, but also with co-workers and other maintenance and management staff in order to provide the best customer experience for our clients.
                        </p>
                        <a href="https://ottawa.ca/en">City of Ottawa |  https://ottawa.ca/en</a>
                    </div>
                </div>
            </container>
        )
    }
}
export default Work

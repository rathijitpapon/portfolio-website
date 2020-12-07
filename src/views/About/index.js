import React, {useState} from 'react';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import { pdfjs } from 'react-pdf';

import Resume from '../../assets/pdfs/Rathijit Paul.pdf';
import aboutParticlesConfig from '../../config/aboutParticlesConfig';
import Hamburger from '../../components/Hamburger';
import Footer from "../../components/Footer";

import AboutMe from "./Topics/AboutMe";
import Education from "./Topics/Education";
import Experience from "./Topics/Experience";
import Skill from "./Topics/Skill";

import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import "./styles.css";

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Analytics () {
    ReactGa.initialize(process.env.REACT_APP_GA_KEY);
    ReactGa.pageview(process.env.REACT_APP_DOMAIN_NAME + '- Home Screen');
}

const About = (props) => {

    const [show, setShow] = useState(false);
    const [topic, setTopic] = useState("about-me");

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
    }

    const handleTopic = (topicName) => {
        setTopic(topicName);
    }

    Analytics()

    return (
        <Container className="About-header" fluid={true}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Rathijit Paul</title>
                <link rel="canonical" href={process.env.REACT_APP_DOMAIN_NAME} />
                <meta name="description" content="Rathijit Paul | Full Stack Software Developer
                Experienced in Web Application Development, Backend Development.
                Strong Knowledge in Programming Basics & Problem Solving.
                Undergaduate Student of Computer Science & Engineering at Bangladesh University of Engineering & Technology (BUET).
                " />
            </Helmet>

            <Animate to="1" from="0" attributeName="opacity">
            <Particles
                params={aboutParticlesConfig}
                className="particle"
            />
            <Row className="About-main">
                <Row className="Hamburger-menu">
                    <Hamburger />
                </Row>

                <Row className="About-Col-main">
                    <Col  xl={4}  className="About-col">
                        <div>
                            <Row className="about-left-footer" >
                                <Col xl={12} className="button-main">
                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("about-me")}
                                    >
                                        About Me
                                    </Button> &nbsp;

                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("experience")}
                                    >
                                        Experiences
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="about-left-footer" >
                                <Col xl={12} className="button-main">
                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("education")}
                                    >
                                        Education
                                    </Button> &nbsp;

                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("skill")}
                                    >
                                        Skills
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="about-left-footer" >
                                <Col xl={12} className="button-main">
                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn resume-btn"
                                        onClick={handleOpen}
                                    >
                                        Resume
                                    </Button>
                                </Col>
                            </Row>

                            <Modal
                                aria-labelledby="contained-modal-title-vcenter"
                                show={show} 
                                onHide={handleClose}
                                centered
                            >
                                <Modal.Body className="about_resume_modal_body">
                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                                        <div id="pdfviewer">
                                            <Viewer fileUrl={Resume} />
                                        </div>
                                    </Worker>
                                    {/* <Document
                                        file={Resume}
                                    >
                                        <Page pageNumber={1} />
                                    </Document> */}
                                </Modal.Body>
                            </Modal>
                        </div>
                    </Col>
                    <Col  xl={8}  className="About-col">
                        {topic === "about-me" ? <AboutMe /> : null}
                        {topic === "experience" ? <Experience /> : null}
                        {topic === "education" ? <Education /> : null}
                        {topic === "skill" ? <Skill /> : null}
                    </Col>
                    
                </Row>
            </Row>
            <Row className="About-footer">
                <Footer />
            </Row>
           </Animate>
        </Container>
    );
}

export default About;
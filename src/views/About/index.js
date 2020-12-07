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

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
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
                    <Col  xl={6}  className="About-col">
                        <div>
                            <Row className="About-text">
                                <Col xl={12}>
                                    <h1 className="p-heading1">About Me</h1>
                                    <p className="p-heading2">
                                        Hello, I am <strong>Rathijit Paul</strong>. <br />
                                        I'm currently pursuing an undergraduate degree in <strong><a 
                                            style={{ color: "#e493ea"}}
                                            href="https://cse.buet.ac.bd/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Computer Science & Engineering</a></strong> at <strong><a 
                                            style={{ color: "#e493ea"}}
                                            href="https://www.buet.ac.bd/web/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Bangladesh University of Engineering & Technology (BUET)</a></strong>. <br /><br />

                                        Besides academic studies, I practice full stack web development & machine learning. Also I’m doing an internship as a <strong>Software Engineer</strong> in a well known startup software company.
                                    </p>

                                    <div className="p-heading2">
                                        <ul>
                                            <li 
                                                style={{margin: "auto", textAlign: 'left'}}
                                            >
                                                <strong>My key interests are:</strong>
                                            </li>
                                            <li 
                                                style={{margin: "auto", marginLeft: "20px", textAlign: 'left'}}
                                            >
                                                🥰 Software Development
                                            </li>
                                            <li 
                                                style={{margin: "auto", marginLeft: "20px", textAlign: 'left'}}
                                            >
                                                🤩 Web Application Development
                                            </li>
                                            <li 
                                                style={{margin: "auto", marginLeft: "20px", textAlign: 'left'}}
                                            >
                                                😊 Backend Development
                                            </li>
                                            <li 
                                                style={{margin: "auto", marginLeft: "20px", textAlign: 'left'}}
                                            >
                                                😍 Programming Problem Solving
                                            </li>
                                            <li 
                                                style={{margin: "auto", marginLeft: "20px", textAlign: 'left'}}
                                            >
                                                😀 Machine Learning
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <p  className="p-heading2">
                                        I always love to explore new technology, learn them, and solve programming related problems. On my free time I like to travel, explore different food items, watch movies & play games.
                                    </p>
                                </Col>
                            </Row>
                            
                            <Row className="about-left-footer" >
                                <Col xl={12} className="button-main">
                                    &nbsp; &nbsp;
                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="resume-btn"
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
                    <Col  xl={6}  className="About-col">
                        <div>
                            <Row className="About-text">
                                <Col xl={12}>
                                    <h1 className="p-heading1">Education</h1>
                                    <p className="p-heading2">
                                        
                                    </p>
                                </Col>
                            </Row>
                            
                            <Row className="about-left-footer" >
                                <Col xl={12} className="social-icons">
                                    &nbsp; &nbsp;

                                </Col>
                            </Row>
                        </div>
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
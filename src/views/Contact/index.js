import React from 'react';

import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import Particles from 'react-tsparticles';

import ContactForm from "../../components/ContactForm";
import Hamburger from '../../components/Hamburger';
import Footer from "../../components/Footer";
import contactParticlesConfig from '../../config/contactParticlesConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SiBuymeacoffee } from 'react-icons/si';
import {Container, Row, Col} from 'react-bootstrap';
import "./styles.css";

function Analytics () {
    ReactGa.initialize(process.env.REACT_APP_GA_KEY);
    ReactGa.pageview(process.env.REACT_APP_DOMAIN_NAME + '- Home Screen');
}

const Contact = props => {

    Analytics()

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Rathijit Paul</title>
                <link rel="canonical" href={process.env.REACT_APP_DOMAIN_NAME} />
                <meta name="description" content="Rathijit Paul | Full Stack Software Developer" />
            </Helmet>

            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={contactParticlesConfig}
                    className="particle"
                />
                <Container className="Contact-header" fluid={true}>
                    <Row className="Hamburger-menu">
                        <Hamburger />
                    </Row>
                    <Row className="Contact-main">
                        <Col  xl={6}  className="Contact-left">
                            <div>
                                <Row className="Contact-text">
                                    <Col xl={12}>
                                        <h1 className="p-heading1">Get In Touch</h1>
                                        <p className="p-heading2">
                                            <strong>Hello, People !!!</strong>
                                            <br />
                                            Thank you for visiting my website. 😊
                                            <br /> <br />

                                            If you have any queries, want to hire me or simply want to discuss anything, please feel free to <strong>PING</strong> me. I'm always open for discussion. <br /> <br />
                                            
                                            You can contact me via <strong><a className="mailto" href={"mailto:" + process.env.REACT_APP_EMAIL_ADDRESS}>EMAIL</a></strong> or type your messages in the <strong> Contact Form </strong> & send it. Or visit my social media profiles by clicking the icons below.
                                        </p>
                                    </Col>
                                </Row>
                                
                                <Row className="contact-left-footer" >
                                    <Col xl={12} className="social-icons">
                                        &nbsp; &nbsp;

                                        <div style={{
                                            width: '250px',
                                            margin: 'auto',
                                            marginBottom: '15px',
                                        }}>
                                            <a 
                                                className="buymeacoffee"
                                                href="https://www.buymeacoffee.com/rathijitpapon"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                BUY ME A <SiBuymeacoffee className="coffee" />
                                            </a>
                                        </div>

                                        <a 
                                            href="https://www.facebook.com/rathijitpapon009/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon size="2x" className="fb" icon={faFacebook} />
                                        </a>

                                        <a 
                                            href="https://github.com/rathijitpapon" target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon size="2x" className="git" icon={faGithub} />
                                        </a>

                                        <a 
                                            href="https://www.linkedin.com/in/rathijitpapon009/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon size="2x" className="linkedin" icon={faLinkedin} />
                                        </a>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col  xl={6}  className="Contact-right">
                            <ContactForm />
                        </Col>
                    </Row>
                    <Row className="Contact-footer">
                        <Footer />
                    </Row>
                </Container>
            </Animate>
        </div>
    );
}

export default Contact;
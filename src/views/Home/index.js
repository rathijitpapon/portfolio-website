import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Animate from 'react-smooth';
import Particles from 'react-tsparticles';
import particlesConfig from '../../config/particlesConfig';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SiBuymeacoffee } from 'react-icons/si';

import Footer from "../../components/Footer";
import {
    Container,
    Row,
    Col,
    Image,
    Button,
} from 'react-bootstrap';

import Rathijit from '../../assets/img/rathijit.png';
import "./styles.css";

function Analytics () {
    ReactGa.initialize(process.env.REACT_APP_GA_KEY);
    ReactGa.pageview(process.env.REACT_APP_DOMAIN_NAME + '- Home Screen');
}

const Home = (props) => {

    Analytics()

    return (
        <div>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home | Rathijit Paul</title>
                    <link rel="canonical" href={process.env.REACT_APP_DOMAIN_NAME} />
                    <meta name="description" content="Rathijit Paul | Full Stack Software Developer" />
            </Helmet>

            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={particlesConfig}
                    className="particle"
                />
                <Container className="App-header" fluid={true}>
                    <Row className="App-main">
                    <Col  xl={7}  className="App-left">
                        
                        <Container className="home-left" >
                            <Row className="home-left-main">
                                <Col xl={12} className="home-left-main-col">
                                    <h1 className="first-line">
                                        Hello! 
                                    </h1>
                                    <h2 className="second_line">
                                        I am <strong>Rathijit Paul</strong>
                                    </h2>
                                    <h3>
                                        <strong>
                                            <ReactTypingEffect
                                                text={["Software Developer", "Full Stack Web Developer"]}
                                                className="typical"
                                                speed="70"
                                                eraseDelay="1500"
                                                eraseSpeed="60"
                                                typingDelay="500"
                                            />
                                        </strong>
                                    </h3>
                                    
                                    <br />

                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="home-left-aboutmme-btn"
                                    >
                                        <Link 
                                            to="/project" 
                                            style={{ textDecoration: 'none', color: 'white' }} 
                                            className="home-left-aboutme"
                                        >
                                            Projects
                                        </Link>
                                    </Button> &nbsp;

                                    {/* <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="home-left-aboutmme-btn"
                                    >
                                        <Link 
                                            to="/blog" 
                                            style={{ textDecoration: 'none', color: 'white' }} 
                                            className="home-left-aboutme"
                                        >
                                            Blog
                                        </Link>
                                    </Button> &nbsp; */}

                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="home-left-aboutmme-btn"
                                    >
                                        <Link 
                                            to="/about" 
                                            style={{ textDecoration: 'none', color: 'white' }} 
                                            className="home-left-aboutme"
                                        >
                                            About Me
                                        </Link>
                                    </Button> &nbsp;

                                    <Button 
                                        variant="outline-light" 
                                        size="lg" 
                                        className="home-left-aboutmme-btn"
                                    >
                                        <Link 
                                            style={{ textDecoration: 'none', color: 'white' }} 
                                            to="/contact" 
                                            className="home-left-aboutme"
                                        >
                                            Contact Me
                                        </Link>
                                    </Button>

                                    <div style={{
                                        width: '250px',
                                        margin: 'auto',
                                        marginTop: '10px',
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
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col  xl={5} className="App-right">
                    <Container className="home-right">
                        <Row className="home-right-main">
                            <Col xl={12}>
                            <br />
                            <Image src={Rathijit} className="home-right-main-img" alt="Image of Rathijit Paul"/>
                            </Col>
                            <Row className="home-right-footer" >
                                <Col xl={12} className="social-icons">
                                    &nbsp; &nbsp;

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
                        </Row>
                    </Container>
                    </Col>
                    </Row>
                    <Row className="App-footer">
                        <Footer />
                    </Row>
                </Container>
            </Animate>
        </div>
    );
}

export default Home;
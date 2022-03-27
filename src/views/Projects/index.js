import React, {useState} from 'react';

import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import Particles from 'react-tsparticles';

import Hamburger from '../../components/Hamburger';
import Footer from "../../components/Footer";
import Project from "../../components/Project";

import projectParticlesConfig from '../../config/projectParticlesConfig';

import {Container, Row, Col, Button} from 'react-bootstrap';
import "./styles.css";

const topProjects = require("../../assets/projects/topProjects.json");
const webProjects = require("../../assets/projects/webProjects.json");
const uniProjects = require("../../assets/projects/uniProjects.json");
const otherProjects = require("../../assets/projects/otherProjects.json");

function Analytics () {
    ReactGa.initialize(process.env.REACT_APP_GA_KEY);
    ReactGa.pageview(process.env.REACT_APP_DOMAIN_NAME + '- Home Screen');
}

const Projects = () => {

    const [topic, setTopic] = useState("top-projects");

    const handleTopic = (topicName) => {
        setTopic(topicName);
    }

    Analytics()

    return ( 
        <Container className="Project-header" fluid={true}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | Rathijit Paul</title>
                <link rel="canonical" href={process.env.REACT_APP_DOMAIN_NAME} />
                <meta name="description" content="Rathijit Paul | Full Stack Software Developer" />
            </Helmet>

            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={projectParticlesConfig}
                    className="particle"
                />

                <Row className="Project-main">
                    <Row className="Hamburger-menu">
                        <Hamburger />
                    </Row>
                    <br />

                    <Row> 
                        <Col className="Project-col">
                            <Row className="Project-Button-footer" >
                                <h1 style={{margin: "auto", marginBottom: "10px",}} className="p-heading1">Projects</h1>
                                <Col xl={12} className="Project-button-main">
                                    <Button 
                                        style={topic === "top-projects" ? {
                                            background: "#666666", fontColor: "black"} : null
                                        }
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("top-projects")}
                                    >
                                        Top
                                    </Button> &nbsp;

                                    <Button 
                                        style={topic === "web-projects" ? {
                                            background: "#666666", fontColor: "black"} : null
                                        }
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("web-projects")}
                                    >
                                        Web
                                    </Button> &nbsp;

                                    <Button 
                                        style={topic === "uni-projects" ? {
                                            background: "#666666", fontColor: "black"} : null
                                        }
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("uni-projects")}
                                    >
                                        University
                                    </Button> &nbsp;

                                    <Button 
                                        style={topic === "others" ? {
                                            background: "#666666", fontColor: "black"} : null
                                        }
                                        variant="outline-light" 
                                        size="lg" 
                                        className="topic-btn"
                                        onClick={() => handleTopic("others")}
                                    >
                                        Others
                                    </Button>
                                </Col>
                            </Row>
                        </Col>                     
                    </Row>

                    <hr className="hr-line"/>

                    <Row className="Project-list-main">
                        {topic === "top-projects" ? (
                            topProjects.map(project => (
                                <Project 
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : null}
                        
                        {topic === "web-projects" ? (
                            webProjects.map(project => (
                                <Project 
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : null}
                        
                        {topic === "uni-projects" ? (
                            uniProjects.map(project => (
                                <Project 
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : null}

                        {topic === "others" ? (
                            otherProjects.map(project => (
                                <Project 
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : null}
                    </Row>
                
                    
                </Row>
                <Row className="About-footer">
                    <Footer />
                </Row>
            </Animate>
        </Container>
    );
}
 
export default Projects;
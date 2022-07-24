import React from 'react';

import MFL from '../../../../assets/img/mfl.png';
import FPG from '../../../../assets/img/fpg.png';
import IM from '../../../../assets/img/im.jpeg';

import {Row, Col, Image} from 'react-bootstrap';
import "./styles.css";

const Experience = () => {
    return ( 
        <div>
            <Row className="About-text">
                <Col xl={12}>
                    <h1 className="p-heading1">Experiences</h1>

                    <br />

                    <Row>
                        <Col md={3}>
                            <Image 
                                style={{ 
                                    marginTop: "5px",
                                }} 
                                src={IM} alt="Image of Intelligent Machines Limited" className="experience-img" 
                            />
                        </Col>
                        <Col md={4}>
                            <p className="exp-p-heading2">
                                <strong>
                                    <a 
                                        style={{ color: "#e493ea"}} 
                                        href="https://bangladesh.ai/"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Intelligent Machines Limited
                                    </a>       
                                </strong> <br />
                                Software Engineer <br />
                                May 2022​ – ​ Present
                            </p>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col md={3}>
                            <Image 
                                style={{ 
                                    marginTop: "5px",
                                }} 
                                src={FPG} alt="Image of Free Pixel Games Ltd." className="experience-img" 
                            />
                        </Col>
                        <Col md={4}>
                            <p className="exp-p-heading2">
                                <strong>
                                    <div
                                        style={{ color: "#e493ea"}} 
                                    >
                                        Free Pixel Games Ltd.
                                    </div>        
                                </strong> 
                                Junior Software Engineer <br />
                                Feb 2021​ – ​ Dec 2021
                            </p>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col md={3}>
                            <Image 
                                style={{ 
                                    marginTop: "5px",
                                }} 
                                src={MFL} alt="Image of Mainframe Labs Ltd." className="experience-img" 
                            />
                        </Col>
                        <Col md={4}>
                            <p className="exp-p-heading2">
                                <strong>
                                    <a 
                                        style={{ color: "#e493ea"}} 
                                        href="https://mainframelabs.ltd/"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Mainframe Labs Ltd.
                                    </a>
                                    
                                </strong> <br />
                                Software Engineer Intern <br />
                                Sep 2020​ – ​ Dec 2020
                            </p>
                        </Col>
                    </Row>
                    
                    <p className="exp-p-heading2">
                        
                    </p>
                </Col>
            </Row>
        </div>
    );
}
 
export default Experience;
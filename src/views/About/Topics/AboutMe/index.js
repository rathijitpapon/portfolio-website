import React from 'react';

import {Row, Col} from 'react-bootstrap';
import "./styles.css";

const AboutMe = () => {
    return ( 
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
                        I always love to explore new technology, learn them, and solve programming related problems. On my free time I like to travel, taste different food items, watch movies & play games.
                    </p>
                </Col>
            </Row>
        </div>
    );
}
 
export default AboutMe;
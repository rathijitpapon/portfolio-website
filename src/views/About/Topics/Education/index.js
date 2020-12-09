import React from 'react';

import BUET from '../../../../assets/img/buet.png';
import AmritaLal from '../../../../assets/img/amritalaldey.png';
import Jubilee from '../../../../assets/img/jubilee.png';

import {Row, Col, Image} from 'react-bootstrap';
import "./styles.css";

const Education = () => {
    return ( 
        <div>
            <Row className="About-text">
                <Col xl={12}>
                    <h1 className="p-heading1">Education</h1>
                    <br />
                    <Row>
                        <Col md={3}>
                            <Image src={BUET} alt="Image of BUET" className="education-img" />
                        </Col>
                        <Col md={9}>
                            <p className="edu-p-heading2">
                                <strong>
                                    <a 
                                        style={{ color: "#e493ea"}} 
                                        href="https://www.buet.ac.bd/web/" target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Bangladesh University of Engineering & Technology (BUET)
                                    </a>
                                    
                                </strong> <br />
                                BSc, Computer Science & Engineering <br />
                                2017-Present
                            </p>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col md={3}>
                            <Image src={AmritaLal} alt="Image of BUET" className="education-img" />
                        </Col>
                        <Col md={9}>
                            <p className="edu-p-heading2">
                                <strong>
                                    <a 
                                        style={{ color: "#e493ea"}} 
                                        href="http://www.aldm.edu.bd/"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Amrita Lal Dey College
                                    </a>
                                </strong> <br />
                                HSC, Science <br />
                                2014-2016
                            </p>
                        </Col>
                    </Row>

                    <br />
                    
                    <Row>
                        <Col md={3}>
                            <Image src={Jubilee} alt="Image of BUET" className="education-img" />
                        </Col>
                        <Col md={9}>
                            <p className="edu-p-heading2">
                                <strong style={{ color: "#e493ea"}}>
                                    Patuakhali Government Jubilee High School
                                </strong> <br />
                                SSC, Science <br />
                                2006-2014
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Education;
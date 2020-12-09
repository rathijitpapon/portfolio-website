import React from 'react';

import {Row, Col} from 'react-bootstrap';
import "./styles.css";

const Skill = () => {
    return ( 
        <div>
            <Row className="About-text">
                <Col xl={12}>
                    <h1 className="p-heading1">Skills</h1>
                    
                    <Row  className="skill-p-heading2">
                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Languages
                            </strong>
                            <br />
                            
                            &nbsp; 1. JavaScript <br />
                            &nbsp; 2. Python <br />
                            &nbsp; 3. C++ <br />
                            &nbsp; 4. Java <br />
                            &nbsp; 5. SQL <br />
                            &nbsp; 6. MongoDB <br />
                                
                        </Col>
                        
                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Technologies
                            </strong>
                            <br />

                            &nbsp; 1. Node Js <br />
                            &nbsp; 2. React Js <br />
                            &nbsp; 3. Express <br />
                            &nbsp; 4. Mongoose <br />
                            &nbsp; 5. Flask <br />
                            &nbsp; 6. Git <br />
                            &nbsp; 7. Docker <br />
                            &nbsp; 8. OpenCV <br />
                            &nbsp; 9. Tensorflow <br />
                        </Col>

                        <Col sm={12} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Knowledge
                            </strong>
                            <br />
                            
                            &nbsp; 1. Data Structures & Algorithms <br />
                            &nbsp; 2. Full Stack Web Development <br />
                            &nbsp; 3. Backend Development <br />
                            &nbsp; 4. Problem Solving <br />
                            &nbsp; 5. Machine Learning<br />
                            &nbsp; 6. Deep Learning <br />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Skill;
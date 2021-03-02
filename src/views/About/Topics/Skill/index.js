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
                            &nbsp; 5. MySQL <br />
                            &nbsp; 6. PostgreSQL <br />
                            &nbsp; 7. MongoDB <br />
                                
                        </Col>
                        
                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Technologies
                            </strong>
                            <br />

                            &nbsp; 1. Node Js <br />
                            &nbsp; 2. React Js <br />
                            &nbsp; 3. Angular <br />
                            &nbsp; 4. Express <br />
                            &nbsp; 5. Mongoose <br />
                            &nbsp; 6. Flask <br />
                            &nbsp; 7. Git <br />
                            &nbsp; 8. Docker <br />
                            &nbsp; 9. OpenCV <br />
                            &nbsp; 10. Tensorflow <br />
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
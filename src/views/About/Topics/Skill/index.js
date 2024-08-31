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
                            
                            &nbsp; 1. Rust <br />
                            &nbsp; 2. Python <br />
                            &nbsp; 3. JavaScript <br />
                            &nbsp; 4. TypeScript <br />
                            &nbsp; 5. C++ <br />
                                
                        </Col>

                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Databases
                            </strong>
                            <br />
                            
                            &nbsp; 1. PostgreSQL <br />
                            &nbsp; 2. MongoDB <br />
                            &nbsp; 3. Apache Cassandra <br />
                            &nbsp; 4. ScyllaDB <br />
                            &nbsp; 5. Qdrant <br />
                            &nbsp; 6. MySQL <br />
                            
                        </Col>
                        
                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Tools and Frameworks
                            </strong>
                            <br />

                            &nbsp; 1. Tokio-Axum <br />
                            &nbsp; 2. Node.js <br />
                            &nbsp; 3. Next.js <br />
                            &nbsp; 4. FastAPI <br />
                            &nbsp; 5. Flask <br />
                            &nbsp; 6. Docker <br />
                            &nbsp; 7. Kubernetes <br />
                            &nbsp; 8. RabbitMQ <br />
                            &nbsp; 9. AWS Cloud <br />
                            &nbsp; 10. gRPC <br />
                            &nbsp; 11. LLM <br />
                        </Col>

                        <Col sm={6} className="skill-text">
                            <strong style={{ fontSize: "20px" }}>
                                Knowledge
                            </strong>
                            <br />
                            
                            &nbsp; 1. Data Structures & Algorithms <br />
                            &nbsp; 2. Backend Development <br />
                            &nbsp; 3. Full Stack Web Development <br />
                            &nbsp; 4. Problem Solving <br />
                            &nbsp; 5. MLOps <br />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Skill;
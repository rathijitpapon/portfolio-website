import React from 'react';

 
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Card, Row, Col, Image} from 'react-bootstrap';
import "./styles.css";

const Project = ({project}) => {

    return ( 
        <Col md={6} className="card_col">
            <Card className="card_main">
                <blockquote className="blockquote mb-0 card-body">
                    <h2>
                        {project.title}
                    </h2>
                    <footer className="blockquote-footer">
                        built using <strong title="Source Title">
                            {project.technologies.map(technology => technology + ", ")}
                        </strong>
                    </footer>
                </blockquote>

                <Card.Body className="description">
                    {project.images.length > 0 ? (
                        <Carousel showThumbs={false}>
                            {
                                project.images.map(image => (
                                    <Image 
                                        key={image}
                                        src={image} 
                                        alt="Projet Image" 
                                        className="project-img" 
                                    />
                                ))
                            }
                        </Carousel>
                    ) : null}

                    <br />
                    
                    {project.description}
                    
                </Card.Body>

                <Card.Footer className="footer-links">
                    <Row>
                        {project.links.map(link => (
                            <Col key={link.url}>
                                <strong>
                                    <a 
                                    style={{ color: "#e493ea"}}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >{link.title}</a></strong>
                            </Col>
                        ))}
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    );
}
 
export default Project;
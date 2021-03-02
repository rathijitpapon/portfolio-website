import React from 'react';

import './styles.css';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Footer = props => {
    return (
        <Container className="footer" fluid={true}>
            <Row >
                <Col xl={12}>
                    Copyright © 2020-{(new Date().getFullYear())} <strong>Rathijit Paul</strong>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
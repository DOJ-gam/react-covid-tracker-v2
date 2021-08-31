import React from 'react';

import styles from './Footer.module.css';
import {Container, Navbar, Row, Col} from 'react-bootstrap'

const Footer = ()=>{

    return(
        
        <Container fluid className="bg-dark p-3 mt-3">
            <Container>
                <Row className="justify-content-between">
                    <Col md={6} sm={12} lg={6} className="mt-4">
                        <h1 className="display-6 text-light">Made with Love using React Js, Developed by Omar Jeng (DOJ) </h1>

                    </Col>
                    <Col md={4} sm={12} lg={3}>
                        <h1 className="display-5 text-light text-center text-muted">Contact Me</h1>
                        <Row>
                            <Col md={4} sm={4}>
                                <a href="https://www.facebook.com/daddyomarjeng1" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                            <Col md={4} sm={4}>
                                <a href="https://gm.linkedin.com/in/daddy-omar-jeng-029aa0110" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                            <Col md={4} sm={4}>
                                <a href="https://github.com/DOJ-gam" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                            <Col md={4} sm={4}>
                                <a href="https://www.instagram.com/doj_official/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                            <Col md={4} sm={4}>
                                <a href="https://twitter.com/doj_official" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                            <Col md={4} sm={4}>
                                <a href="https://doj-gam.github.io/portfolio/" target="_blank" rel="noopener noreferrer"><i class="fas fa-user text-primary bg-light px-3 py-2 rounded h3 shadow-lg"></i></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}><p className="text-muted text-center">All Rights Reserved: © DOJ -Daddy Omar Jeng</p></Col>
                    
                </Row>
            </Container>
        </Container>

    )
}

export default Footer;
import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col  } from 'react-bootstrap';

const Footer = props => {
    return (
        <div>
            <footer className="blog-footer">
                <div className="w-container">
                    <div className="navigation-bar">
                    <Container >
                        <Row>
                            <Col md={10}>
                                <Row>
                                    <Col md={1}><Link className="blog-footer-nav-link"  to={'/'}>Home</Link></Col>
                                    <Col md={1}><Link className="blog-footer-nav-link"  to={'/'}>posts</Link></Col>
                                    <Col md={1}><Link className="blog-footer-nav-link"  to={'/about'}>about</Link></Col>
                                    <Col md={1}><Link className="blog-footer-nav-link"  to={'/contact'}>contact</Link></Col>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Row>
                                    <Col md={12}><a className=" blog-footer-nav-link" href="#header">↑&nbsp;Go to top</a></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

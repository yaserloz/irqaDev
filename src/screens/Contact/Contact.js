import React from 'react'
import BlogHeader from '../../blog/components/BlogHeader/BlogHeader'
import ContactForm from '../../blog/components/ContactForm/ContactForm'
import Profile from '../../blog/components/Profile/Profile'
import Footer from '../../blog/components/Footer/Footer'
import { Header, Icon } from 'semantic-ui-react';
import Menu from '../../blog/components/Menu/Menu'
import './Contact.css'
import { Container, Row, Col  } from 'react-bootstrap';


const Contact = props => {
    return (
        <>

            <BlogHeader>
                <Header  as='h2' icon textAlign='center'>
                <Icon name='code' circular />
                <Header.Content>ALQAISI yasir</Header.Content>
            </Header>
            <Menu page='contact' />

            </BlogHeader>
            <Container>
                <Row>
                    <Col md={9}><ContactForm /></Col>
                    <Col md={3}><Profile /></Col>
                </Row>

                </Container>
            <Footer />
        </>
    )
}


export default Contact

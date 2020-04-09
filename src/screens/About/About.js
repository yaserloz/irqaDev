import React from 'react'
import { ContentLayout } from '../../blog/layouts/ContentLayout'
// import axios from 'axios'
import './About.css';
import BlogHeader from '../../blog/components/BlogHeader/BlogHeader'
import AboutMe from '../../blog/components/AboutMe/AboutMe'

import Footer from '../../blog/components/Footer/Footer'
import { Header, Icon } from 'semantic-ui-react';
import Menu from '../../blog/components/Menu/Menu'
import Profile from '../../blog/components/Profile/Profile'
import { Container, Row, Col  } from 'react-bootstrap';


const Post = props => {
    return (
        <>
            <BlogHeader>
                <Header  as='h2' icon textAlign='center'>
                <Icon name='code' circular />
                <Header.Content>ALQAISI yasir</Header.Content>
            </Header>
            <Menu page="about" />

            </BlogHeader>
            <Container>
                <Row>
                    <Col md={9}><AboutMe /></Col>
                    <Col md={3}><Profile /></Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}



export default Post

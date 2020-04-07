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
            <div className='about-page-content-wrapper'>
                <AboutMe />
                <Profile />
            </div>
            <Footer />
        </>
    )
}



export default Post

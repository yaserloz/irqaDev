import React from 'react'
import BlogHeader from '../../blog/components/BlogHeader/BlogHeader'
import ContactForm from '../../blog/components/ContactForm/ContactForm'
import Profile from '../../blog/components/Profile/Profile'
import Footer from '../../blog/components/Footer/Footer'
import { Header, Icon } from 'semantic-ui-react';
import Menu from '../../blog/components/Menu/Menu'
import './Contact.css'


const Contact = props => {
    return (
        <>
            <BlogHeader>
                <Header  as='h2' icon textAlign='center'>
                <Icon name='code' circular />
                <Header.Content>ALQAISI yasir</Header.Content>
            </Header>
            <Menu />

            </BlogHeader>
            <div className='contact-page-content-wrapper'>
                        <ContactForm />
                        <Profile />
            </div>



            <Footer />

        </>
    )
}


export default Contact

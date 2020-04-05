import React, {useState, useEffect} from 'react'
import { ContentLayout } from '../blog/layouts/ContentLayout'
import PostIemList from '../blog/components/PostItem/PostIemList'
import axios from 'axios'
import './Index.css';
import { Header, Icon } from 'semantic-ui-react';
import Menu from '../blog/components/Menu/Menu'

import BlogHeader from '../blog/components/BlogHeader/BlogHeader'
import Footer from '../blog/components/Footer/Footer'

const Index = props => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        axios.get('https://api.yaz-fr.com/api/posts').then(r => {
            setPosts(r.data)
        });
    }, [])
    
    return (
        <>
            <BlogHeader>
                <Header  as='h2' icon textAlign='center'>
                <Icon name='code' circular />
                <Header.Content>ALQAISI yasir</Header.Content>
                </Header>
            <Menu />
            </BlogHeader>
            <ContentLayout>
            {
            posts.length 
                ?  
                    <PostIemList posts={posts} /> 
                : 
                    null 
            }
            
            </ContentLayout>
            <Footer />
        </>
    )
}



export default Index

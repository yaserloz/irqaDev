import React, {useState, useEffect} from 'react'
import { Header, Icon } from 'semantic-ui-react';
import { ContentLayout } from '../blog/layouts/ContentLayout'
import PostList from '../blog/components/Post/PostList'
import axios from 'axios'
import './Index.css';


const Index = props => {
    const [posts, setPosts] = useState([]);


  
    
    useEffect( ()=> {
        axios.get('https://api.yaz-fr.com/api/posts').then(r => {
            setPosts(r.data)
        });
    }, [])
    return (
        <>
    <Header  as='h2' icon textAlign='center'>
      <Icon name='code' circular />
      <Header.Content>Iraqi Dev</Header.Content>
    </Header>

	
    <ContentLayout>
    {
    posts.length 
        ?  
            <PostList posts={posts} /> 
        : 
            null 
    }
       
    </ContentLayout>
            
        </>
    )
}



export default Index

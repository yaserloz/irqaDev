import React, {useState, useEffect} from 'react'
import { ContentLayout } from '../blog/layouts/ContentLayout'
import PostList from '../blog/components/Post/PostList'
import axios from 'axios'
import './Index.css';
import Header from '../blog/components/Header/Header'

const Index = props => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        axios.get('https://api.yaz-fr.com/api/posts').then(r => {
            setPosts(r.data)
        });
    }, [])
    
    return (
        <>
            <Header />
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

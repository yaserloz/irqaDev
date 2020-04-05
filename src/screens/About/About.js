import React from 'react'
import { ContentLayout } from '../../blog/layouts/ContentLayout'
// import axios from 'axios'
import './About.css';
import BlogHeader from '../../blog/components/BlogHeader/BlogHeader'
import Footer from '../../blog/components/Footer/Footer'


const Post = props => {
    // const [posts, setPosts] = useState([]);

    // useEffect( ()=> {
    //     axios.get('https://api.yaz-fr.com/api/posts').then(r => {
    //         setPosts(r.data)
    //     });
    // }, [])
    
    return (
        <>
            <BlogHeader />
            <ContentLayout>
               <div>About</div>
            </ContentLayout>
            <Footer />
        </>
    )
}



export default Post

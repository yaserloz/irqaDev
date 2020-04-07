import React ,{useState, useEffect}from 'react'
import { ContentLayout } from '../../blog/layouts/ContentLayout'
import axios from 'axios'
import './PostView.css';
import Footer from '../../blog/components/Footer/Footer'
import OnePostHeader from '../../blog/components/OnePostHeader/OnePostHeader'
import {sanitizeHtml} from 'sanitize-html'
import { Link } from 'react-router-dom';

// const defaultOptions = {
//     allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
//     allowedAttributes: {
//       'a': [ 'href' ]
//     },
//     allowedIframeHostnames: ['www.youtube.com']
//   };
  
//   const sanitize = (dirty, options) => ({
//     __html: sanitizeHtml(
//       dirty, 
//       {options: { ...defaultOptions, ...options }}
//     )
//   });

  
  
  
//   const SanitizeHTML = ({ html, options }) => (
    
//   );

  
const PostView = props => {
    const [post, setPost] = useState({});

    useEffect( ()=> {
        axios.get(`https://api.yaz-fr.com/api/posts/${props.match.params.id}`).then(r => {
            setPost(r.data[0])
        });
    }, [])


    console.log(post    );
    return (
        <>
            <OnePostHeader {...post} />
            <ContentLayout>
            {
                post.article_text !== undefined
                    ?
                    <div className='post-text' dangerouslySetInnerHTML={{__html: post.article_text}} />
                    :
                    null
            }
           
            </ContentLayout>
            <div class="button-wrapper">
                <Link   to={`/`}><button className='button w-button'>←&nbsp;View all posts</button></Link>
            </div>
            <Footer />

        </>
    )
}



export default PostView

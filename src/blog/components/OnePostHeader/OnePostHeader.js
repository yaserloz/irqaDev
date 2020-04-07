import React from 'react'
import { Header} from 'semantic-ui-react';
import './OnePostHeader.css'
import { Link } from 'react-router-dom';



const months = ["January", "FEBRUARY", "MARCH","April", "MAY", "JUNE", "July", "August", "September", "October", "November", "December"];

const OnePostHeader = ({article_title, article_author, article_date}) => {

    console.log(article_title, article_author, article_date);
    const postDate = new Date(article_date)

    return (
        <div className='headerWrapper'>
            <div className="post-info-wrapper">
                <Link   to={`/`}><button className='post-info when-link'>←&nbsp;view all posts</button></Link>
            </div>
            

            <Header  as='h2' icon textAlign='center'>
                <Header.Content>{article_title}</Header.Content>

            </Header>
            <p className='blog-post-date'>{`${months[postDate.getMonth()]} ${postDate.getDay()}, ${postDate.getFullYear()}`}</p> 
            <p className='blog-post-author'>Author: {article_author}</p>
        </div>
    )
}



export default OnePostHeader

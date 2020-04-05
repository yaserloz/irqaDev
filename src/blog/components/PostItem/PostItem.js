import React from 'react'
import './Post.css';
import { Link } from 'react-router-dom';


const months = ["January", "FEBRUARY", "MARCH","April", "MAY", "JUNE", "July", "August", "September", "October", "November", "December"];


const PostItem = ({article_title, article_date, article_author, id}) => {

    const postDate = new Date(article_date)
    return (
        <div className='blog-post'>
            <h1 className='blog-title'>{article_title}</h1>
                <p className='blog-post-date'>{`${months[postDate.getMonth()]} ${postDate.getDay()}, ${postDate.getFullYear()}`}</p> 
                <p className='blog-post-author'>Author: {article_author}</p>
            <p className=' blog-post-description'>Article body, here we put some description </p>
            <Link   to={`/post/${id}`}><button className='blog-post-button'>Continue Reding -></button></Link>
        </div>
    )
}
export default PostItem

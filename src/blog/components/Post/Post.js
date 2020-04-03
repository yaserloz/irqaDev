import React from 'react'
import './Post.css';

const Post = ({title, date, author}) => {
    return (
        <div className='blog-post'>
            <h1 className='blog-title'>{title}</h1>
                <p className='blog-post-date'>{date}</p> 
                <p className='blog-post-author'>Author: {author}</p> 
            
            <p className=' blog-post-description'>Article body, here we put some description </p>
            <button class='blog-post-button'>Continue Reding -></button>
        </div>
    )
}
export default Post

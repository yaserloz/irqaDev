import React from 'react'
import './Post.css';

const Post = ({title, date}) => {
    return (
        <div className='blog-post'>
            <h1 className='blog-title'>{title}</h1>
            <p>{date}</p>
            <p>Article body, here we put some description </p>
            <button>Continue Reding -></button>
        </div>
    )
}


export default Post

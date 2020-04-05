import React from 'react'

import './BlogHeader.css'
const BlogHeader = props => {
    return (
        <div className='headerWrapper'>
            {props.children}
        </div>
    )
}



export default BlogHeader

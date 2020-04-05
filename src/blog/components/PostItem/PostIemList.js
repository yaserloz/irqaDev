import React from 'react'
import PostItem from './PostItem'
import Messages from '../Messages'
const PostIemList = ({posts}) => {

    return (
        <div>
             {
                posts.length 
                ?     
                posts.map( post => {
                            return <PostItem key={post.id} {...post} />
                        })

               : <Messages text="No Posts" />
            }

        </div>
    )
}



export default PostIemList

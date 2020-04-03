import React from 'react'
import Post from './Post'
import Messages from '../Messages'
const PostList = ({posts}) => {
    const months = ["January", "FEBRUARY", "MARCH","April", "MAY", "JUNE", "July", "August", "September", "October", "November", "December"];

    return (
        <div>
             {
                posts.length 
                ?     
                posts.map( post => {
                    const postDate = new Date(post.article_date)
                            return <Post key={post.id}
                             title={post.article_title}
                             date={`${months[postDate.getMonth()]} ${postDate.getDay()}, ${postDate.getFullYear()}`}
                             author={post.article_author}
                            />
                        })

                    
               : <Messages text="No Posts" />
            }

        </div>
    )
}



export default PostList

import React from 'react'
import Post from './Post'
import Messages from '../Messages'
const PostList = ({posts}) => {
    return (
        <div>
             {
                posts.length 
                ?     
                posts.map( post => {
                    console.log(post)
                            return <Post key={post.id}
                             title={post.article_title}
                             date={post.article_date}
                             author={post.article_author}
                            />
                        })

                    
               : <Messages text="No Posts" />
            }

        </div>
    )
}



export default PostList

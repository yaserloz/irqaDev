import React from 'react'
import Tag from './Tag'
import './Taglist.css'
const TagList = props => {

    const tags =[
        {name:'php'},
        {name:'mysql'},
        {name:'react'},
        {name:'c#'},
    ]
    return (
        <div className='tagList-container'>
            {
             tags.map(tag => {
                 return <Tag {...tag} />
             })   
            }
        </div>
    )
}



export default TagList

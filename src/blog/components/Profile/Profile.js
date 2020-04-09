import React from 'react'
import './Profile.css'
const Profile = props => {
    return (
        <div className='profile-content-wrapper'>
            <img className="circle-profile" sizes="(max-width: 479px) 55vw, (max-width: 767px) 58vw, (max-width: 991px) 97.296875px, 126px" src="https://yaz-fr.com/pp.png"></img>
        
            <div class="sidebar-copy w-richtext">
                <h1>Alqaisi Yasir</h1>
                <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place.</p>
            </div>
        </div>
    )
}


export default Profile

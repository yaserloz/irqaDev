import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div>
            <footer class="footer">
                <div class="w-container">
                    <div class="navigation-bar">


                <Link className="nav-link"  to={'/'}>Home</Link>
                <Link className="nav-link"  to={'/'}>all posts</Link>
                <Link className="nav-link"  to={'/about'}>about</Link>
                <Link className="nav-link"  to={'/contact'}>contact</Link>
                <a className="float-right nav-link" href="#header">↑&nbsp;Go to top</a>

                    </div>
                </div>
            </footer>
        </div>
    )
}



export default Footer

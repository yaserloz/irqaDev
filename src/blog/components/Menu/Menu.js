import React,  {useState} from 'react'
import './Menu.css'
const Menu = props => {

    const [menuIsOpen, toggelMenu] = useState(false)

    const menuToggelHandler = event => {
        toggelMenu(!menuIsOpen);
    }
    return (
        <div onClick={menuToggelHandler} className='dropdown-wrapper w-dropdown'>
            <div className={`dropdown-menu w-clearfix w-dropdown-toggle ${menuIsOpen ? 'w--open' : null}`}>
                <img className="menu-icon" height="12" src="http://uploads.webflow.com/56d0c9f9db0bfb1112107afe/56d0fee6e867b1c137682a4e_menu.svg" width="12" />
                    <div className="menu-text">Menu</div>
            </div>

            <nav className={`menu-list w-dropdown-list ${menuIsOpen ? 'w--open' : null}`}>
                <a  className="home menu-link w-dropdown-link w--current" href="/">Home</a>
                <a  className="menu-link w-dropdown-link" href="/about">About</a>
                <a  className="menu-link w-dropdown-link" href="/contact">Contact</a>
            </nav>
        </div>
    )
}



export default Menu

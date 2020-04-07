import React,  {useState} from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
const Menu = ({page}) => {
    const [menuIsOpen, toggelMenu] = useState(false)

    const menuToggelHandler = event => {
        toggelMenu(!menuIsOpen);
    }
    return (
        <div onClick={menuToggelHandler} className='menu-dropdown-wrapper w-dropdown'>
            <div className={`menu-dropdown-menu w-clearfix w-dropdown-toggle ${menuIsOpen ? 'w--open' : null}`}>
                <img alt='burger bar' className="menu-icon" height="12" src="http://uploads.webflow.com/56d0c9f9db0bfb1112107afe/56d0fee6e867b1c137682a4e_menu.svg" width="12" />
                    <div className="menu-text">Menu</div>
            </div>

            <nav className={`menu-list w-dropdown-list ${menuIsOpen ? 'w--open' : null}`}>
                <Link className={`home menu-link w-dropdown-link ${page == 'home' ? 'w--current' : '' }`}  to={'/'}>Home</Link>
                <Link className={`home menu-link w-dropdown-link ${page == 'about' ? 'w--current' : '' }`} to={'/about'}>About</Link>
                <Link className={`home menu-link w-dropdown-link ${page == 'contact' ? 'w--current' : '' }`}  to={'/contact'}>Contact</Link>
            </nav>
        </div>
    )
}



export default Menu

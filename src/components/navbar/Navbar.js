import React, { useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo.png';
import { CgMenuLeft, } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [navbarSticky, setNavbar] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    let path = "#";
    
    return (
        <nav className={ navbarSticky ? "container navbar active" : "container navbar"}>
            <div className= "navbar-left">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div> 
                <div className="logo-info">
                    <h4>JAMES SPADER</h4>
                    <h4><span>PHOTOGRAPHY</span></h4>
                </div>
            </div>
            <div className="navbar-right">
                {
                    showMenu ?  <FaTimes onClick={toggleMenu}  className="close" size={30} color="#000"/> :  <CgMenuLeft className="menu" size={33} onClick={toggleMenu}  />
                }
                <div id={showMenu ? "circle-show" : "circle-hide"}>                    
                </div>
                <menu className="menu">
                    <ul className= "menu-links" id={ showMenu ? "nav-menu-link-show" : "nav-menu-link-hide" }>
                        <li><a href={path}>Home</a></li>
                        <li><a href={path}>Gallery</a></li>
                        <li><a href={path}>Latest</a></li>
                        <li><a href={path}>Contact</a></li>
                    </ul>
                </menu>    
            </div>
        </nav>
    )
}

export default Navbar
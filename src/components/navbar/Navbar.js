import React, { useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo.png';
import { CgMenuLeft, } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    let path = "#";
    
    return (
        <nav className="container navbar">
            <div className= "navbar-left">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div> 
                <div className="logo-info">
                    <h4>JAMES SPADER</h4>
                    <h4><span>PHOTOGRAPHY</span></h4>
                </div>
            </div>
            <div className="navbar-right" onClick={toggleMenu} >
                {
                    showMenu ?  <FaTimes className="close" size={30} color="#000"/> :  <CgMenuLeft size={33}  />
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
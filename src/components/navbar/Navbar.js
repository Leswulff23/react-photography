import React, { useState} from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo.png';
import { CgMenuLeft } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { FaTwitter, FaPinterestP } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

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
        <div className="container">
            <div className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="logo-info">
                        <a href={path}><h4>JAMES SPADER</h4></a>
                        <a href={path}><h4><span>PHOTOGRAPHY</span></h4></a>
                    </div>
                </div>
                {showMenu && (
                <nav>
                    <ul>
                        <li><a href={path}>Home</a></li>
                        <li><a href={path}>Gallery</a></li>
                        <li><a href={path}>Latest</a></li>
                        <li><a href={path}>Contact</a></li>
                        <div className="nav-socials">
                            <li><a><FaTwitter size={40} color="#CE1924" /></a></li>
                            <li><a><AiFillInstagram size={40} color="#CE1924"/></a></li>
                            <li><a><FaPinterestP size={40} color="#CE1924" /></a></li>
                        </div>
                    </ul>
                
                    <p class="back-text">MENU</p>
                </nav>
                )}
                {
                    showMenu ? <FaTimes id="menu-close"  onClick={toggleMenu}  className="close-icon" size={30} color="#000"/> : <CgMenuLeft id="menu-open" onClick={toggleMenu} className="menu-icon" size={30}  />
                }
            </div>
        </div>
    )
}

export default Navbar
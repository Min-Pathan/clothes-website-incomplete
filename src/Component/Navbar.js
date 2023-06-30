import React, { useState } from "react";
import "./Navbar.css";
import {FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa';
import { MdLogin } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
        <div className='logo'>
           <h2><span>M</span>r.<span>D</span></h2>
        </div>  
        {/* 2nd menu part       */}
        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Shop</a>
                </li>        
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </div>
        {/* 3rd part */}
        <div className='social-media'>
            {/* <ul className='social-media-desktop'>
                <li>
                    <a href=''><FaFacebookSquare className='facebook'/></a>
                </li>
                <li>
                    <a href=''><FaYoutubeSquare className='youtube'/></a>
                </li>
                <li>
                    <a href=''><FaInstagramSquare className='instagram'/></a>
                </li>
            </ul> */}
            <ul className='social-media-desktop'>
                <li>
                    <a href=''><MdLogin className='login'/></a>
                </li>
                <li>
                    <a href=''><VscAccount className='sign up'/></a>
                </li>
                <li>
                     <button><BsFillCartCheckFill className='addTocart'/></button>
                </li>
            </ul>
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
                </a>
            </div>
        </div>
    </nav>
    {/* hero section */}
    {/* <section className='hero-section'>
        <p>Welcome to</p>
        <h1>Mr.D</h1>
    </section> */}
      {/* home 
      shop
      account
      contact */}
    </>
  )
}

export default Navbar

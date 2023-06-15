import React from "react";
import Logo from '../resources/freelancelogowhite.png'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    return(

        <header className="hdr" id="headeris">
      <a href="/" className="logo">
        <img className="logo-img" src={Logo} alt="company logo" />
      </a>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
         
          <li>
            <a href="#menu" id="servicer">Menuer</a>
          </li>
          <li>
            <a href="#contact" id="kont">Kontakt</a>
          </li>
          <li>
          <a href="tel:86174456" className="active">Ring nu</a>
          </li>
        </ul>
       
      </nav>
       
    </header>
    );
};

export default Navbar;
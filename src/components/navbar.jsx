import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const NavBar = () => {
    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const bg = window.scrollY < 90 ? "transparent" : "rgba(128,128,128,.9)";
      
            setBgColor(bg)
          });
    })

    return (
        <nav class="navbar navbar-expand-sm navbar-light cus-menu" id="menu-area" style={{backgroundColor: bgColor}} >

            <div className='logo nav-brand'>
                <Link to='/menu'>
                    <img src="/logo11.jpg" alt="" />
                </Link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-list" id="navbarNav">
                <ul class="navbar-nav nav-item-list topBotomBordersOut">
                    <li class="nav-item list-item">
                        <Link to="/"> HOME</Link>
                    </li>
                    <li class="nav-item list-item">
                        <Link to="/menu"> MENU</Link>
                    </li>
                    <li class="nav-item list-item">
                        <Link to="/about"> ABOUT</Link>
                    </li>
                    <li class="nav-item list-item">
                        <Link to="/contact"> CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;

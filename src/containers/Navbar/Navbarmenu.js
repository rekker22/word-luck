import React from 'react';
import './Navbar.css';

export function Navbarmenu()
{
    return(
        <div className="navbar-menu">
            <a href="/">Home</a>
            <a href="/">Game</a>
            <a href="/login">LogIn</a>
            <a href="/register">Register</a>
        </div>
        )
}
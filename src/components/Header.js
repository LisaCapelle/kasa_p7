import React from 'react';
import { NavLink } from 'react-router-dom';


import logo from '../assets/images/LOGO.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="Header">
        <div className="Header__logo-wrap">
            <img className="Header__logo" src={logo} alt="kasa logo"/>
        </div>
        <nav className="Header__nav">
            <NavLink to = "/" className={({ isActive} ) => isActive? 'activeLink' : ''}>Accueil</NavLink>
            <NavLink to = "./about" className={( { isActive} ) => isActive? 'activeLink' : ''}>A Propos</NavLink>
        </nav>
    </header>
  )
}
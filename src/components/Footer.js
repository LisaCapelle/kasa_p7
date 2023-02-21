import React from 'react';

import logo from '../assets/images/footerLOGO.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
        <div className="Footer__logo-wrap">
            <img className="Footer__logo" src={logo} alt="company logo"/>
        </div>
        <p className="Footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
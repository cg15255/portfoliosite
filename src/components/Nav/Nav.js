import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header>
            <div className="mobile-nav-button">
                <div className="mobile-nav-button__line"></div>
                <div className="mobile-nav-button__line"></div>
                <div className="mobile-nav-button__line"></div>
            </div>
            <a href="/" className="site-logo">CG</a>
            <nav className="mobile-menu">
                <ul className="nav-right">

                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
      </header>
    );
}

export default Nav;
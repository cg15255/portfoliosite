import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({line1Class, line2Class, line3Class, navMenuClass, toggleMenuHandler}) => {
    return(
        <header>
            <div className="mobile-nav-button" onClick={toggleMenuHandler}>
                <div className={line1Class}></div>
                <div className={line2Class}></div>
                <div className={line3Class}></div>
            </div>
            <a href="/" className="site-logo">CG</a>
            <nav className={navMenuClass}>
                <ul className="nav-right">
                    <li><Link to="/" onClick={toggleMenuHandler}>Home</Link></li>
                    <li><Link to="/projects" onClick={toggleMenuHandler}>Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleMenuHandler}>Contact</Link></li>
                </ul>
            </nav>
      </header>
    );
}

export default Nav;
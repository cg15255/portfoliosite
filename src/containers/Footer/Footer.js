import React from 'react';
import './Footer.css';

const Footer = ({footerText}) => {
    return(
        <footer>
            <small>&copy; {footerText}</small>
        </footer>
    );
}

export default Footer;
import React from 'react';

const Footer = ({footerText}) => {
    return(
        <footer>
            <small>&copy; {footerText}</small>
        </footer>
    );
}

export default Footer;
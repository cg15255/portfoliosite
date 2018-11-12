import React from 'react';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import { Route } from 'react-router-dom';

import './Header.css'

const Header = ({heroHeaderText, projectsPageHeader, contactPageHeader, toggleMenuHandler, navMenuClass, line1Class, line2Class, line3Class}) => {
    return(
        <div>
            <Nav 
            toggleMenuHandler={toggleMenuHandler} 
            line1Class={line1Class} 
            line2Class={line2Class} 
            line3Class={line3Class}
            navMenuClass={navMenuClass} 
            />
            <Route 
                path="/" exact  
                render={() => <Hero 
                    classes="body-container hero-text" 
                    innerText={heroHeaderText}
                />}        
            />
            <Route 
                path="/projects" 
                render={() => <Hero 
                    classes="hero-text hero-text-underlined" 
                    innerText={projectsPageHeader}
                />}        
            />
            <Route 
                path="/contact" 
                render={() => <Hero 
                    classes="hero-text hero-text-underlined" 
                    innerText={contactPageHeader}
                />}        
            />
        </div>        
    );
}

export default Header;
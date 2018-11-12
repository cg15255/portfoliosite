import React from 'react';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import { Route } from 'react-router-dom';

const Header = ({heroHeaderText, projectsPageHeader, contactPageHeader}) => {
    return(
        <div>
            <Nav />
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
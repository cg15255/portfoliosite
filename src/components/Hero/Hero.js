import React from 'react';
import { Route } from 'react-router-dom';

import SocialIcons from '../SocialIcons/SocialIcons';

import './Hero.css'

const Hero = ({classes, innerText}) => {
    return(
        <section className={classes}>
            <div className="body-container">
                <h1>{innerText}</h1>
                <Route path="/Contact" exact component={SocialIcons} />
            </div>
        </section>
    );
}

export default Hero;
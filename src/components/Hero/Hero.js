import React from 'react';

const Hero = ({classes, innerText}) => {
    return(
        <section className={classes}>
            <div className="body-container">
                <h1>Testing this works {innerText}</h1>
            </div>
        </section>
    );
}

export default Hero;
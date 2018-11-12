import React from 'react';
import { Link } from 'react-router-dom'

const CallToAction = ({callToActionText, buttonText}) => {
    return(
        <section className="banner">
            <h1>{callToActionText}</h1>
            <Link className="btn btn-default" to="/contact">
                {buttonText} &gt;
            </Link>       
        </section>
    );
}

export default CallToAction;
import React from 'react';
import { Route } from 'react-router-dom';

import SuccessMessage from '../SuccessMessage/SuccessMessage';

import './ContactPageBody.css';

const ContactPageBody = ({successClosed, closeHandler}) => {
    return (
        <section className="body-container" id="contact-container">
            <Route path='/contact/success' exact render={() => <SuccessMessage 
            successClosed={successClosed} 
            closeHandler={closeHandler}  
            />} />
            <form name="contact" method="POST" id="contact-form" action="/contact/success">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" className="form-control" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" className="form-control" id="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <input type="submit" className="btn btn--contact-form" value="Send!" />
            </form>
        </section>
    )
}

export default ContactPageBody;

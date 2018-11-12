import React from 'react';

const ContactPageBody = () => {
    return (
        <section class="body-container" id="contact-container">
            <form name="contact" method="POST" id="contact-form" netlify>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input name="name" type="text" class="form-control" id="name" />
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input name="email" type="email" class="form-control" id="email" />
                </div>

                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <input type="submit" class="btn btn--contact-form" value="Send!" />
            </form>
        </section>
    )
}

export default ContactPageBody;

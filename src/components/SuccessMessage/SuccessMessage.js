import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({successClosed, closeHandler}) => {
    return (
        <div className="formSuccess" style={successClosed} onClick={closeHandler}>
            <h1><i className="fas fa-check-circle"></i> Success</h1>
            <h5>Thanks for the inquiry, I will be in touch shortly!</h5><i className="fas fa-times"></i>
        </div>
    )
}

export default SuccessMessage;
import React from 'react';

const BlockText = ({headline, bodyText}) => {
    return(
        <div>
            <h4>{headline}</h4>
            <p>{bodyText}</p>
        </div>
    );
}

export default BlockText;
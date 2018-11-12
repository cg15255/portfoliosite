import React from 'react';
import BlockText from '../BlockText/BlockText';

const HomeBody = ({wordpressData}) => {
    return(
        <section className="body-container services">
            <h3>About</h3>
            <p>{wordpressData.about_section_body_text}</p>
            
            <h3>Services</h3>
            <BlockText headline={wordpressData.header_1} bodyText={wordpressData.header_1_body_text} />
            <BlockText headline={wordpressData.header_2} bodyText={wordpressData.header_2_body_text} />
            <BlockText headline={wordpressData.header_3} bodyText={wordpressData.header_3_body_text} />           
        </section>        
    );
}

export default HomeBody;
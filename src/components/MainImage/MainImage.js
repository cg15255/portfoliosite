import React from 'react';
import './MainImage.css';

const MainImage = ({imageURL}) => {
    const styles = {
        background: `url("${imageURL}") no-repeat center`,
        backgroundSize: 'cover'
    }
    return(
        <section className="main-image-wrapper">
            <div className="main-image" style={styles}></div>
        </section>
    );
}

export default MainImage;
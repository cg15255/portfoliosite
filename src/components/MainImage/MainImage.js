import React from 'react';
import './MainImage.css';

const MainImage = ({imageURL}) => {
    const styles = {
        background: `url("${imageURL}") no-repeat -29px -60px`,
        backgroundSize: 'cover'
    }
    return(
        <section className="main-image-wrapper">
            <img className="mainImage" src={imageURL} />
            {/* <div className="main-image" style={styles}></div> */}
        </section>
    );
}

export default MainImage;
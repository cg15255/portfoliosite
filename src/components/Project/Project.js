import React from 'react';
import './Project.css';

const Project = ({title, description, link, classes, imageURL}) => {
    const styles = {
        background: `url('${imageURL}') no-repeat center top`,
        backgroundSize: 'cover'
    }

    return (
        <div className="project-wrap">
            <div className="project">
                <a href={link} className={classes} style={styles}>
                    <span className="sr-only">{title}</span>
                </a>
            </div>

            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Project;
import React from 'react';
import Project from '../Project/Project';

const ProjectsBody = ({projects}) => {
    const myProjects = projects.map(project => {
        return <Project 
            title={project.title.rendered}
            description={project.acf.description} 
            link={project.acf.project_link}
            classes={project.acf.classes}
            imageURL={project.acf.project_image}
            key={project.id}            
        />
    });
    return(
        <section className="body-container projects">
            <h3>Recent Works</h3>
            {myProjects}
      </section>      
    );
}

export default ProjectsBody;
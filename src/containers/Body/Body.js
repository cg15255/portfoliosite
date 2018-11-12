import React from 'react';
import HomeBody from '../../components/HomeBody/HomeBody';
import ProjectsBody from '../../components/ProjectsBody/ProjectsBody';
import ContactPageBody from '../../components/ContactPageBody/ContactPageBody';
import { Route } from 'react-router-dom';

const Body = ({wordpressData, projects, successClosed, closeHandler}) => {
    return(
        <div>
            <Route 
                path="/" exact  
                render={() => <HomeBody wordpressData={wordpressData}/>}        
            />
            <Route path="/projects" exact render={() => <ProjectsBody projects={projects} />} />
            <Route path="/contact" render={() => <ContactPageBody 
            successClosed={successClosed} 
            closeHandler={closeHandler}
            />} />
        </div>
    );
}

export default Body;
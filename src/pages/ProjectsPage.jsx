import { useState, useEffect } from 'react';
import Card from '../components/resumeProjectsCard';
import axios from 'axios';
import '../assets/css/projetcs.css';



const ProjectsPage = ()=>{
    const [projects, setProjects]= useState([])

    useEffect(()=>{
        axios.get('/src/data/projects.json')
            .then(response => {
                const sortedProjects = response.data.sort((a, b) => b.id - a.id);
                setProjects(sortedProjects);
            })
            .catch(error => console.error('Error fetching projects data', error));
    });


    return(
        <div className='projectsContainer'>
            <div className='projectsHeader'>
                <h3>My completed projects</h3>
            </div>
                {projects.map(project=>(
                    <Card key={project.id}>
                        <div className='projectText'>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                        <div className='projectPhoto'>
                            <img src={project.photo}/>
                        </div>
                    </Card>
                ))}
        </div>
    )
}

export default ProjectsPage;
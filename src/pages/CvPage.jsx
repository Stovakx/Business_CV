import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/resumeProjectsCard';

import '../assets/css/cvpage.css';


const CvPage = ()=>{
    const [jobs, setJobs] = useState([]);
    const [educations, setEducations] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        axios.get('/src/data/jobs.json')
            .then(response => {
                const sortedJobs = response.data.sort((a, b) => b.id - a.id);
                setJobs(sortedJobs);
            })
            .catch(error => console.error('Error fetching jobs data', error));

        axios.get('/src/data/education.json')
            .then(response => setEducations(response.data))
            .catch(error => console.error('Error fetching education data:', error));

        axios.get('/src/data/skills.json')
            .then(response=> setSkills(response.data))
            .catch(error => console.error('Error fetching skills data:', error));
    }, []);


    return(
       <div className="resumeContainer">
            <div className="personalInformations">
                <h2>Joe Mama</h2>
                <p><strong>Birth date:</strong> 20.12.1984</p>
                <div className="emailTelephoneDiv">
                    <p>email@exmaple.com</p>
                    <p>+420 746 123 000</p>
                </div>
            </div>
            <div className="experience">
                <div className="headerExp">
                    <h4>Experience</h4>
                    <a><button className="downloadBtn">Download cv</button></a>
                </div>
                {jobs.map(job =>(
                    <Card key={job.id}>
                        <div className='jobInfo'>
                            <h4>{job.title}</h4>
                            <div>
                                <p>{job.company}</p>
                                <p>{job.date}</p>
                            </div>
                        </div>
                        <div className='jobDescription'>
                            <p>{job.description}</p>
                            {job.skills.length > 0 && (
                                <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
            <div className='education'>
                <div className='headerEducation'>
                    <h4>Education</h4>
                </div>
                {educations.map(education =>(
                    <Card key={education.id}>
                        <div className="schoolInfo">
                            <h4>{education.name}</h4>
                            <div>
                                <p>{education.degree}</p>
                                <p>{education.date}</p>
                                <p>{education.location}</p>
                            </div>
                        </div>
                        <div className='educationDescription'>
                            <p>{education.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
            <div className='skills'>   
                <Card>
                    <div className='skillSet'>
                        {skills.map((item, index) => (
                        <div key={index}>
                            <h3>{Object.keys(item)[0]}</h3>
                            <ul>
                                {item[Object.keys(item)[0]].map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                </Card>

            </div>
                    
       </div>
    )
}

export default CvPage;
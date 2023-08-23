import {FaLinkedinIn, FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/images/profilephoto.jpg';
import '../assets/css/main.css';


const IndexPage = ()=>{


    return(
        <div className='indexContainer'>
            <div className='leftSide'></div>
            <div className='indexCard'>
                <div className='mainContentCard'>
                    <img className='profilePhoto' src={ProfilePicture}/>
                    <h4>First name <br/> Last Name</h4>
                    <p>Profesion name</p>
                    <div className='socSitesBox'>
                        <a href=''><FaLinkedinIn /></a>
                        <a href=''><FaFacebookSquare /></a>
                        <a href=''><FaInstagram /></a>
                        <a href=''><FaTwitterSquare /></a>
                    </div>
                </div>
            </div>
            <div className='rightSide'>
                <h1>Hello</h1>
                <h5>Here's who I am & what I do</h5>
                <div className='buttonGroup'>
                    <Link to='/resume'>
                        <button className='resumeBtn'>Resume</button>
                    </Link>
                    <Link to='/projects'>
                        <button className='projectsBtn'>Projects</button>
                    </Link>
                </div>
                <div className='textDiv'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>

        </div>
    )
}
export default IndexPage;
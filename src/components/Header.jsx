import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsiveNav");
    }

    return (
        <header>
            
            <h3>Business portfolio</h3>
            <div className='headerContainer'>
                <nav ref={navRef}>
                    <Link to='/'>Home</Link>
                    <Link to='/resume'>Resume</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                    <button className='navCloseBtn navBtn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className='navBtn' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
  };
  
export default Header;
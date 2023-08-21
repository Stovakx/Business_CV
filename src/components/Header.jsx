import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../assets/css/navbar.css';

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
                    <a href='/'>Home</a>
                    <a href='/resume'>Resume</a>
                    <a href='/projetcs'>Projects</a>
                    <a href='/contact'>Contact</a>
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
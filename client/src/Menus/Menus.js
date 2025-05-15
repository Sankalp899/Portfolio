import React from 'react';
import './Menus.css';
import { FcHome,FcAbout } from "react-icons/fc";
import { FaFileArchive } from "react-icons/fa";
import { FcBiotech,FcBullish,FcBusinessContact} from "react-icons/fc";
import profilePic from "../assets/images/profile.jpg";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom>
        <div className="navbar-profile-pic">
        <img src={profilePic} 
        alt="PROFILE PIC"/>
        </div>
        </Zoom>
        
        <Slide left>
        <div className="Nav-items">
            <div className="nav-item">
                <div className="nav-link">
                 <Link to="home" 
                 spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                 <FcHome/>  HOME
                 </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                    <Link to="about" 
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                  <FcAbout/>  ABOUT
                  </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                   <Link to="education"
                   spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                   <FaFileArchive />  EDUCATION
                   </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                    <Link to="techstack"
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                    <FcBullish/> TECHSTACK
                    </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                    <Link to="project"
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                  <FaFileArchive/>  PROJECTS
                  </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="contact"
                spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                <FcBusinessContact/> 
                CONTACT
                </Link>
                </div>
            </div>
        </div>
        </Slide>
        </>
    ) : (
    
    <>
    <div className="Nav-items">
            <div className="nav-item">
                <div className="nav-link">
                 <Link to="home" 
                 spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                 <FcHome/>
                 </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                   <Link to="about" 
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                  <FcAbout/>
                  </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="education"
                   spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}
                 >
                   <FaFileArchive />
                   </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                  <Link to="project"
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                    <FcBiotech/> 
                    </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="techstack"
                    spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                  <FcBullish /> 
                  </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <Link to="contact"
                spy={true} 
                 smooth={true} 
                 offset={-100} 
                 duration={100}>
                <FcBusinessContact/> 
                </Link>
                </div>
            </div>
        </div>
    </>

    )}
    </>
  );
};

export default Menus;
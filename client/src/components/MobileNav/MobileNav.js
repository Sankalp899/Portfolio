import React,{useState} from 'react'
import'./MobileNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FcHome,FcAbout } from "react-icons/fc";
import { FaFileArchive } from "react-icons/fa";
import { FcBullish,FcBusinessContact} from "react-icons/fc";
import { Link } from 'react-scroll';



const MobileNav = () => {
    const[open,setOpen] = useState(false)

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    //handle menu clicks>
    const handleMenuClick = () =>{
        setOpen(false);
    }
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open 
            ? (<AiOutlineMenuFold 
                size={30} 
                className="mobile-nav-icon" 
                onClick={handleOpen} 
                />) 
            : 
            (<GiHamburgerMenu 
            size={30} 
            className="mobile-nav-icon" 
            onClick={handleOpen}
            />)}
            <span className="mobile-nav-title">My Portfolio App</span>
    </div> 
    {open &&(
        <div className="mobile-nav-menu">
        <div className="Nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                         <Link to="home" 
                         spy={true} 
                         smooth={true} 
                         offset={-100} 
                         duration={100}
                         onClick={handleMenuClick}
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
                         onClick={handleMenuClick}
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
                         onClick={handleMenuClick}
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
                         duration={100}
                         onClick={handleMenuClick}>
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
                         duration={100}
                         onClick={handleMenuClick}>
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
                         duration={100}
                         onClick={handleMenuClick}>
                        <FcBusinessContact/> 
                        CONTACT
                        </Link>
                        </div>
                    </div>
                </div>
    </div>
    )}
    </div>
    </>
  )
}

export default MobileNav
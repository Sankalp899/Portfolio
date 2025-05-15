import React from 'react'
import profilePic from "../../assets/images/profile.jpg";
import './About.css';
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <>
     <Bounce>
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 about-img">
                 <img src={profilePic} 
                        alt="PROFILE PIC"/>
            </div>
            <div className="col-md-6 about-content">
                <h1>About Me</h1>
             <p>
                Hello! I'm a passionate and dedicated Full Stack Developer with expertise in both front-end and back-end technologies. I specialize in building scalable web applications using modern frameworks like React, Node.js, and Express.

                With a strong foundation in JavaScript, HTML, and CSS, I enjoy creating user-friendly interfaces and efficient backend systems. I have experience working with REST APIs, MongoDB, MySQL, and various other tools essential for full-stack development.
                I’m always eager to learn new technologies and contribute to meaningful projects. Whether it's solving complex problems or collaborating with a team, I strive to deliver clean, maintainable, and high-quality code.
                Let’s build something amazing together!  
                <ul>
                <li> 💻 Languages: JavaScript, HTML5, CSS3  </li>
                <li> 🧰 Tools & Frameworks: React, Node.js, Express, MongoDB, MySQL, Git, VS Code </li>
                <li>🚀 Interests: Web Development, UI/UX, Problem Solving, Performance Optimization </li>
                </ul>
            </p>   
            </div>
        </div>
    </div>
    </Bounce>
    </>
  )
}

export default About
import React from 'react';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.txt'; // Consider renaming to resume.pdf
import './Home.css';
import Slide from 'react-reveal/Slide';

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Slide right>
            <h2>Hi 🙌 I am a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "MERN Stack Developer!",
                    "React Native Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Slide>

          <Slide bottom>
            <div className="home-buttons">
              <a 
              className="btn btn-hire" 
              href="https://api.whatsapp.com/send?phone=9321521461"
              rel="noreferrer"
              target="_blank"
              >
                Hire Me
                </a>
              <a className="btn btn-cv" href={Resume} download="Your_Name_Resume.txt">
                My Resume
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Home;

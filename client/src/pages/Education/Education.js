import React from 'react'
import './Education.css'
import Wobble from 'react-reveal/Wobble';
import Shake from 'react-reveal/Shake';

const Education = () => {
  return (
    <>
    <div className="eduex" id="education">
    <div className="edu">
    <h2>🎓 My Education</h2>
    </div>
    <Wobble>

  <div class="timeline">
    <div class="timeline-item left">
      <div class="timeline-content">
        <h3>B.Sc. Information Technology</h3>
        <p>Mumbai University (2019- 2022)</p>
        <p>CGPA: 9.9 | </p>
      </div>
    </div>
    <div class="timeline-item right">
      <div class="timeline-content">
        <h3>12th Science</h3>
        <p>Patkar varde College (2017 - 2019)</p>
        <p>PCMB Group | Scored 60%</p>
      </div>
    </div>
  </div>
  </Wobble>


<Shake>
<div className="edu2">
  <h2>🏅 My Certificates</h2>
  </div>
  <div class="certificates">
    <div class="cert-grid">
      <div class="cert-card">
        <h3>Full Stack web developer</h3>
        <p>Issuer: Udemy</p>
        <p>Date: </p>
        <a href="#">View Certificate</a>
      </div>
      <div class="cert-card">
        <h3>JavaScript Mastery</h3>
        <p>Issuer: Code with Harry</p>
        <p>Date: march 2025</p>
        <a href="#">View Certificate</a>
      </div>
    </div>
  </div>
  </Shake>
  </div>
    </>
  );
};

export default Education; 
import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  return (
    <>
      <MobileNav />
        <Layout />
        <div className="container">
          <About/>
          <Education/>
          <Techstack/>
          <Projects/>
          <Contact/>
        </div>
        <div className="footer mb-3 ms-3">
         <Tada>
          <h4 className="text-center">
            MADE WITH SANKALP2025
          </h4>
          </Tada>
        </div>
        <ScrollToTop smooth color="white" style={{backgroundColor:"#1e1e2c", borderRadius:"80px", }}/>
    </>
  );
}

export default App;

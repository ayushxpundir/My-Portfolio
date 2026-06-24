import { useState, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Stack from './Components/Stack'
import About from './Components/About'
import Projects from './Components/Projects'
import AllProjects from './Components/AllProjects'
import AllExperience from './Components/AllExperience'
import AllCertifications from './Components/Allcertifications'
import Experience from './Components/Experience'
import Links from './Components/Links'
import Certifications from './Components/Certifications'
import GitHub from './Components/GitHub'
import Footerwork from './Components/Footerwork'
import Topheader from './Components/Topheader'
import Connect from './Components/Connect'
import Education from './Components/Education'

// Self-contained Loader component to guarantee no reference errors
function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-spinner"></div>
    </div>
  );
}

function InstantStartAtTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  useEffect(() => {
    const savedY = sessionStorage.getItem("homeScrollY");

    if (savedY !== null) {
      window.scrollTo(0, parseInt(savedY, 10));
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  return (
    <>
      <Header />
      <About />
      <Links />
      <GitHub />
      <Stack />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Connect />
    </>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {showLoader && <Loader />}

      {!showLoader && <div className="reveal-curtain" />}

      <BrowserRouter>
        <InstantStartAtTop />

        {/* Visible on all pages */}
        <Topheader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/experience" element={<AllExperience />} />
          <Route path="/certifications" element={<AllCertifications />} />
        </Routes>

        {/* Footer visible on all pages */}
        <Footerwork />
      </BrowserRouter>
    </>
  );
}

export default App;
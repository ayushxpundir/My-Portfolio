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
import Certifications from './Components/Certifications'
import GitHub from './Components/GitHub'
import Footerwork from './Components/Footerwork'
import Topheader from './Components/Topheader'
import Connect from './Components/Connect'
import Education from './Components/Education'

// Self-contained Loader component
function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-spinner"></div>
    </div>
  );
}

// Resets scroll position instantly to top on route change
function InstantStartAtTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ===========================================================
   🔄 GLOBAL SCROLL OBSERVER WATCHER (GLITCH-FREE)
   =========================================================== */
function ScrollRevealWatcher({ showLoader }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (showLoader) return;

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname, showLoader]);

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
      <div className="reveal-on-scroll"><Header /></div>
      <div className="reveal-on-scroll"><About /></div>
      <div className="reveal-on-scroll"><Stack /></div>
      <div className="reveal-on-scroll"><Experience /></div>
      <div className="reveal-on-scroll"><Projects /></div>
      <div className="reveal-on-scroll"><Certifications /></div>
      <div className="reveal-on-scroll"><Education /></div>
      <div className="reveal-on-scroll"><Connect /></div>
      <div className="reveal-on-scroll"><GitHub /></div>
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

      <BrowserRouter>
        <InstantStartAtTop />
        <ScrollRevealWatcher showLoader={showLoader} />

        {/* Global Nav Bar - Fades in softly on initial app entry only */}
        <div className={!showLoader ? "first-load-fade" : ""} style={{ opacity: showLoader ? 0 : 1 }}>
          <Topheader />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<div key="projects-page" className="reveal-on-scroll"><AllProjects /></div>} />
          <Route path="/experience" element={<div key="experience-page" className="reveal-on-scroll"><AllExperience /></div>} />
          <Route path="/certifications" element={<div key="certs-page" className="reveal-on-scroll"><AllCertifications /></div>} />
        </Routes>

        <ContextAwareFooter />
      </BrowserRouter>
    </>
  );
}

function ContextAwareFooter() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="reveal-on-scroll">
      <Footerwork />
    </div>
  );
}

export default App;
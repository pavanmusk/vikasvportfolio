import React from 'react'
import { BrowserRouter as Router, Routes,Navigate, Route, Link } from 'react-router-dom';
import Contact from './ContactComponent/Contact';
import Blog from './BlogComponent/Blog';
import Resume from './ResumeComponent/Resume';
import Portfolio from './PortfolioComponent/Portfolio';
import About from './AboutComponent/About';
import Home from './Home'; 
import RegisterForm from './RegisterComponent/RegisterForm';
const Nav = () => {
  return (
    <>
    <Router>
         <nav className="navbar">
            <ul className="navbar-list">
            <li className="navbar-item">
              <Link  to="/Home">
                <button className="navbar-link active" data-nav-link>
                  Home
                </button>
              </Link>
              </li>
            <li className="navbar-item">
              <Link  to="/About">
                <button className="navbar-link " data-nav-link>
                  About
                </button>
              </Link>
              </li>
              <li >
              <Link to="/Resume">
                <button className="navbar-link " >
                  Resume
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Portfolio">
                <button className="navbar-link" >
                  Portfolio
                </button>
              </Link>
            </li>
            <li >
              <Link to="/contact">
                <button className="navbar-link" >
                  Contact
                </button>
              </Link>
            </li>
             </ul>
         </nav>
          
         <Routes>
          {/* Default route */}
        <Route path="/" element={<Navigate to="/Home" />} />
         <Route path="/Home" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/RegisterForm" element={<RegisterForm/>} />
        </Routes>
      </Router>
    </>
    
  )
}

export default Nav
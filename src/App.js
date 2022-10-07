import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";


import './App.css';

import MainLayout from './layout/Mainpage.js';


import Homepage from './pages/homepage/index.js';
import About from './pages/about/index.js';
import Resume from './pages/resume/index.js';
import Projects from './pages/projects/index.js';
import Blog from './pages/blog/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

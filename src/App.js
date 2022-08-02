import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import Showcase from "./components/Showcase"
import Profile from "./components/Profile"
import CompletedProjects from './components/CompletedProjects'
import Miscellaneous from './components/Miscellaneous'


/* add element={} with components needed for route path to fix if broken*/
function App() {
  return (
    <Router>
      <Navbar />
        <Routes> 
          <Route path="/" element={<Showcase />} />
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/CompletedProjects" element={<CompletedProjects />}/>
          <Route path="/Miscellaneous" element={<Miscellaneous />}/>
        </Routes>
    </Router>
  );
}

export default App;

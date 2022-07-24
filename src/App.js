import './App.css';
import Navbar from "./components/Navbar"
import Showcase from "./components/Showcase"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from "./components/Profile"
import CompletedProjects from './components/CompletedProjects'
import FutureProjects from './components/FutureProjects';


/* add element={} with components needed for route path to fix if broken*/
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes> 
          <Route path="/" element={<Showcase />} />
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/CompletedProjects" element={<CompletedProjects />}/>
          <Route path="/FutureProjects" element={<FutureProjects />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

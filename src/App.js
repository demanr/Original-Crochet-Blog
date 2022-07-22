import './App.css';
import Navbar from "./components/Navbar"
import Showcase from "./components/Showcase"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/* add element={} with components needed for route path to fix if broken*/
function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/"/>
        <Route path="/profile"/>
        <Route path="/finishedProjects"/>
        <Route path="/futureProjects"/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact component={<Home/>} />
      <Route path='/experience'  component={<Experience/>} />
      <Route path='/projects'  component={<Projects/>} />
      <Route path='/achievements'  component={<Achievements/>} />
      </Routes>      
    </Router>
    
    
  );
}

export default App;

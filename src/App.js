import Navbar from './components/navbar/navbar.js';
import Hero from './components/hero/hero.js';
import Project from './components/projects/projects.js';
import './style.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Project/>
    </div>
  );
}

export default App;

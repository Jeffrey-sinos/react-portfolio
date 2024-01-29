import Navbar from './components/navbar/navbar.js';
import Hero from './components/hero/hero.js';
import Project from './components/projects/projects.js';
import About from './components/about/about.js';
import Contact from './components/contact/contacts.js';
import './style.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

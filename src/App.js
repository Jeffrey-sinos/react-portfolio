import Navbar from './components/navbar/navbar.js';
import Hero from './components/hero/hero.js';
import Project from './components/projects/projects.js';
import About from './components/about/about.js';
import Contact from './components/contact/contacts.js';
import Footer from './components/footer/footer.js';
import Api from './components/api/api.js';
import './style.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
      <Api/>
    </div>
  );
}

export default App;

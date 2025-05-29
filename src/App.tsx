import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 return (
  <Router>
    <div className="flex min-h-screen bg-slate-900 font-sans w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 w-full md:pl-64"> {/* This adds padding on desktop to account for sidebar */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <footer className="text-center py-8 bg-slate-900 text-white">
          <p>&copy; {new Date().getFullYear()} Manish Chaudhari. All rights reserved.</p>
        </footer>
      </main>
    </div>
  </Router>
);
}

export default App;


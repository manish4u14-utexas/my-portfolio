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

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main className="flex-1 md:pl-64"> {/* Adjust pl based on sidebar width, remove for mobile stack */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <footer className="text-center py-8 bg-slate-900 text-white">
          <p>&copy; {new Date().getFullYear()} Manish Chaudhari. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;


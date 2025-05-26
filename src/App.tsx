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
   <div className="flex flex-col md:flex-row min-h-screen w-full bg-slate-900 font-sans overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 w-full md:pl-64 bg-slate-900 "> {/* Adjust pl based on sidebar width */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
        <footer className="text-center py-8 bg-slate-900 text-white">
          <p>&copy; {new Date().getFullYear()} Manish Chaudhari. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;


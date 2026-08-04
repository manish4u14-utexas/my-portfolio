import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import Publications from './components/Publications';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <ScrollProgress />
      <div className="flex min-h-screen bg-[#0F172A] font-sans w-full overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 w-full md:pl-64 pl-0">
          <Hero />
          <About />
          <FeaturedProjects />
          <Skills />
          <Experience />
          <EducationCerts />
          <Publications />
          <Contact />
          <footer className="text-center py-8 bg-[#0F172A] text-gray-500 border-t border-slate-800">
            <p>&copy; {new Date().getFullYear()} Manish Chaudhari. All rights reserved.</p>
          </footer>
        </main>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

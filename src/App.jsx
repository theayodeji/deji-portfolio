import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

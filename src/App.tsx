import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'doctores', 'citas', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Services />
        <Doctors />
        <Appointment />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

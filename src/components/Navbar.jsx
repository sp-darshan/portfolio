import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import navImage from '../assets/images/Nav.png';

export default function Header({ onContactClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2"
    >
      <nav className="backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-3xl px-14 py-0 flex justify-between items-center gap-8 shadow-lg" style={{ width: '1200px', overflow: 'hidden' }}>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => scrollToSection('home')}
          className="relative cursor-pointer flex items-center gap-2 shrink-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl font-bold italic leading-none whitespace-nowrap text-white drop-shadow-[0_0_6px_rgba(74,222,128,0.55)]">
            Darshan
          </span>
          <motion.img
            src={navImage}
            alt="Portfolio"
            className="h-20 w-16 object-cover m-0"
            animate={{ translateY: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          />
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-full top-1/2 ml-1 -translate-y-1/2 rounded-md border border-green-400/70 bg-black/90 px-2 py-0.5 text-sm font-bold text-green-400 leading-none shadow-[0_0_10px_rgba(74,222,128,0.25)]"
            >
              Hi
              <div className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-green-400/70 bg-black/90" />
            </motion.div>
          )}
        </motion.div>
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'home' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'about' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            About
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'education' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Education
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'projects' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'skills' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Skills
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'certifications' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Certifications
          </button>
          <button
            onClick={onContactClick}
            className="font-bold transition cursor-pointer px-3 py-1 rounded text-white flex items-center gap-2"
          >
            {activeSection === 'contact' && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
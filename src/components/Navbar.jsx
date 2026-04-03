import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import navImage from '../assets/images/Nav.png';

const sections = ['home', 'about', 'education', 'projects', 'skills', 'certifications', 'contact'];

export default function Header({ onContactClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    onContactClick();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2"
    >
      <div className="relative w-full max-w-6xl px-3 md:px-6">
        <nav className="backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-3xl px-4 md:px-8 py-0 flex justify-between items-center shadow-lg overflow-hidden">
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => scrollToSection('home')}
            className="relative cursor-pointer flex items-center gap-2 shrink-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl md:text-2xl font-bold italic leading-none whitespace-nowrap text-white drop-shadow-[0_0_6px_rgba(74,222,128,0.55)]">
              Darshan
            </span>
            <motion.img
              src={navImage}
              alt="Portfolio"
              className="h-16 w-12 md:h-20 md:w-16 object-cover m-0"
              animate={{ translateY: isHovered || isMenuOpen ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            />
            {(isHovered || isMenuOpen) && (
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

          <div className="hidden md:flex gap-3 lg:gap-6">
            {sections.map((sectionId) => (
              <button
                key={sectionId}
                onClick={sectionId === 'contact' ? handleContactClick : () => scrollToSection(sectionId)}
                className="font-bold transition cursor-pointer px-2 lg:px-3 py-1 rounded text-white flex items-center gap-2 capitalize"
              >
                {activeSection === sectionId && <span className="w-2 h-2 bg-green-400 rounded-full" />}
                {sectionId}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-3 right-3 mt-2 rounded-2xl border border-white/15 bg-black/90 backdrop-blur-md p-3"
            >
              <div className="grid grid-cols-2 gap-2">
                {sections.map((sectionId) => (
                  <button
                    key={sectionId}
                    type="button"
                    onClick={sectionId === 'contact' ? handleContactClick : () => scrollToSection(sectionId)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white capitalize"
                  >
                    {activeSection === sectionId && <span className="w-2 h-2 bg-green-400 rounded-full" />}
                    {sectionId}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

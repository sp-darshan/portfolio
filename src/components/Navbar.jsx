import { motion } from 'framer-motion';
import { useState } from 'react';
import navImage from '../assets/images/Nav.png';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
    >
      <nav className="backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-3xl px-14 py-0 flex justify-between items-center gap-20 shadow-lg" style={{ width: 'auto', minWidth: '700px', overflow: 'hidden' }}>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => scrollToSection('home')}
          className="relative cursor-pointer flex items-end gap-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
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
              animate={{ opacity: 1, x: 0, y: -15 }}
              exit={{ opacity: 0, x: -10 }}
              className="relative"
              style={{
                width: '60px',
                height: '35px',
                background: 'transparent',
                backdropFilter: 'none',
                border: 'none',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                boxShadow: 'none',
              }}
            >
              Hi
              <div
                style={{
                  position: 'absolute',
                  left: '-12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '0',
                  height: '0',
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: '12px solid transparent',
                }}
              />
            </motion.div>
          )}
        </motion.div>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
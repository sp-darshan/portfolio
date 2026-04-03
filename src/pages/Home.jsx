import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import profileImage from '../assets/images/Profile.webp';
import About from './About';
import Certifications from './Certifications';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import BackToTop from '../components/BackToTop';
import resume from '../assets/Resume/MR.pdf'

const TypingText = ({ text, delay = 0 }) => {
  const characters = text.split('');

  return (
    <div className="flex flex-wrap whitespace-pre">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home({ onOpenContact }) {
  return (
    <>
      {/* Home Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center scroll-mt-28"
      >
        <div className="w-full max-w-6xl px-8 pt-16 text-white ml-12">
          <div className="flex items-center justify-between gap-16">
            {/* Content */}
            <div className="flex-1">
              <div className="text-5xl font-bold font-mono mb-4 text-gray-300">
                <TypingText text="Hello(); I'm" delay={0.2} />
              </div>
              <div className="text-7xl font-bold mb-8 bg-linear-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                <TypingText text="S P Darshan" delay={0.8} />
              </div>
              <motion.div
                className="text-5xl font-bold text-white mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                I transform ideas<br />to &lt;code/&gt;.
              </motion.div>
              <motion.div
                className="text-xl  text-bold gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.2 }}
              >
                A passionate developer dedicated to crafting elegant solutions. Building digital experiences that matter.
              </motion.div>
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.8, ease: 'easeOut' }}
              >
                <div className="relative inline-block border-2 border-green-400 rounded-lg p-1 bg-black/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/50">
                  <button onClick={onOpenContact} className="px-3 py-1 text-xs text-green-400 font-bold transition-all duration-300 hover:text-green-300">
                    Let's Connect
                  </button>
                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-black border-2 border-green-400 border-t-0 border-l-0 transform rotate-45"></div>
                </div>

                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-400 bg-green-400 px-3 py-2 text-xs font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-green-300"
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{ y: [0, 2, 0], rotate: [0, -8, 0], opacity: [1, 0.85, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-flex"
                  >
                    <FiDownload className="text-black" />
                  </motion.span>
                  Download CV
                </a>
              </motion.div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="image-frame -mt-18 -mr-16">
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="w-80 h-80 rounded-lg object-cover transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Project Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact onOpenContact={onOpenContact} />

      <BackToTop />
    </>
  );
}

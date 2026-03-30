import { motion } from 'framer-motion';
import profileImage from '../assets/images/Profile.webp';

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

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-6xl px-8 text-white">
          <div className="flex items-center justify-between gap-16">
            {/* Content */}
            <div className="flex-1">
              <div className="text-5xl font-bold font-mono mb-4 text-gray-300">
                <TypingText text="Hello(); I'm" delay={0.2} />
              </div>
              <div className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
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
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center ml-10">
              <div className="image-frame">
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
      <motion.section
        id="about"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="min-h-screen text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-5xl font-bold mb-8">
            <TypingText text="About Me" delay={0.2} />
          </div>
          <div className="text-lg text-gray-400">
            <TypingText text="Tell your story here" delay={0.8} />
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="min-h-screen text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-5xl font-bold mb-8">
            <TypingText text="My Projects" delay={0.2} />
          </div>
          <div className="text-lg text-gray-400">
            <TypingText text="Showcase your work here" delay={0.8} />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="min-h-screen text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-5xl font-bold mb-8">
            <TypingText text="Contact Me" delay={0.2} />
          </div>
          <div className="text-lg text-gray-400">
            <TypingText text="Get in touch here" delay={0.8} />
          </div>
        </div>
      </motion.section>
    </>
  );
}

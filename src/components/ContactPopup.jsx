import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLinkedin, FiMail, FiMessageSquare, FiX } from 'react-icons/fi';

const contactDetails = {
  email: 'spdarshan14@gmail.com',
  github: 'https://github.com/sp-darshan',
  linkedin: 'https://www.linkedin.com/in/spdarshan14/',
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 18,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    transition: { duration: 0.16 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 16,
    },
  },
};

export default function ContactPopup({ isOpen, onClose, onMessageClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md rounded-2xl border border-white/15 bg-black/80 p-3.5 md:p-4 font-mono shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div variants={itemVariants} className="mb-4 flex items-center justify-center relative text-center">
              <h2 className="text-xl font-bold text-white">Get in touch</h2>
              <button
                onClick={onClose}
                className="absolute right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:border-green-300/70 hover:text-green-300"
                aria-label="Close contact popup"
              >
                <FiX size={18} />
              </button>
            </motion.div>

            <div className="space-y-3 text-center">
              <motion.a
                variants={itemVariants}
                href={`mailto:${contactDetails.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 hover:border-green-300/60 hover:bg-white/10"
              >
                <div className="mb-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white group-hover:text-green-300 mx-auto">
                  <FiMail size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Me</h3>
                <p className="mt-1 text-sm text-gray-300">{contactDetails.email}</p>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="#message-me"
                onClick={(event) => {
                  event.preventDefault();
                  onMessageClick();
                }}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 hover:border-green-300/60 hover:bg-white/10"
              >
                <div className="mb-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white group-hover:text-green-300 mx-auto">
                  <FiMessageSquare size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Message Me</h3>
                <p className="mt-1 text-sm text-gray-300">Send a quick message</p>
              </motion.a>
            </div>

            <motion.div variants={itemVariants} className="mt-5 text-center">
              <p className="mb-3 text-xs tracking-[0.14em] text-gray-400">CONNECT ON SOCIALS</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-200 transition-colors duration-300 hover:border-green-300/60 hover:text-green-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-200 transition-colors duration-300 hover:border-green-300/60 hover:text-green-300"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-5 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-green-300"
              >
                Close
                <FiExternalLink size={15} />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

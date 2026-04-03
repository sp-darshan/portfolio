import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Contact({ onOpenContact }) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen text-white py-20 md:py-28 flex items-center justify-center scroll-mt-32"
    >
      <div className="w-full max-w-6xl px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">Let’s build something impactful.</h1>
        <p className="mx-auto max-w-4xl font-mono text-lg md:text-xl text-gray-300 leading-relaxed">
          Have an idea or opportunity in mind? Let’s connect and bring it to life.
        </p>

        <motion.div
          className="mt-12"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.0, ease: 'easeInOut' }}
        >
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center font-mono gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-300/70 hover:bg-white/10"
          >
            Let's Connect
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

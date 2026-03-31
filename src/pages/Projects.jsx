import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-white py-24 flex items-center justify-center scroll-mt-20 "
    >
      <div className="w-full max-w-6xl px-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold font-mono">My Projects</h1>
          <div className="w-92 border-t-4 border-dashed border-green-400"></div>
        </div>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl">Showcase your work here</p>
      </div>
    </motion.section>
  );
}

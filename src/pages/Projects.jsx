import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white py-12 md:py-20 mt-24 md:mt-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 md:mb-8">My Projects</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl">Showcase your work here</p>
      </div>
    </motion.div>
  );
}

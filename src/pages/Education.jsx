import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-white py-22 flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-6xl px-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold font-mono">Education</h1>
          <div className="w-92 border-t-4 border-dashed border-green-400"></div>
        </div>
        <div className='flex w-full'>
          <div className="flex-1 text-lg text-white leading-relaxed max-w-4xl space-y-6 text-justify">
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-2">Bachelor's Degree in Computer Communication Engineering</h2>
              <p className="text-sm text-gray-500 mb-2">Amrita vishwa vidyapeetham | 2023 - present</p>
              <p>I am currently pursuing a comprehensive degree in Computer Communication, gaining deep knowledge in algorithms, data structures, software engineering and various programming paradigms. My coursework focused on building strong foundational concepts that transformed my understanding of how systems work at scale.</p>
            </div>
            
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
    </motion.section>
  );
}
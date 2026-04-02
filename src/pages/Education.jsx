import { motion } from "framer-motion";
import avvlogo from '../assets/images/avv-logo.png';
import sctslogo from '../assets/images/scts-logo.png';

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
        <div className='w-full flex gap-6'>
          {/* Education Card 1 */}
          <div className="group flex-1 flex gap-6 bg-white/3 rounded-lg p-4 border border-white/10 border-opacity-30 hover:border-opacity-60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50">
            {/* Image Section */}
            <div className="w-1/6 h-24 bg-gray-800 rounded-lg shrink-0 flex items-center justify-center">
              <img 
                src={avvlogo} 
                alt="Amrita vishwa vidyapeetham" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-green-400">B.Tech in Computer Communication Engineering <span className="text-sm text-green-400 font-mono transition-colors duration-300 group-hover:text-white"> | 2023 - present</span></h2>
              <p className="text-sm font-bold text-gray-300">Amrita vishwa vidyapeetham, Coimbatore, India</p>

            </div>
          </div>

          <div className="group flex-1 flex gap-6 bg-white/3 rounded-lg p-4 border border-white/10 border-opacity-30 hover:border-opacity-60 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50">
            {/* Image Section */}
            <div className="w-1/6 h-24 bg-gray-800 rounded-lg shrink-0 flex items-center justify-center">
              <img 
                src={sctslogo} 
                alt="Sri Chaitanya techno school" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Content Section */}
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-8 transition-colors duration-300 group-hover:text-green-400">High School Diplomo<span className="text-sm text-green-400 font-mono transition-colors duration-300 group-hover:text-white"> | 2021 - 2023</span></h2>
              <p className="text-sm font-bold text-gray-300">Sri Chaitanya techno school, Coimbatore, Tamilnadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
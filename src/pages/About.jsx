import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain } from 'react-icons/fa6';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-white py-16 md:py-20 flex items-center justify-center scroll-mt-22"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-mono">About Me</h1>
          <div className="hidden md:block w-92 border-t-4 border-dashed border-green-400"></div>
        </div>
        <div className='flex w-full flex-col md:flex-row gap-8 md:gap-12'>
          <div className="flex-1 text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl space-y-4 text-justify">
            <p>Hi! My name is Darshan. I'm a full-stack developer and a machine learning enthusiast. I love building things on the internet and solving real world problems through technology.</p>
            <p>I got into development out of curiosity about how applications work and soon found myself enjoying creating things and bringing ideas to life in the browser.</p>
            <p>Alongside this, I explore machine learning, how the data and ml algorithms can make systems more intelligent.</p>
            <p>I enjoy building, learning, and constantly pushing myself to grow.</p>
          </div>
          <div className='flex-1 flex flex-col gap-4 md:gap-6 justify-center'>
            {/* Full Stack Development Card */}
            <div className="bg-white/3 border border-white/10 border-opacity-30 rounded-xl p-5 md:p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 hover:border-opacity-60">
              <div className="flex items-center gap-4">
                <div className="text-green-400 text-5xl">
                  <FaLaptopCode />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
                  <p className="text-gray-400 text-sm mt-1">Building complete web applications</p>
                </div>
              </div>
            </div>

            {/* ML Card */}
            <div className="bg-white/3 border border-white/10 border-opacity-30 rounded-xl p-5 md:p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 hover:border-opacity-60">
              <div className="flex items-center gap-4">
                <div className="text-green-400 text-5xl">
                  <FaBrain />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Machine Learning</h3>
                  <p className="text-gray-400 text-sm mt-1">Designing adaptive intelligent systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </motion.section>
  );
}

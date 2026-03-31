import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-white py-20 flex items-center justify-center scroll-mt-22"
    >
      <div className="w-full max-w-6xl px-8">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold font-mono">About Me</h1>
          <div className="w-92 border-t-4 border-dashed border-green-400"></div>
        </div>
        <div className='flex w-full'>
          <div className="flex-1 text-lg text-gray-400 leading-relaxed max-w-4xl space-y-4 text-justify">
            <p>Hi! My name is Darshan. I'm a full-stack developer and a machine learning enthusiast. I love building things on the internet and solving real world problems through technology.</p>
            <p>I got into development out of curiosity about how applications work and soon found myself enjoying creating things and bringing ideas to life in the browser.</p>
            <p>Alongside this, I explore machine learning, how the data and ml algorithms can make systems more intelligent.</p>
            <p>I enjoy building, learning, and constantly pushing myself to grow.</p>
          </div>
          <div className='flex-1'></div>
        </div>
        
      </div>
    </motion.section>
  );
}

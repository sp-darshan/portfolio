import { motion } from 'framer-motion';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import { SiPython } from 'react-icons/si';
import { TbCode } from 'react-icons/tb';

const certifications = [
  {
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    credentialLink: 'https://www.udemy.com/certificate/UC-0d45d3f6-077a-4ee7-872e-b92881f63576/',
    issuer: 'Udemy',
    Icon: SiPython,
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    credentialLink: 'https://www.udemy.com/certificate/UC-da58e52b-9e5e-4840-b92c-c5e7f1a687ea/',
    issuer: 'Udemy',
    Icon: TbCode,
  },
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-white py-16 md:py-24 flex justify-center scroll-mt-24"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mono">Certifications</h1>
          <div className="hidden md:block w-86 border-t-4 border-dashed border-green-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col items-start">
                  <cert.Icon className="text-5xl text-green-300" aria-hidden="true" />
                  <span className="text-xs text-gray-400 mt-1">{cert.issuer}</span>
                </div>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-200 transition-colors"
                  title="View Credential"
                >
                  <FiExternalLink size={20} aria-hidden="true" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                {cert.title}
              </h3>

              

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

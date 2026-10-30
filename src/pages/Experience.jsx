import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import debel from '../assets/images/debel.png';

const experiences = [
  {
    role: "Research Intern",
    organization: "Defence Research and Development Organisation (DRDO) - DEBEL",
    shortName: "DRDO",
    period: "Apr 2026 - Jun 2026",
    location: "Bengaluru, India",
    type: "Internship",
    image: debel,
    description: "Worked on Brain-Computer Interface (BCI) systems, applying machine learning and deep learning models to classify EEG signals and analyze motor imagery data.",
    skills: ["Brain-Computer Interface", "EEG Signal Processing", "Deep Learning", "Machine Learning", "Motor Imagery"],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-white py-16 md:py-22 flex justify-center scroll-mt-20"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mono">Experience</h1>
          <div className="w-24 sm:w-14 md:w-88 border-t-2 md:border-t-4 border-dashed border-green-400"></div>
        </div>

        {/* Experience List */}
        <div className="w-full flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.02 }}
              className="group cursor-pointer border border-white/10 bg-white/3 rounded-xl p-5 md:p-6 transition-all hover:shadow-lg hover:shadow-green-400/50 active:shadow-lg active:shadow-green-400/50"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                {/* Organization Logo (Free form without borders/box) */}
                <div className="shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20">
                  <img
                    src={exp.image || debel}
                    alt={exp.organization}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Main Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-green-400 group-active:text-green-400">
                        {exp.role}
                      </h2>
                      <p className="text-base md:text-lg font-semibold text-gray-300 mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Period and Type Badges */}
                    <div className="flex flex-wrap items-center gap-2 mt-1 md:mt-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/40 bg-green-500/10 px-3 py-1 text-xs md:text-sm font-mono text-green-300">
                        <FiCalendar aria-hidden="true" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-gray-300">
                        <FiBriefcase aria-hidden="true" />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Location if present */}
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                      <FiMapPin aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills / Tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(255,255,255,0.18)] active:-translate-y-0.5 active:border-white/60 active:bg-white/10 active:shadow-[0_2px_8px_rgba(255,255,255,0.18)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

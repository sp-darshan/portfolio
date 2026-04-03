import { motion } from 'framer-motion';
import {
  SiExpress,
  SiEspressif,
  SiFirebase,
  SiFramer,
  SiGooglegemini,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRender,
  SiRazorpay,
  SiScikitlearn,
  SiSocketdotio,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si';
import { FaChartLine, FaMicrochip, FaRobot } from 'react-icons/fa6';
import { FiCode, FiExternalLink, FiGithub } from 'react-icons/fi';
import rr from '../assets/images/RR.png'
import ctf from '../assets/images/CTF.png'
import st from '../assets/images/ST.png'
import hr from '../assets/images/hr.jpg'

const projects = [
  {
    title: "Resume Ranker",
    desc: "Built an AI-powered resume analysis platform that evaluates resumes using ATS scoring, keyword optimization and job description matching. Provides actionable feedback, skill gap insights and personalized improvement suggestions using Gemini API.",
    tech: ["React.js", "Tailwind CSS", "Framer motion", "Node.js", "Express.js","Mongodb", "Razorpay", "Gemini API"],
    image: rr,
    github: "https://github.com/sp-darshan/Resume-Ranker",
    live: "https://resume-ranker-ind.vercel.app/",
    featured: true,
  },
  {
    title: "Smart Toll system\nusing Xbee",
    desc: "Designed and deployed a scalable smart toll gateway system to collect, process and validate real-time vehicle and geolocation data. Implemented edge-based toll detection using GPS geofencing, cloud logging for transaction records and embedded firmware for accurate toll event validation and communication via ZigBee.",
    tech: ["Next.js", "Framer motion", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Razorpay", "ESP32", "Digi Xbee S2C"],
    image: st,
    github: "https://github.com/lithigesh/smart-toll",
    live: "https://smart-toll.vercel.app/",
  },
  {
    title: "Capture the Flag",
    desc: "Developed an interactive Capture The Flag simulation where autonomous robots compete in real time. Leveraged WebSockets for seamless communication, enabling synchronized decision making, dynamic gameplay and efficient event handling, while demonstrating distributed system design, real time coordination and intelligent agent behavior in a scalable virtual environment.",
    tech: ["Webots", "Python", "Node.js", "Websockets", "Render", "Vercel"],
    image: ctf,
    github: "https://github.com/sp-darshan/CTF-game",
    live: "#"
  },
  {
    title: "ECG based Arrhythmia Classification",
    desc: "Developed a system to analyze ECG heart rhythm patterns for early arrhythmia detection, focusing on accurate classification, robust preprocessing and meaningful insights to improve cardiac screening quality, enhance consistency and reduce manual interpretation effort significantly for clinicians.",
    tech: ["Python", "pandas", "NumPy", "Scikit-Learn","Matplotlib", "Seaborn", "TensorFlow", "PyTorch"],
    image: hr,
    github: "https://github.com/Sriharish-V-J/Machine-Learning",
    live: "#",
  },
];

const techIconMap = {
  react: SiReact,
  'react.js': SiReact,
  tailwind: SiTailwindcss,
  'tailwind css': SiTailwindcss,
  node: SiNodedotjs,
  'node.js': SiNodedotjs,
  express: SiExpress,
  'express.js': SiExpress,
  next: SiNextdotjs,
  'next.js': SiNextdotjs,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  'postgresql db': SiPostgresql,
  postgres: SiPostgresql,
  mongoose: SiMongodb,
  razorpay: SiRazorpay,
  'gemini api': SiGooglegemini,
  gemini: SiGooglegemini,
  'framer motion': SiFramer,
  firebase: SiFirebase,
  esp32: SiEspressif,
  'digi xbee s2c': FaMicrochip,
  'digi xbee': FaMicrochip,
  xbee: FaMicrochip,
  webots: FaRobot,
  python: SiPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  'scikit-learn': SiScikitlearn,
  sklearn: SiScikitlearn,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  matplotlib: FaChartLine,
  seaborn: FaChartLine,
  websockets: SiSocketdotio,
  websocket: SiSocketdotio,
  render: SiRender,
  vercel: SiVercel,
  js: SiJavascript,
  javascript: SiJavascript,
  css: FiCode,
  api: FiCode,
};

function TechBadge({ label, compact = false }) {
  const normalizedLabel = label.trim().toLowerCase();
  const Icon = techIconMap[normalizedLabel] ?? FiCode;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-green-400/30 bg-green-500/10 text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(255,255,255,0.18)] ${compact ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'}`}
    >
      <Icon className={compact ? 'text-sm' : 'text-base'} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function hasValidLink(url) {
  return typeof url === 'string' && url.trim() !== '' && url.trim() !== '#';
}

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-white py-24 flex justify-center scroll-mt-12"
    >
      <div className="w-full max-w-6xl px-8">

        {/* Title */}
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-4xl font-bold font-mono">My Projects</h1>
          <div className="w-85 border-t-4 border-dashed border-green-400"></div>
        </div>

        {/* Featured Project */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group grid md:grid-cols-2 gap-8 mb-16 border border-white/10 bg-white/3 rounded-lg p-4  transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3 transition-all duration-300 ease-out group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">{featured.title}</h2>
            <p className="text-gray-300 mb-4">{featured.desc}</p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tech.map((t, i) => (
                <TechBadge key={i} label={t} />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              {hasValidLink(featured.live) && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/70 text-black rounded-lg font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-[0_2px_8px_rgba(34,197,94,0.18)]"
                >
                  <FiExternalLink aria-hidden="true" />
                  Live
                </a>
              )}
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-400/70 text-green-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-400/10 hover:shadow-[0_2px_8px_rgba(34,197,94,0.16)]"
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* ⚡ Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {others.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group border border-white/10 bg-white/3 rounded-lg p-4 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 min-h-[430px] flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 whitespace-pre-line transition-all duration-300 ease-out group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-md mb-4">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <TechBadge key={i} label={t} compact />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {hasValidLink(project.live) && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-400/70 text-black text-sm rounded-lg font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-[0_2px_8px_rgba(34,197,94,0.18)]"
                    >
                      <FiExternalLink aria-hidden="true" />
                      Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-green-400/70 text-green-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-400/10 hover:shadow-[0_2px_8px_rgba(34,197,94,0.16)]"
                  >
                    <FiGithub aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔗 View More */}
        <div className="mt-18 text-center">
          <a
            href="https://github.com/sp-darshan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/70 text-black rounded-lg font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-[0_2px_8px_rgba(34,197,94,0.18)]"
          >
            <FiGithub aria-hidden="true" />
            View More on GitHub
          </a>
        </div>

      </div>
    </motion.section>
  );
}
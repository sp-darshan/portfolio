import { motion } from 'framer-motion';
import {
  SiArduino,
  SiBootstrap,
  SiC,
  SiCss,
  SiExpress,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiRender,
  SiRaspberrypi,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiVercel,
  SiEspressif,
} from 'react-icons/si';
import { MdAnalytics } from 'react-icons/md';

const skills = [
  { name: 'Python', Icon: SiPython },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'C', Icon: SiC },
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'React.js', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'Bootstrap', Icon: SiBootstrap },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'PyTorch', Icon: SiPytorch },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'Scikit-learn', Icon: SiScikitlearn },
  { name: 'Pandas', Icon: SiPandas },
  { name: 'NumPy', Icon: SiNumpy },
  { name: 'Arduino', Icon: SiArduino },
  { name: 'ESP32', Icon: SiEspressif },
  { name: 'Raspberry Pi', Icon: SiRaspberrypi },
  { name: 'Power BI', Icon: MdAnalytics },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Postman', Icon: SiPostman },
  { name: 'Vercel', Icon: SiVercel },
  { name: 'Render', Icon: SiRender },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-white py-16 md:py-24 flex justify-center scroll-mt-12"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mono">My Tech Stack</h1>
          <div className="w-16 sm:w-12 md:w-86 border-t-2 md:border-t-4 border-dashed border-green-400"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {skills.map(({ name, Icon }) => (
            <motion.div
              key={name}
              whileHover={{ y: -4 }}
              className="h-28 rounded-2xl border border-white/10 bg-white/3 p-3 text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-green-400/40 hover:shadow-[0_0_16px_rgba(74,222,128,0.16)]"
            >
              <Icon className="text-5xl text-green-300 mb-2" aria-hidden="true" />
              <span className="text-[11px] leading-tight text-gray-200 font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

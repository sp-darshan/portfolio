import { motion } from 'framer-motion';
import PublicationCard from '../components/PublicationCard';

const publications = [
  {
    title: 'Deep Learning Architectures for Skin Lesion Classification: A Comparative Study of CNN, Transformer and Hybrid Models',
    type: 'Conference Paper',
    year: '2026',
    metadata: 'Conference • ICISCoIS • Coimbatore, India',
    summary:
      'Comparative study evaluating CNN, Transformer and hybrid deep learning models for skin lesion classification with a focus on accuracy and robustness in medical imaging workflows.',
    tags: ['Deep Learning', 'CNN', 'Vision Transformers', 'Hybrid Models', 'Skin Lesion', 'Medical Imaging'],
    paperUrl: 'https://ieeexplore.ieee.org/document/11447666',
    fullCitation:
      'D. S. P et al., "Deep Learning Architectures for Skin Lesion Classification: A Comparative Study of CNN, Transformer and Hybrid Models," 2026 Second International Conference on Intelligent Systems for Communication, IoT and Security (ICISCoIS), Coimbatore, India, 2026, pp. 1-6, doi: 10.1109/ICISCoIS62701.2026.11447666.',
  },
];

export default function Publications() {
  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-white py-16 md:py-24 flex justify-center scroll-mt-20"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mono">Publications</h1>
          <div className="w-12 sm:w-8 md:w-84 border-t-2 md:border-t-4 border-dashed border-green-400"></div>
        </div>

        <div className="grid gap-6">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.title}
              title={publication.title}
              year={publication.year}
              metadata={publication.metadata}
              description={publication.summary}
              tags={publication.tags}
              paperUrl={publication.paperUrl}
              fullCitation={publication.fullCitation}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
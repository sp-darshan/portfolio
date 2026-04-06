import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiExternalLink } from 'react-icons/fi';

export default function PublicationCard({
  title,
  year,
  metadata,
  description,
  tags,
  paperUrl,
  fullCitation,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className="rounded-xl border border-white/12 bg-white/5 p-5 md:p-6 transition-all duration-300 hover:border-green-400/40 hover:shadow-[0_0_18px_rgba(74,222,128,0.14)]"
    >
      <div className="mb-3 flex items-start gap-3">
        <div className="mt-1 shrink-0 rounded-lg border border-green-400/35 bg-green-500/10 p-2 text-green-300">
          <FiBookOpen className="text-base" aria-hidden="true" />
        </div>

        <h3 className="flex-1 text-lg font-bold leading-snug text-white md:text-xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {title}
        </h3>

        <span className="shrink-0 rounded-full border border-green-400/35 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-200">
          {year}
        </span>
      </div>

      <p className="mb-3 text-sm text-gray-300">{metadata}</p>

      <p className="mb-4 text-sm leading-relaxed text-gray-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.slice(0, 6).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full border border-green-400/30 bg-green-500/10 px-2 py-1 text-xs text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_2px_8px_rgba(255,255,255,0.18)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-green-400/60 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-200 transition-colors hover:bg-green-500/25"
        >
          View Paper
          <FiExternalLink aria-hidden="true" />
        </a>

        {fullCitation && (
          <button
            type="button"
            onClick={() => setIsExpanded((currentValue) => !currentValue)}
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            {isExpanded ? 'Hide details' : 'More details'}
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && fullCitation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-3"
          >
            <p className="text-xs leading-relaxed text-gray-300">{fullCitation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
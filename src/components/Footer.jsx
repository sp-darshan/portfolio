import { FiGithub, FiLinkedin } from 'react-icons/fi';

const contactLinks = {
  github: 'https://github.com/sp-darshan',
  linkedin: 'https://www.linkedin.com/in/spdarshan14/',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-6 pb-8 md:pt-4 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row md:text-base font-mono">
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-green-400"
            aria-label="LinkedIn"
          >
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </a>

          <p className="pl-2 text-center">&copy; {currentYear} S P Darshan</p>

          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-green-400"
            aria-label="GitHub"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
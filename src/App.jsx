import { useEffect, useState } from 'react';
import Header from './components/Navbar';
import ContactPopup from './components/ContactPopup';
import Footer from './components/Footer';
import Home from './pages/Home';
import MessageMe from './pages/MessageMe.jsx';

export default function App() {
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    if (!activePopup) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActivePopup((currentPopup) => (currentPopup === 'message' ? 'contact' : null));
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activePopup]);

  return (
    <>
      <Header onContactClick={() => setActivePopup('contact')} />
      <Home onOpenContact={() => setActivePopup('contact')} />
      <Footer />
      <ContactPopup
        isOpen={activePopup === 'contact'}
        onClose={() => setActivePopup(null)}
        onMessageClick={() => setActivePopup('message')}
      />
      <MessageMe
        isOpen={activePopup === 'message'}
        onClose={() => setActivePopup(null)}
        onBackToContact={() => setActivePopup('contact')}
      />
    </>
  );
}
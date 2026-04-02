import { useEffect, useState } from 'react';
import Header from './components/Navbar';
import ContactPopup from './components/ContactPopup';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    if (!isContactPopupOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsContactPopupOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isContactPopupOpen]);

  return (
    <>
      <Header onContactClick={() => setIsContactPopupOpen(true)} />
      <Home onOpenContact={() => setIsContactPopupOpen(true)} />
      <Footer />
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}
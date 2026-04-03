import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiArrowLeft, FiSend, FiX } from 'react-icons/fi';

const contactDetails = {
  email: 'spdarshan14@gmail.com',
};

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 18,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    transition: { duration: 0.16 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 16,
    },
  },
};

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

export default function MessageMe({ isOpen, onClose, onBackToContact }) {
  const [formData, setFormData] = useState(initialFormState);
  const [submissionState, setSubmissionState] = useState({ type: 'idle', text: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setSubmissionState({
        type: 'error',
        text: 'Email service is not configured yet. Add the EmailJS keys first.',
      });
      return;
    }

    setIsSending(true);
    setSubmissionState({ type: 'idle', text: '' });

    try {
      const submittedAt = new Date().toLocaleString();

      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `Message from ${formData.name}`,
          time: submittedAt,
          to_email: contactDetails.email,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: `Message from ${formData.name}`,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setSubmissionState({ type: 'success', text: 'Message sent successfully.' });
      setFormData(initialFormState);
    } catch (error) {
      const detailedMessage =
        typeof error === 'object' && error !== null && 'text' in error && typeof error.text === 'string'
          ? error.text
          : 'Message could not be sent right now. Please try again.';

      setSubmissionState({
        type: 'error',
        text: detailedMessage,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-black/80 p-3.5 font-mono shadow-[0_18px_70px_rgba(0,0,0,0.55)] md:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div variants={itemVariants} className="relative mb-4 flex items-center justify-center text-center">
              <button
                type="button"
                onClick={onBackToContact}
                className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:border-green-300/70 hover:text-green-300"
                aria-label="Back to contact options"
              >
                <FiArrowLeft size={18} />
              </button>
              <h2 className="text-xl font-bold text-white">Message me</h2>
              <button
                type="button"
                onClick={onClose}
                className="absolute right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:border-green-300/70 hover:text-green-300"
                aria-label="Close message popup"
              >
                <FiX size={18} />
              </button>
            </motion.div>

            <motion.p variants={itemVariants} className="mb-4 text-center text-sm text-gray-300">
              Share your name, email, and message. I’ll receive it directly in my inbox.
            </motion.p>

            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-white">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-green-300/70"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-white">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-green-300/70"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-green-300/70"
                  placeholder="Write your message here"
                />
              </div>

              {submissionState.text ? (
                <p className={`text-sm ${submissionState.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                  {submissionState.text}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-400/40 bg-green-400/10 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-green-300/80 hover:bg-green-400/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSend size={16} />
                {isSending ? 'Sending...' : 'Send message'}
              </button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
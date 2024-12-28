import { motion } from 'framer-motion';
import { ContactForm } from '../ui/ContactForm';

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-xl w-full"
      >
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
        <ContactForm />
      </motion.div>
    </section>
  );
}

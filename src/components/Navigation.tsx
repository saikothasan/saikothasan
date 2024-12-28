import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-white text-2xl font-bold"
      >
        Portfolio
      </motion.div>
      <div className="flex space-x-6">
        <NavLink href="https://github.com" icon={<Github />} />
        <NavLink href="https://linkedin.com" icon={<Linkedin />} />
        <NavLink href="mailto:contact@example.com" icon={<Mail />} />
      </div>
    </motion.nav>
  );
}

function NavLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

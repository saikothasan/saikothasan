import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-white mb-4">
          Creative Developer
        </h1>
        <p className="text-xl text-gray-300">
          Bringing ideas to life through code and design
        </p>
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { DesignerScene } from '../Canvas/DesignerScene';

export function Designer() {
  return (
    <section className="min-h-screen relative">
      <DesignerScene />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center z-10 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-400 rounded-full bg-purple-900/20 backdrop-blur-sm"
          >
            UI/UX Design
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Creative Designer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful and intuitive user interfaces with attention to detail and user experience
          </p>
        </div>
      </motion.div>
    </section>
  );
}

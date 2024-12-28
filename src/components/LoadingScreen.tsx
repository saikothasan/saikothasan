import { useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const { progress } = useProgress();
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-4">Loading...</div>
        <div className="w-64 h-2 bg-gray-800 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
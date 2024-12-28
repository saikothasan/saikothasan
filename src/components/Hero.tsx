import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 100, 100]} scale={2.5} position={[0, 0, -3]}>
          <MeshDistortMaterial
            color="#0077FF"
            attach="material"
            distort={0.5} // distortion level
            speed={2} // animation speed
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative flex items-center justify-center h-full text-center z-10 pointer-events-none"
      >
        <div className="z-10 px-4">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            className="inline-block px-6 py-2 mb-6 text-sm font-medium text-blue-400 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 shadow-lg shadow-blue-700/40 transform hover:scale-105 transition duration-300 backdrop-blur-sm"
          >
            Welcome to my portfolio
          </motion.span>
          <motion.h1
            initial={{ rotateX: 45, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 150 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl"
          >
            <Typewriter
              words={['Creative Developer', 'Innovative Designer', 'Web Enthusiast']}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed shadow-lg"
          >
            Bringing ideas to life through code and design, specializing in interactive web experiences and creative development.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

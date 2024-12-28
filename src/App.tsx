import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="relative min-h-screen">
      {/* Three.js Canvas */}
      <Canvas className="absolute top-0 left-0 z-0" camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Stars />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Suspense>
      </Canvas>

      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;

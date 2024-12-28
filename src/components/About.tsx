import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Text3D, Float } from '@react-three/drei'

function AboutText() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D
        font="/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        About Me
        <meshNormalMaterial />
      </Text3D>
    </Float>
  )
}

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Canvas className="h-64 md:h-96">
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <AboutText />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Passionate 3D Designer</h2>
            <p className="text-lg text-gray-300">
              With years of experience in creating stunning visual experiences, I combine creativity with technical expertise to bring ideas to life in three dimensions.
            </p>
            <p className="text-lg text-gray-300">
              From concept to execution, I strive to push the boundaries of what's possible in 3D design, always seeking new challenges and innovative solutions.
            </p>
            <p className="text-lg text-gray-300">
              My skills include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>3D Modeling and Texturing</li>
              <li>Animation and Rigging</li>
              <li>WebGL and Three.js Development</li>
              <li>Virtual and Augmented Reality</li>
              <li>Product Visualization</li>
            </ul>
            <p className="text-lg text-gray-300">
              Let's work together to turn your vision into reality!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Text, Float } from '@react-three/drei';

function ContactText() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        Get in Touch
      </Text>
    </Float>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 3D Text */}
          <div className="md:w-1/2 h-64 md:h-96">
            <Canvas className="h-full">
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <ContactText />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:opacity-90 focus:ring-4 focus:ring-blue-500 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

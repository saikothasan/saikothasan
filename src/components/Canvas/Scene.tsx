import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { LoadingScreen } from '../LoadingScreen';
import { Model } from './Model';

export function Scene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-gradient-to-b from-black to-gray-900"
      >
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <LoadingScreen />
    </div>
  );
}

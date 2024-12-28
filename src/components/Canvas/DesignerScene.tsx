import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { LoadingScreen } from '../LoadingScreen';
import { DesignerModel } from './DesignerModel';

export function DesignerScene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-gradient-to-b from-purple-900 to-black"
      >
        <Suspense fallback={null}>
          <DesignerModel />
          <Environment preset="sunset" />
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

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
  const gltf = useGLTF('/assets/3d/duck.glb')
  return <primitive object={gltf.scene} scale={[2, 2, 2]} position={[0, -1, 0]} />
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text text-shadow">Welcome to My 3D Portfolio</h1>
        <p className="text-xl mb-8 text-muted-foreground">Explore amazing 3D designs and models</p>
        <div className="space-x-4">
          <button className="button-primary">View Projects</button>
          <button className="button-secondary">Contact Me</button>
        </div>
      </div>
      <div className="md:w-1/2 h-64 md:h-96 animate-float">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Model />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}


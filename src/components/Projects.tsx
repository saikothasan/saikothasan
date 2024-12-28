import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Text } from '@react-three/drei'

function ProjectCube({ position, text }: { position: [number, number, number], text: string }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  )
}

const projects = [
  { name: 'Project 1', description: 'A stunning 3D visualization', tags: ['3D Modeling', 'Animation'] },
  { name: 'Project 2', description: 'Interactive product showcase', tags: ['WebGL', 'Three.js'] },
  { name: 'Project 3', description: 'Architectural walkthrough', tags: ['Architecture', 'VR'] },
  { name: 'Project 4', description: 'Character design for game', tags: ['Game Design', 'Rigging'] },
  { name: 'Project 5', description: 'Scientific data visualization', tags: ['Data Viz', 'WebGL'] },
  { name: 'Project 6', description: 'AR product catalog', tags: ['AR', 'Mobile'] },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card transform transition duration-300 hover:scale-105">
              <div className="h-64">
                <Canvas>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <ProjectCube position={[0, 0, 0]} text={project.name} />
                    <OrbitControls enableZoom={false} />
                  </Suspense>
                </Canvas>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


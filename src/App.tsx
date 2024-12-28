import { Suspense } from 'react';
import { Scene } from './components/Canvas/Scene';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Designer } from './components/sections/Designer';
import { ScrollProgress } from './components/layout/ScrollProgress';

function App() {
  return (
    <main className="relative bg-black">
      <ScrollProgress />
      <Navigation />
      
      {/* Hero Section with 3D Scene */}
      <section className="h-screen relative">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Hero />
      </section>

      {/* Designer Section */}
      <Designer />

      {/* Content Sections */}
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

import { Scene } from './components/Canvas/Scene';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />
      <Scene />
      <Hero />
    </main>
  );
}

export default App;

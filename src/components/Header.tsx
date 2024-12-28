import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">3D Portfolio</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}


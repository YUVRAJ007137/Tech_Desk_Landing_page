import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md">
            <a href="#home" className="block px-3 py-2 hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#portfolio" className="block px-3 py-2 hover:text-[#D4AF37] transition-colors">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
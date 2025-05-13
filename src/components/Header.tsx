
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-saofrancisco-brown">
            <span className="text-white text-2xl font-playfair font-bold">SF</span>
          </div>
          <div className={`transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-100 md:opacity-0'}`}>
            <h1 className="text-saofrancisco-brown font-playfair font-bold text-lg md:text-xl leading-tight">
              Hospital Veterinário<br />
              <span className="text-saofrancisco-green text-sm md:text-base">São Francisco</span>
            </h1>
          </div>
        </a>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-saofrancisco-brown focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        <nav className={`md:block ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md py-4' : 'hidden'}`}>
          <ul className="md:flex md:items-center md:space-x-8 font-medium text-saofrancisco-brown px-4 md:px-0">
            <li className="py-2 md:py-0">
              <a href="#servicos" className="hover:text-saofrancisco-green transition-colors">Serviços</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#historia" className="hover:text-saofrancisco-green transition-colors">História</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#equipe" className="hover:text-saofrancisco-green transition-colors">Equipe</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#contato" className="hover:text-saofrancisco-green transition-colors">Contato</a>
            </li>
            <li className="py-2 md:py-0 md:ml-4">
              <a href="#agendar" className="button-primary inline-block">Agendar consulta</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

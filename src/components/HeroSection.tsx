
import React from 'react';
import { CalendarPlus, List, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  logoImage: string;
  heroImage: string;
}

const HeroSection = ({ logoImage, heroImage }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-saofrancisco-cream to-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-saofrancisco-beige/30 px-4 py-1.5 text-sm font-medium text-saofrancisco-brown">
              Desde 1986 em Brasília
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src={logoImage} alt="Logo Hospital Veterinário São Francisco" className="h-20 md:h-24" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-saofrancisco-brown leading-tight">
                Hospital Veterinário<br />
                <span className="text-saofrancisco-green">São Francisco</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700">
              Cuidando com amor, tradição e excelência desde 1986.
              O primeiro hospital veterinário de Brasília.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#agendar" className="button-primary flex items-center gap-2">
                <CalendarPlus size={20} />
                <span>Agende uma consulta</span>
              </a>
      
              <a href="#contato" className="button-outline flex items-center gap-2">
                <MessageSquare size={20} />
                <span>Fale conosco</span>
              </a>
            </div>
          </div>
          
        
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="flex flex-col items-center text-saofrancisco-brown hover:text-saofrancisco-green transition-colors">
          <span className="text-sm mb-2">Conheça mais</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Clock, Dog, Cat } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <div className="p-3 rounded-full bg-saofrancisco-brown/10"><Clock className="w-6 h-6 text-saofrancisco-brown" /></div>,
      title: "Atendimento 24h",
      description: "Estamos sempre disponíveis para atender seu pet em casos de emergência e urgência."
    },
    {
      icon: <div className="p-3 rounded-full bg-saofrancisco-green/10"><Dog className="w-6 h-6 text-saofrancisco-green" /></div>,
      title: "Internação",
      description: "Estrutura completa para internações com monitoramento constante por equipe especializada."
    },
    {
      icon: <div className="p-3 rounded-full bg-saofrancisco-lightblue/10"><Cat className="w-6 h-6 text-saofrancisco-lightblue" /></div>,
      title: "Hotel para animais",
      description: "Hospedagem segura e confortável para seu pet durante suas viagens."
    }
  ];
  
  const specialties = [
    "Oncologia", "Oftalmologia", "Neurologia", "Cardiologia", "Imagem", 
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="mb-12 text-lg text-gray-700 max-w-3xl">
          Oferecemos uma ampla gama de serviços veterinários, com foco na saúde e bem-estar dos animais, tanto domésticos quanto silvestres e exóticos.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-saofrancisco-brown">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-saofrancisco-beige/20 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6 text-saofrancisco-brown">Nossas especialidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-medium text-saofrancisco-green">{specialty}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-white rounded-lg p-6 border border-saofrancisco-green/20">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-saofrancisco-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-saofrancisco-brown">Informações importantes</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Atendimento 24h para cães e gatos</li>
                  <li>Atendimento agendado para animais silvestres e exóticos</li>
                  <li>Foco exclusivo em saúde (não oferecemos serviços de banho e tosa)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

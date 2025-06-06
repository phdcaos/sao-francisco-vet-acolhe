
import React from 'react';
import { Phone } from 'lucide-react';

const TeamSection = () => {
  const teamStats = [
    { number: "12", label: "Veterinários" },
    { number: "6", label: "Especialistas" },
    { number: "30+", label: "Profissionais" },
    { number: "1986", label: "Ano de fundação" }
  ];

  return (
    <section id="equipe" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Nossa Equipe</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              O Hospital Veterinário São Francisco conta com um corpo clínico formado por 12 veterinários, 
              sendo 6 especialistas em diferentes áreas, além de estagiários e funcionários administrativos 
              comprometidos com o bem-estar dos animais.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Um diferencial de nossa equipe é a supervisão constante do diretor Luiz Carlos, que faz questão 
              de ligar pessoalmente para os tutores após os atendimentos, garantindo o acompanhamento 
              adequado e reforçando nosso compromisso com o cuidado personalizado.
            </p>
            <p className="text-lg text-gray-700">
              Também valorizamos a formação de novos profissionais, oferecendo oportunidades 
              para estagiários e contribuindo para o desenvolvimento da medicina veterinária.
            </p>
            
            <div className="mt-10 p-6 bg-saofrancisco-beige/20 rounded-lg border-l-4 border-saofrancisco-brown">
              <div className="flex items-start">
                <Phone className="text-saofrancisco-brown mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-saofrancisco-brown">Acompanhamento personalizado</h4>
                  <p className="text-gray-700">
                    Nossa diretora liga pessoalmente para acompanhar a recuperação dos pacientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-saofrancisco-beige/30 text-center">
              <span className="block text-4xl font-bold text-saofrancisco-green mb-2">{stat.number}</span>
              <span className="text-gray-700">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Compromisso social</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nossa equipe está diretamente envolvida com ONGs e projetos sociais, 
            apoiando feiras de adoção e promovendo o bem-estar animal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


import React from 'react';

const HistorySection = () => {
  return (
    <section id="historia" className="py-16 md:py-24 bg-gradient-beige">
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="section-title">Nossa História</h2>
            <p className="text-lg text-gray-700">
              O Hospital Veterinário São Francisco foi fundado por Luiz Carlos de Oliveira em 1986, 
              sendo o primeiro hospital veterinário de Brasília. Sua criação foi inspirada após visitas 
              técnicas realizadas aos EUA, Canadá e Japão, trazendo o que havia de mais moderno em 
              medicina veterinária para a capital federal.
            </p>
            <p className="text-lg text-gray-700">
              Um projeto familiar desde a concepção, o hospital foi totalmente idealizado pela família e se 
              tornou pioneiro no setor, contribuindo para a formação de inúmeros profissionais e 
              para o desenvolvimento da medicina veterinária no Distrito Federal.
            </p>
            <p className="text-lg text-gray-700">
              A família também foi responsável pela fundação da Associação de Clínicos Veterinários, 
              fortalecendo ainda mais a presença e relevância do Hospital São Francisco na 
              comunidade veterinária de Brasília e região.
            </p>
            
            <div className="flex items-center pt-4">
              <div className="h-1 w-20 bg-saofrancisco-green rounded mr-4"></div>
              <span className="text-saofrancisco-brown font-playfair italic">Quase 40 anos de tradição e excelência</span>
            </div>
          </div>
          
          <div className="md:col-span-2 grid gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform -rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Hospital em seus primeiros anos" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1584381006705-4d73dfa6836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Hospital hoje" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border-l-4 border-saofrancisco-brown">
          <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Nossos valores</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {["Compaixão", "Responsabilidade", "Tradição", "Ciência", "Amor pelos animais"].map((value, index) => (
              <div key={index} className="p-4">
                <span className="block text-4xl text-saofrancisco-green mb-2">
                  {["❤️", "🤝", "🏛️", "🔬", "🐾"][index]}
                </span>
                <span className="font-medium text-gray-800">{value}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-600 italic">
            Inspirado em São Francisco de Assis, símbolo do cuidado com todos os seres vivos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

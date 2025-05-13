
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Meu gato foi atendido em uma emergência e recebi um tratamento excepcional. A Dra. Cláudia ligou pessoalmente no dia seguinte para saber como ele estava.",
      name: "Maria Silva",
      pet: "Tutor do Simba"
    },
    {
      quote: "Confio no Hospital São Francisco há mais de 20 anos. Todos os meus cães foram tratados aqui e sempre tive a certeza do melhor cuidado possível.",
      name: "Carlos Mendes",
      pet: "Tutor da Luna"
    },
    {
      quote: "Quando minha calopsita adoeceu, fiquei desesperada. O atendimento especializado para aves foi fundamental para sua recuperação.",
      name: "Ana Torres",
      pet: "Tutora da Pipoca"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-saofrancisco-beige/40">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">O que nossos clientes dizem</h2>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-6xl text-saofrancisco-brown/20 select-none">
                "
              </div>
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-saofrancisco-brown">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.pet}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 italic">
            Atendemos clientes de todo o Distrito Federal e até de outros estados que confiam em nossa tradição e qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

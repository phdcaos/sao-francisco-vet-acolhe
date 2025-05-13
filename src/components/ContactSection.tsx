
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Informações de contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-saofrancisco-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-700">
                      SHIS QI 11 Bloco O, Lago Sul<br />
                      Brasília - DF, 71625-235
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-saofrancisco-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Telefone:</p>
                    <p className="text-gray-700">(61) 3248-0122</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="text-saofrancisco-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium">E-mail:</p>
                    <p className="text-gray-700">contato@hospitalsaofrancisco.com.br</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Horário de funcionamento</h3>
              <div className="bg-saofrancisco-beige/20 rounded-lg p-4">
                <p className="text-lg font-bold text-saofrancisco-green mb-2">Atendimento 24 horas</p>
                <p className="text-gray-700">
                  Para cães e gatos, inclusive finais de semana e feriados.
                </p>
                
                <p className="text-lg font-bold text-saofrancisco-green mt-4 mb-2">Animais silvestres e exóticos</p>
                <p className="text-gray-700">
                  Segunda a sexta: 8h às 18h<br />
                  Sábados: 8h às 12h
                </p>
              </div>
            </div>
          </div>
          
          <div id="agendar">
            <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saofrancisco-brown focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saofrancisco-brown focus:outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saofrancisco-brown focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="pet" className="block text-gray-700 mb-1">Espécie do seu pet</label>
                <select 
                  id="pet" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saofrancisco-brown focus:outline-none"
                >
                  <option value="">Selecione a espécie</option>
                  <option value="dog">Cão</option>
                  <option value="cat">Gato</option>
                  <option value="bird">Ave</option>
                  <option value="exotic">Animal exótico</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-saofrancisco-brown focus:outline-none h-32"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button type="submit" className="button-primary w-full">Enviar mensagem</button>
            </form>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-saofrancisco-brown">Nossa localização</h3>
          <div className="h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0880989867307!2d-47.9!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiUyA0N8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

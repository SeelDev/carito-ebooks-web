// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  // Estado para saber cuál pregunta está abierta (null = ninguna)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const preguntas = [
    {
      pregunta: "¿Tengo acompañamiento para decidir qué ebook es para mí?",
      respuesta: (
        <span>
          Podés hablarme directamente por {' '}
          <a 
            href="https://wa.me/message/FBYSYJ6OAT77G1"  /*CAMBIAR WHATSAPP*/
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 font-bold hover:underline"
          >
            WhatsApp
          </a>{' '}
          o escribirme en{' '}
          <a 
            href="https://www.instagram.com/carito.descubrimientodelser/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 font-bold hover:underline"
          >
            Instagram
          </a>.
          Estoy para guiarte.
        </span>
      ),
    },
    {
      pregunta: "¿Cuánto le dedico al día a los ejercicios?",
      respuesta: "Entre 10 a 15 minutos al día. Los ejercicios son breves pero requieren de toda tu INTENCIÓN. Podés realizarlos de día o de noche, cuando encuentres tu momento de atención y calma.",
    },
  {
    pregunta: "¿Cómo recibo el ebook?",
    respuesta: (
      <div className="flex flex-col gap-4"> {/* gap-4 le da el espacio entre párrafos */}
        
        <p>
          Es súper simple. Al efectuarse el pago, descargás tu ebook en formato PDF imprimible.
        </p>
        
        <p>
          <strong>¿Inconvenientes con el acceso?</strong> Podés hablar con soporte por{' '}
          <a 
            href="https://wa.me/message/YSAKV5GAHH2TK1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-600 font-bold hover:underline"
          >
            WhatsApp
          </a>.
        </p>

      </div>
    ),
  },
];

  return (
    <section className="bg-green-50/50 py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-serif text-center text-green-900 mb-12">
          Preguntas Frecuentes
        </h2>

        {/* Lista de Preguntas */}
        <div className="space-y-4">
          {preguntas.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-green-50/30 transition-colors"
              >
                <span className="font-medium text-lg text-gray-800">
                  {item.pregunta}
                </span>
                {/* Ícono de flechita que gira */}
                <span className={`transform transition-transform duration-300 text-green-600 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Respuesta Desplegable */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
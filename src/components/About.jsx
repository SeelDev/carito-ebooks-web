// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 1. LA FOTO (Izquierda) */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-[300px] h-[350px] md:w-[350px] md:h-[400px]">
              {/* Decoración de cuadro verde atrás (opcional, queda lindo) */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-green-200 rounded-lg -z-10"></div>
              
              <img 
                src="/images/carito.webp" /* <--- ASEGURATE DE QUE SE LLAME ASÍ */
                alt="Carito Luna" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* 2. EL TEXTO (Derecha) */}
          <div className="w-full md:w-2/3">
            <h2 className="text-5xl font-serif text-green-800 mb-8 italic">
              Carito Luna
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed list-disc pl-5 marker:text-green-500">
              <li>Master en programación neurolingüística.</li>
              <li>Coach especialista en aprendizajes: habilidades blandas.</li>
              <li>Terapeuta holística, instructora de mindfulness.</li>
              <li>Neurociencia del bienestar.</li>
              <li>Docente. Conferencista: neuro oratoria.</li>
              <li>Formación en UCDM, espiritualidad y mapa de los niveles de consciencia (Dr. David Hawkins).</li>
              <li>Coach ontológico.</li>
              <li>Diseñadora de experiencia de bienestar: retiros y jornadas holísticas.</li>
              <li>
                Creadora de la membresía y acompañamiento personalizado{' '}
                <span className="italic font-semibold text-green-700">Descubrimiento del ser</span>.
              </li>
            </ul>

          </div>
        </div>
          {/* --- SECCIÓN DE REDES --- */}
            <div className="border-t border-green-100 pt-6">
              <h3 className="text-green-800 font-semibold mb-4 flex items-center gap-2">
                🌿 Sigamos conectadas:
              </h3>
              
              <div className="flex flex-wrap gap-4">
                
                {/* Instagram 1: Carito Luna */}
                <a 
                  href="https://www.instagram.com/carito.descubrimientodelser/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors border border-green-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  @carito.descubrimientodelser
                </a>

                {/* Instagram 2: Descubrimiento del Ser */}
                <a 
                  href="https://www.instagram.com/descubrimientodelser.online/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors border border-green-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  @descubrimientodelser.online
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://chat.whatsapp.com/I6Fdzwvv3wU1ehySMPHH0Y?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Ingresá al grupo de WhatsApp
                </a>

              </div>
            </div>
            {/* --- FIN SECCIÓN REDES --- */}
      </div>
    </section>
  );
};

export default About;
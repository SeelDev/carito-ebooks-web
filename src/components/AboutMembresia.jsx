// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#fcfbf9]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 1. LA FOTO */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-[300px] h-[350px] md:w-[350px] md:h-[400px]">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-amber-200 rounded-lg -z-10"></div>
              <img 
                src="/images/carito.webp" 
                alt="Carito Luna" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* 2. EL TEXTO */}
          <div className="w-full md:w-2/3">
            <h2 className="text-5xl font-serif texto-dorado mb-8 italic">
              Carito Luna
            </h2>

          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc pl-5 marker:text-amber-500 mb-10">
  <li>
    <span className="font-bold text-amber-900">Coaching y Neurociencia:</span> Master en Programación Neurolingüística. Coach en educación, especialista en habilidades blandas. Docente. Conferencista: neuro oratoria. Coach ontológico. 
  </li>
  <li>
    <span className="font-bold text-amber-900">Bienestar Holístico:</span> Terapeuta holística. Somáticos. Instructora de mindfulness.
  </li>
  <li>
    <span className="font-bold text-amber-900">Espiritualidad:</span> Formación integral en UCDM, espiritualidad y niveles de consciencia (Dr. David Hawkins).
  </li>
  <li>
    Creadora de la membresía y acompañamiento personalizado{' '}
    <span className="italic font-semibold text-amber-700">Descubrimiento del ser</span>.
  </li>
</ul>
            {/* NUEVO BLOQUE: EVENTOS PRESENCIALES */}
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                 Eventos y Retiros Presenciales
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Creo experiencias transformadoras en espacios presenciales. 
             </p>
              <a 
                href="https://www.instagram.com/carito.descubrimientodelser/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-700 font-bold hover:text-amber-900 underline underline-offset-4 decoration-amber-400"
              >
                Ver testimonios y videos en mi perfil &rarr;
              </a>
            </div>
          </div>
        </div>
          
        {/* --- SECCIÓN REDES (Mismo estilo) --- */}
        <div className="border-t border-amber-100 pt-10 mt-10">
          <h3 className="text-amber-900 font-semibold mb-6 flex items-center gap-2">
            Sigamos conectadas:
          </h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/carito.descubrimientodelser/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 transition-colors border border-amber-200">@carito.descubrimientodelser</a>
            <a href="https://www.instagram.com/descubrimientodelser.online/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-amber-50 text-amber-700 rounded-full hover:bg-amber-100 transition-colors border border-amber-200">@descubrimientodelser.online</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
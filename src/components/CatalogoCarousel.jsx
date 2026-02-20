// src/components/CatalogoCarousel.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CatalogoCarousel = ({ listaLibros = [], tituloSeccion }) => {
  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Título de la Sección */}
        <h2 className="text-4xl font-serif text-gray-800 mb-2">
          {tituloSeccion || "Nuestra Colección"}
        </h2>
        
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-12"></div>

        {/* --- EL CARROUSEL --- */}
        <div className="flex overflow-x-auto gap-8 pb-10 px-4 snap-x snap-mandatory hide-scrollbar justify-start">
          
          {listaLibros.map((libro) => (
            <div 
              key={libro.id} 
              className="min-w-[300px] max-w-[300px] snap-center bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col flex-shrink-0"
            >
              
              {/* IMAGEN VERTICAL COMPLETA */}
              <div className="w-full h-[350px] mb-4 relative group">
                <img 
                  src={libro.imagen} 
                  alt={libro.titulo} 
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Info del Libro */}
              <div className="flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight min-h-[3.5rem]">
                  {libro.titulo}
                </h3>
                
                {/* --- NUEVA DESCRIPCIÓN EXTRA FLEXIBLE --- */}
                <div className="min-h-[45px] mb-4">
                  {libro.badgeExtra && (
                    <p className="text-emerald-600 text-[11px] font-bold uppercase tracking-wider leading-tight flex items-start gap-1 italic">
                      <span className="text-emerald-500"></span>
                      {libro.badgeExtra}
                    </p>
                  )}
                </div>
                
                <p className="text-emerald-600 font-bold text-lg mb-4">
                  {libro.precio}
                </p>
                
                <Link 
                  to={`/ebook/${libro.id}`} 
                  className="mt-auto block w-full py-3 rounded-lg border-2 border-green-600 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CatalogoCarousel;
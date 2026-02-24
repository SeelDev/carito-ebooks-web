import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

const CatalogoCarousel = ({ listaLibros = [], tituloSeccion }) => {
  // 1. Estado para controlar la carga inicial
  const [isLoading, setIsLoading] = useState(true);

  // 2. Simulamos la carga (800ms para que se aprecie el efecto)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  const getPrecioTransferencia = (precioStr) => {
    const numerico = parseInt(precioStr.replace(/[^0-9]/g, ''));
    const descuento = Math.round(numerico * 0.50); // 50% de descuento
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'ARS', 
      minimumFractionDigits: 0 
    }).format(descuento);
  };

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-serif text-gray-800 mb-2">
          {tituloSeccion || "Nuestra Colección"}
        </h2>
        
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-12"></div>

        <div className="flex overflow-x-auto gap-8 pb-10 px-4 snap-x snap-mandatory hide-scrollbar justify-start">
          
          {isLoading ? (
            // --- ESTADO DE CARGA: Skeletons ---
            [1, 2, 3, 4].map((n) => (
              <div 
                key={n} 
                className="min-w-[300px] max-w-[300px] bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col flex-shrink-0"
              >
                <Skeleton className="w-full h-[350px] mb-4" />
                <Skeleton className="h-7 w-3/4 mb-2" />
                <Skeleton className="h-7 w-1/2 mb-4" />
                <Skeleton className="h-4 w-1/3 mb-6" />
                <div className="mt-auto">
                  <Skeleton className="h-4 w-1/4 mb-1" />
                  <Skeleton className="h-8 w-1/2 mb-4" />
                  <Skeleton className="h-12 w-full rounded-lg" />
                </div>
              </div>
            ))
          ) : (
            // --- ESTADO FINAL: Libros con efecto Fade-in ---
            <div className="flex gap-8 animate-fade-in">
              {listaLibros.map((libro) => (
                <div 
                  key={libro.id} 
                  className="min-w-[300px] max-w-[300px] snap-center bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col flex-shrink-0 relative group"
                >
                  {/* Badge de descuento */}
                  <div className="absolute top-4 right-4 z-20 bg-[#00945E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                    -50% TRANSFERENCIA HOY
                  </div>

                  {/* Imagen */}
                  <div className="w-full h-[350px] mb-4 relative overflow-hidden rounded-xl">
                    <img 
                      src={libro.imagen} 
                      alt={libro.titulo} 
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex flex-col flex-grow text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight min-h-[3.5rem]">
                      {libro.titulo}
                    </h3>
                    
                    <div className="min-h-[45px] mb-2">
                      {libro.badgeExtra && (
                        <p className="text-emerald-600 text-[11px] font-bold uppercase tracking-wider leading-tight italic">
                          {libro.badgeExtra}
                        </p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-400 text-sm line-through leading-none mb-1">
                        {libro.precio}
                      </p>
                      <p className="text-[#00945E] font-black text-2xl tracking-tight">
                        {getPrecioTransferencia(libro.precio)}
                        <span className="text-[10px] ml-2 font-medium uppercase">en transferencia</span>
                      </p>
                    </div>
                    
                    <Link 
                      to={`/ebook/${libro.id}`} 
                      className="mt-auto block w-full py-3 rounded-lg border-2 border-green-600 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition-colors text-center uppercase text-xs tracking-widest"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CatalogoCarousel;
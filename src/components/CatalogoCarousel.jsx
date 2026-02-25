import React, { useState, useEffect, useRef } from 'react'; // Agregamos useRef
import { Link } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

const CatalogoCarousel = ({ listaLibros = [], tituloSeccion }) => {
  const [isLoading, setIsLoading] = useState(true);
  // 1. Creamos la referencia al contenedor del scroll
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // 2. Función para scrollear manualmente
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // El ancho de la tarjeta + gap aprox
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const getPrecioTransferencia = (precioStr) => {
    const numerico = parseInt(precioStr.replace(/[^0-9]/g, ''));
    const descuento = Math.round(numerico * 0.50);
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'ARS', 
      minimumFractionDigits: 0 
    }).format(descuento);
  };

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center relative group/main">
        
        <h2 className="text-4xl font-serif text-gray-800 mb-2">
          {tituloSeccion || "Nuestra Colección"}
        </h2>
        
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-12"></div>

        {/* 3. CONTENEDOR RELATIVO PARA LAS FLECHAS */}
        <div className="relative">
          
        {/* BOTÓN IZQUIERDA */}
        {!isLoading && (
          <button 
            onClick={() => scroll('left')}
            /* CAMBIOS AQUÍ: 
              - Quitamos 'hidden md:flex' y dejamos 'flex'
              - Ajustamos 'left-2' para mobile y 'md:-left-5' para PC
              - Quitamos 'opacity-0' para que se vea siempre en mobile
            */
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-2 md:p-3 rounded-full shadow-lg border border-gray-100 text-green-700 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        )}

        {/* BOTÓN DERECHA */}
        {!isLoading && (
          <button 
            onClick={() => scroll('right')}
            /* CAMBIOS AQUÍ:
              - 'right-2' para mobile y 'md:-right-5' para PC
            */
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-2 md:p-3 rounded-full shadow-lg border border-gray-100 text-green-700 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        )}

          {/* 4. AGREGAMOS EL REF AL CONTENEDOR DEL SCROLL */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-10 px-4 snap-x snap-mandatory hide-scrollbar justify-start scroll-smooth"
          >
            {isLoading ? (
              [1, 2, 3, 4].map((n) => (
                <div key={n} className="min-w-[300px] max-w-[300px] bg-white rounded-2xl p-5 shadow-lg border border-gray-100 flex flex-col flex-shrink-0">
                  <Skeleton className="w-full h-[350px] mb-4" />
                  <Skeleton className="h-7 w-3/4 mb-2" />
                  <Skeleton className="h-7 w-1/2 mb-4" />
                  <div className="mt-auto">
                    <Skeleton className="h-12 w-full rounded-lg" />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex gap-8 animate-fade-in">
                {listaLibros.map((libro) => (
                  <div 
                    key={libro.id} 
                    className="min-w-[300px] max-w-[300px] snap-center bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col flex-shrink-0 relative group"
                  >
                    <div className="absolute top-4 right-4 z-20 bg-[#00945E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md">
                      -50% TRANSFERENCIA HOY
                    </div>
                    <div className="w-full h-[350px] mb-4 relative overflow-hidden rounded-xl">
                      <img src={libro.imagen} alt={libro.titulo} loading="lazy" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col flex-grow text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight min-h-[3.5rem]">{libro.titulo}</h3>
                      <div className="min-h-[45px] mb-2">
                        {libro.badgeExtra && <p className="text-emerald-600 text-[11px] font-bold uppercase tracking-wider leading-tight italic">{libro.badgeExtra}</p>}
                      </div>
                      <div className="mb-6">
                        <p className="text-gray-400 text-sm line-through leading-none mb-1">{libro.precio}</p>
                        <p className="text-[#00945E] font-black text-2xl tracking-tight">
                          {getPrecioTransferencia(libro.precio)}
                          <span className="text-[10px] ml-2 font-medium uppercase text-gray-400">en transferencia</span>
                        </p>
                      </div>
                      <Link to={`/ebook/${libro.id}`} className="mt-auto block w-full py-3 rounded-lg border-2 border-green-600 text-green-700 font-semibold hover:bg-green-600 hover:text-white transition-colors text-center uppercase text-xs tracking-widest">
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoCarousel;
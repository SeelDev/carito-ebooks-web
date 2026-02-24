import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ebooks } from '../data/ebooks';
import ModalCompra from '../components/ModalCompra';
import './ProductPage.css';
import Skeleton from '../components/Skeleton';

const ProductPage = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  // 1. Estado para controlar la carga
  const [isLoading, setIsLoading] = useState(true);
  
  const libro = ebooks.find((e) => e.id === id);

  // === FUNCIÓN PARA EL DESCUENTO ===
  const getPrecioTransferencia = (precioStr) => {
    const numerico = parseInt(precioStr.replace(/[^0-9]/g, ''));
    const descuento = Math.round(numerico * 0.50); 
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'ARS', 
      minimumFractionDigits: 0 
    }).format(descuento);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // 2. Simulamos la carga para mostrar el Skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (!libro) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Ebook no encontrado</h2>
        <Link to="/" className="text-green-600 hover:underline mt-4 block">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 fade-in">
      
      {/* NAVBAR (Siempre visible para dar contexto) */}
      <nav className="product-nav container mx-auto flex justify-between items-center p-6 border-b border-green-50">
        <Link to="/" className="text-2xl font-bold text-green-900 hover:opacity-80 transition font-serif">
          Carito Luna
        </Link>
        <span className="text-lg text-emerald-600 italic font-serif">
          Descubrimiento del Ser
        </span>
      </nav>

      {/* 3. LÓGICA CONDICIONAL: Skeleton vs Contenido Real */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-start justify-center">
        
        {isLoading ? (
          /* --- VISTA SKELETON --- */
          <>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Skeleton className="w-full max-w-[380px] h-[500px]" />
            </div>
            <div className="w-full md:w-1/2 max-w-lg mt-2 space-y-6">
              <Skeleton className="h-14 w-3/4" /> {/* Título */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" /> {/* Precio tachado */}
                <Skeleton className="h-10 w-1/2" /> {/* Precio real */}
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="h-[200px] w-full rounded-xl" /> {/* Caja "¿Por qué?" */}
              <Skeleton className="h-16 w-full rounded-xl" /> {/* Botón */}
            </div>
          </>
        ) : (
          /* --- VISTA REAL DEL PRODUCTO --- */
          <>
            {/* COLUMNA IZQUIERDA: IMAGEN */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[380px] rounded-lg shadow-xl overflow-hidden group bg-white">
                <img 
                  src={libro.imagen} 
                  alt={libro.titulo} 
                  className="w-full h-auto object-contain p-2 transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* COLUMNA DERECHA: INFO */}
            <div className="w-full md:w-1/2 max-w-lg mt-2">
              <h1 className="text-4xl md:text-5xl font-serif text-green-950 mb-2 leading-tight">
                {libro.titulo}
              </h1>
              
              <div className="mb-6 mt-4">
                <p className="text-gray-400 text-lg line-through leading-none mb-1">
                  {libro.precio}
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl md:text-5xl text-[#00945E] font-black tracking-tighter">
                    {getPrecioTransferencia(libro.precio)}
                  </p>
                  <span className="text-sm font-bold uppercase text-[#00945E] tracking-wider">
                    ¡50% con transferencia HOY!
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-snug mb-8 whitespace-pre-line">
                {libro.descripcion}
              </p>

              {libro.porque && (
                <div className="mb-8 bg-green-50/50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-serif text-green-800 mb-4 font-semibold">
                    Este ebook es para vos si querés...
                  </h3>
                  <ul className="space-y-3">
                    {libro.porque.map((razon, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span 
                            className="leading-snug" 
                            dangerouslySetInnerHTML={{ __html: razon }} 
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-[#40B3A2] text-white py-4 rounded-xl font-bold hover:bg-[#369a8b] transition-all shadow-lg active:scale-95 text-xl uppercase tracking-widest"
              >
                Comprar ahora
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm mb-10 bg-emerald-50 py-2 rounded-lg">
                <span className="text-lg">✨</span>
                <p className="font-medium">¡Obtené tu ebook abonando por WhatsApp ahora!</p>
              </div>

              {/* REDES */}
              <div className="border-t border-green-100 pt-6 text-center">
                <p className="text-green-800 font-semibold mb-3 text-sm">¿Tenés dudas? Hablemos:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="https://instagram.com/carito.descubrimientodelser" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm border border-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    @carito.descubrimientodelser
                  </a>
                  <a href="https://wa.me/5491125461422" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <ModalCompra 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        ebook={libro}
      />
    </div>
  );
};

export default ProductPage;
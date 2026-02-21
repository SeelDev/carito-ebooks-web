import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom'; // Agregamos useParams
import { ebooks } from '../data/ebooks';

const ThankYou = () => {
  const { id } = useParams(); // <--- Atrapamos el ID desde la URL (el que mandás por WhatsApp)
  const location = useLocation();

  // 1. RECUPERAR DATOS DEL COMPRADOR
  // Priorizamos el ID de la URL, si no está, buscamos en el estado o localStorage
  const ebookId = id || location.state?.ebookId || localStorage.getItem('idComprado');
  const nombre = location.state?.nombre || "Agradecedor/a consciente";
  
  const ebookComprado = ebooks.find(e => e.id === ebookId);
  const otrosEbooks = ebooks.filter(e => e.id !== ebookId);

  // 2. LÓGICA DEL TIMER (15 MINUTOS)
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // 3. LÓGICA DEL DESCUENTO (20%)
  const calcularPrecioDescuento = (precioString) => {
    if (!precioString) return "$ 0";
    const numeroLimpio = precioString.replace(/[^0-9]/g, ''); 
    const precioOriginal = parseInt(numeroLimpio);
    const precioConDescuento = precioOriginal * 0.80; 
    return new Intl.NumberFormat('es-AR', { 
      style: 'currency', 
      currency: 'ARS', 
      minimumFractionDigits: 0 
    }).format(precioConDescuento);
  };

  // Validamos si no se encuentra el ebook para no romper la página
  if (!ebookComprado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-serif text-green-900">¡Ups! No encontramos tu ebook.</h2>
        <p className="text-gray-500 mb-6">Si ya realizaste el pago, contactanos por WhatsApp.</p>
        <Link to="/" className="text-emerald-600 font-bold hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="bg-emerald-50/20 min-h-screen pt-12 font-sans pb-20">
      <div className="container mx-auto px-6 text-center">
        
        {/* === CABECERA === */}
        <div className="mb-12">
          <span className="text-5xl mb-4 block animate-bounce">✨</span>
          <h1 className="text-4xl md:text-5xl font-serif text-green-950 mb-2 italic">
            ¡Hola, {nombre.split(' ')[0]}!
          </h1>
          <h2 className="text-2xl font-serif text-green-800">Tu compra fue confirmada</h2>
          <p className="text-gray-500 mt-4">Tu proceso de transformación comienza aquí.</p>
        </div>

        {/* === TARJETA DEL EBOOK COMPRADO === */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-green-100 flex flex-col md:flex-row items-center gap-8 mb-20 shadow-xl transform transition hover:scale-[1.01]">
          <div className="w-40 flex-shrink-0">
             <img 
               src={ebookComprado.imagen} 
               alt={ebookComprado.titulo} 
               className="w-full h-auto shadow-lg rounded-xl border border-gray-100"
             />
          </div>
          <div className="text-left flex-1">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[3px] mb-2 block">Material Adquirido</span>
            <h3 className="text-2xl font-serif text-green-950 mb-6 leading-tight">
              {ebookComprado.titulo}
            </h3>
            
            {/* BOTÓN DESCARGAR: Usa el link real de tu data */}
            <a 
              href={ebookComprado.linkDescarga} 
              download 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-descarga"
            >
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM12 17l-4-4h2.5v-4h3v4H16l-4 4z" />
                </svg>
              </div>
              <span>Descargar ebook</span>
            </a>
          </div>
        </div>

        {/* === SECCIÓN REMARKETING (OFERTA ESPECIAL) === */}
        <div className="max-w-6xl mx-auto bg-emerald-100 rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-inner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="text-left">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">¡SOLO POR HOY!</span>
                <h3 className="text-3xl font-serif text-green-900 mt-2 leading-tight">
                  Complementá tu lectura <br/> con un <span className="text-emerald-700 italic">20% OFF</span>
                </h3>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-emerald-200 shadow-sm text-center min-w-[140px]">
                <p className="text-xs text-green-800 font-bold uppercase tracking-widest mb-1">La oferta expira en</p>
                <p className="text-3xl font-mono font-black text-red-500">{formatTime(timeLeft)}</p>
              </div>
            </div>

            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
              {otrosEbooks.map((item) => (
                <div key={item.id} className="min-w-[260px] md:min-w-[280px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 snap-center border border-emerald-50 group flex flex-col justify-between h-auto">
                  <div>
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                      <img 
                        src={item.imagen} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        alt={item.titulo}
                      />
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">-20%</div>
                    </div>

                    <div className="text-left mb-4">
                      <h4 className="font-serif text-green-900 text-lg leading-tight mb-3">
                        {item.titulo}
                      </h4>
                      <div className="flex flex-col items-start gap-0">
                        <span className="text-gray-400 text-xs line-through decoration-red-400 decoration-1">
                          Antes: {item.precio}
                        </span>
                        <span className="text-emerald-600 font-black text-2xl">
                          {calcularPrecioDescuento(item.precio)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/oferta/${item.id}`} 
                    className="block w-full text-center border-2 border-emerald-600 text-emerald-700 font-bold py-2 rounded-xl hover:bg-emerald-600 hover:text-white transition uppercase text-xs tracking-wider mt-auto"
                  >
                    Aprovechar Oferta
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pb-4 flex flex-col items-center opacity-70">
          <Link 
            to="/" 
            className="mb-8 flex items-center gap-3 px-8 py-3 rounded-full border border-emerald-300 text-emerald-800 font-bold text-sm hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            VOLVER AL INICIO
          </Link>
          <div className="flex gap-8 mb-6">
             <a href="https://wa.me/message/FBYSYJ6OAT77G1" target="_blank" rel="noreferrer" className="text-emerald-700 font-bold text-sm hover:underline tracking-widest uppercase">WhatsApp</a>
             <a href="https://instagram.com/carito.descubrimientodelser" target="_blank" rel="noreferrer" className="text-pink-700 font-bold text-sm hover:underline tracking-widest uppercase">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;